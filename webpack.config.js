const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "../css/style.css",
});
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new UglifyJSPlugin(),
        extractSass,
        new CopyPlugin([
            { from: './node_modules/bootstrap/dist/css', to: '../css' },
        ]),
    ],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.css$/,
                loader: 'style-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: {
                    minimize: true
                }
            }
        ]
    }
};