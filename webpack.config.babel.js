
import {join} from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const include = join(__dirname, 'src')

export default {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'react-listbox',
  },
  plugins: [
      new ExtractTextPlugin("react-listbox.css")
  ],
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          babelrc: false,
          presets: ['react', 'latest'],
          plugins: [
            "transform-class-properties",
            "transform-react-constant-elements"
          ]
        },
        include
      },
      {test: /\.json$/, 'loader': 'json', include},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss')
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'static/[name].[ext]'
        }
      }
    ]
  }
}