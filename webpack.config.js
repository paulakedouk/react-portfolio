const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            {
                test: /\.(gif|png|jpe?g|svg)$/i, use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}