操作方式
yarn serve

作業一
為環境加上一種 loader，並實際使用該 loader
=> vue-loader

作業二
為環境加上一種 plugin，並說明加上該 plugin 後增加了什麼功能或解決什麼問題

PurgeCSSPlugin
=> 規範允諾的檔案路徑，移除不必要的 css

ProvidePlugin
=> 課堂中有提及， jquery 用 externals 省去不斷打包的成本
這邊做一個反向思考的練習，故意將他打包，
ProvidePlugin 可以根據你設定的區域在任何模組,window直接使用
而且可以同時掛其他熱門套件，如 lodash


作業三
完成上課所教 html-webpack-plugin、clean-webpack-plugin、mini-css-extract-plugin、devServer 的功能

