import packageJSON from './package.json'
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
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
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new ModuleFederation({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: packageJSON.dependencies
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}