const path = require('path');
const glob = require('glob')
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // plugin 一定要引入，且要加在 plugins 裡面
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, 'src')
  }

const config = {
    entry: {
        main: "./src/index.js",
        // footer: "./src/footer.js", // 你可能輸出是給其他人用，所以進入就先分開。 會依照你上下順序，結果html 的引入順序
        // component: "./src/libs/component.js"
    },
    output: {
        filename: "[name].[hash].js", // 程式化命名，就是會 entry's key
        path: path.resolve(__dirname, 'dist'),  // __dirname 專案的目錄位址。
        // library: "myComponent",
        // libraryTarget: "var",

    },
    module: {
        rules: [
            {
                test: /\.css$/i, // 所有什麼什麼.css 都吃掉
                use: [MiniCssExtractPlugin.loader, "css-loader"] //後面的先, 而且
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 7890,
        hot: true
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new htmlWebpackPlugin({
            title: "Demo Learning",
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(`${PATHS.src}/*`,  { nodir: true }),
            whitelist: function () {
                return ['hello'];
            }
        }),
    ],
    devtool: "inline-source-map",
    // externals: {
    //     jquery: 'jQuery'
    // },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
}

module.exports = (env, argv) => {
    console.log(env, argv)
    if (argv.mode === "production") {
        config.devtool =   "inline-source-map";
        // yarn build 就知道，prod 才有 sourceMap
    } else if (argv.mode === "production") {
        
    }
    // if (env.dev) {
    //     // ...
    // }
    // if (env.NODE_ENV === "local") {
    //     // ...
    // }
    return config;
}