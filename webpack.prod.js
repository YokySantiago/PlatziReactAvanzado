const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const { GenerateSW } = require('workbox-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu App de fotos de mascotas',
      short_name: 'Petgram',
      description: 'Con petgram puedes encontrar fotos de animales',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve(__dirname, 'src', 'assets', 'icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.cloudinary.com|images.unsplash.com)'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-yoky-gimzpddbv.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        },
        {
          urlPattern: new RegExp('/'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'webapp'
          }
        }
      ]
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'robots.txt'),
          to: path.resolve(__dirname, 'dist', 'robots.txt')
        }
      ]
    })
  ]
})
