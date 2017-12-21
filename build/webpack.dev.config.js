const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ProgressBarPlugin = require('progress-bar-webpack-plugin')

var autoprefixer = require('autoprefixer')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    context: path.resolve(__dirname, '..'),
    entry: {
        bundle: [
            './client',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
        ],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'superagent'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: '[name].js',
        chunkFilename: 'chunk.[name].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0', 'react-hmre'],
                plugins: ['transform-runtime', 'add-module-exports'],
                cacheDirectory: true
            }
        }, {
            test: /\.css$/,
            use: [
                'to-string-loader',
                'css-loader'
            ]
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ]
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            loader: 'url?limit=8000'
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: false,
                    //开启link的替换
                    attrs: ['img:src', 'link:href']
                }
            }],
        }]
    },
    resolve: {extensions: ['.js', '.css', '.scss']},
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(), // 提升运行效率
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            filename: '[name].js'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
        new HtmlWebpackPlugin({
            filename: '../views/dev/index.html',
            template: './views/tpl/index.tpl.html'
        }),
        new CopyWebpackPlugin([{
            from: './static',
            to: 'static',
        }]),
        new ProgressBarPlugin({summary: false})
    ]
}
