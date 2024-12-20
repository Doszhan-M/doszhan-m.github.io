const path = require('path');
const SitemapPlugin = require('sitemap-webpack-plugin').default;


const paths = [
    {
      path: '/',
      lastmod: '2025-01-10',
      priority: 1,
      changefreq: 'yearly'
    },
    {
      path: '/weather_forecast/',
      lastmod: '2025-01-22',
      priority: 0.8,
      changefreq: 'never'
    },
  ];


module.exports = {
    devServer: {
        static: {
            directory: __dirname,
        },
        compress: true,
        port: 8080,
        open: true,
        hot: true,
    },
    mode: 'production',
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
        new SitemapPlugin({
            base: 'https://doszhan-m.github.io/',
            paths,
            options: {
              filename: 'sitemap.xml'
            }
          })
    ]
}
