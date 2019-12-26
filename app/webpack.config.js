const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry:'./src/app.jsx',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.(js|jsx)$/,exclude:/node_moudles/,use:'babel-loader'},
            {test:/\.less$/,use:'less-loader'},
            {test:/\.css$/,loader:'style-loader!css-loader'},
            
        ]
    },
    devServer:{
        port:3000,
        contentBase:"./src"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"index.html",
            inject:true,
            sourceMap:true,
            chunksSortMode:"dependency"
        }),
        // new CleanWebpackPlugin(["build"]),
    ],    
    mode:'development',
}