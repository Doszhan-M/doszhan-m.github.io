const path = require('path');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const HtmlWebpackPlugin = require("html-webpack-plugin")


const paths = [
    {
      path: '/',
      lastmod: '2022-07-31',
      priority: 1,
      changefreq: 'yearly'
    },
    {
      path: '/weather_forecast/',
      lastmod: '2022-07-31',
      priority: 0.8,
      changefreq: 'never'
    },
  ];


module.exports = {
    devServer: {
        static: {
            directory: __dirname, // Указываем корень проекта для сервера
        },
        compress: true, // Включаем сжатие
        port: 8080,     // Порт, можно изменить
        open: true,     // Автоматическое открытие в браузере
        hot: true,      // Включение горячей перезагрузки
    },
    mode: 'development',
    entry: './js/entry.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|mp4|ico|jpe?g|gif)$/,
                include: /img/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images/',
                      publicPath: 'images/'
                    }
                  }
                ]
              },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin (
            {
                template: "./index.html",
                favicon: "./img/favicon.ico"
            }
        ),
        new SitemapPlugin({
            base: 'https://doszhan-m.github.io/',
            paths,
            options: {
              filename: 'sitemap.xml'
            }
          })
    ]
}
