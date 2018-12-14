const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ROOT = path.join(__dirname, "..");
const src = path.join(ROOT, "src");
const dist = path.join(ROOT, "dist");

console.log(src);

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: path.join(src, "index.tsx"),
    output: {
        path: dist,
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {test: /\.tsx?$/, use: 'awesome-typescript-loader'},
            {test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "New Tab",
            template: path.join(src, "index.html")
        }),
        new CopyWebpackPlugin([{
            from: path.join(src, 'manifest.json'),
            to: '.'
        }])
    ],
    devServer: {
        port: 3030,
        historyApiFallback: {
            index: 'index.html'
        }
    }
};