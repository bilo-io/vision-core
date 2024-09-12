const {
    execSync
} = require('child_process');
const fs = require('fs');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

// Get the version from package.json
const version = packageJson.version;

if (!version) {
    console.error('Version not found in package.json');
    process.exit(1);
}

try {
    // Create the Git tag
    execSync(`git tag ${version}`, {
        stdio: 'inherit'
    });

    // Push the tag to the repository
    execSync(`git push origin ${version}`, {
        stdio: 'inherit'
    });

    console.log(`Git tag ${version} created and pushed.`);
} catch (error) {
    console.error('Error creating or pushing Git tag:', error.message);
    process.exit(1);
}
