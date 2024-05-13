const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts', // Your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      // Loader for TypeScript files
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Loader for TypeScript React files
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Loader for SVG files
      {
        test: /\.svg$/,
        use: {
            loader: 'file-loader',
            options: {
                outputPath: 'assets', // Specify output directory
            },
        }
      },
        //   Styles
     {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [
    // Add any necessary plugins, such as CopyWebpackPlugin
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/**/*.svg', to: 'assets' }, // Adjust as needed
      ],
    }),
  ],
};
