const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist/public'),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader",
                    options: {
                        plugins: function () {
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/index.ejs',
            filename: '../views/index.ejs'
        }),
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/number.ejs',
            filename: '../views/number.ejs'
        }),
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/error.ejs',
            filename: '../views/error.ejs'
        })
    ]
};