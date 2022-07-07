import packageJSON from './package.json'
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            filename: 'remoteEntry.js',
            name: 'marketing',
            exposes: {
                './marketApp': './src/bootstrap.js'
            },
            shared: packageJSON.dependencies
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}