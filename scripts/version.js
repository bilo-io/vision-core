/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const {
    exec
} = require('child_process');

const pkgPath = path.resolve(__dirname, '../package.json');
const pkg = require(pkgPath);

const currentVersion = pkg.version.split('.').map(Number);

console.log(`📄 Current version: ${pkg.version}`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

const updateVersion = (type) => {
    switch (type) {
        case 'major':
            currentVersion[0]++;
            currentVersion[1] = 0;
            currentVersion[2] = 0;
            break;
        case 'minor':
            currentVersion[1]++;
            currentVersion[2] = 0;
            break;
        case 'patch':
            currentVersion[2]++;
            break;
    }
    return currentVersion.join('.');
};

(async () => {
    exec('git status --porcelain', async (err, stdout, stderr) => {
        console.log('📊 Checking git status...');
        if (err) {
            console.error('❌ Error running git status');
            throw err;
        }

        if (stdout) {
            console.log('⚠️ There are uncommitted changes:');
            console.log(stdout);

            const proceed = await askQuestion('Would you like to continue anyway? (y/n): ');
            if (proceed.toLowerCase() !== 'y') {
                console.log('❌ Process cancelled.');
                rl.close();
                return;
            }
        }

        console.log('\nSelect which part of the version to bump:');
        console.log('1. Major');
        console.log('2. Minor');
        console.log('3. Patch');

        const choice = await askQuestion('Enter your choice (1/2/3): ');
        let newVersion;

        switch (choice) {
            case '1':
                newVersion = updateVersion('major');
                break;
            case '2':
                newVersion = updateVersion('minor');
                break;
            case '3':
                newVersion = updateVersion('patch');
                break;
            default:
                console.log('Invalid choice. Exiting.');
                rl.close();
                return;
        }

        pkg.version = newVersion;
        console.log(`🚀 New version: ${newVersion}`);
        console.log('----------------------------------------');

        fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2), (err) => {
            if (err) {
                console.error('❌ Error writing to package.json');
                throw err;
            }
            console.log('✅ package.json updated with new version');
        });

        const versionData = JSON.stringify({
            version: newVersion
        }, null, 2);

        fs.writeFile(path.resolve(__dirname, '../public/version.json'), versionData, (err) => {
            if (err) {
                console.error('❌ Error writing to public/version.json');
                throw err;
            }
            console.log('✅ Data written to public/version.json');
        });

        fs.writeFile(path.resolve(__dirname, '../src/version.json'), versionData, (err) => {
            if (err) {
                console.error('❌ Error writing to src/version.json');
                throw err;
            }
            console.log('✅ Data written to src/version.json');
        });

        console.log('----------------------------------------');

        exec('yarn changelog', (err, stdout, stderr) => {
            console.log('📊 Running yarn changelog...');
            if (err) {
                console.error('❌ Error running yarn changelog');
                throw err;
            }
            console.log('✅ CHANGELOG.md updated');
            console.log('----------------------------------------');

            exec(`git add . && git commit -m "feat: bump version to ${newVersion}"`, (err, stdout, stderr) => {
                console.log('📊 Staging and committing changes...');
                if (err) {
                    console.error('❌ Error staging and committing changes');
                    throw err;
                }
                console.log('✅ Changes staged and committed');
            });
        });

        rl.close();
    });
})();
