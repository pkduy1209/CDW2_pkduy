var webpack = require('webpack');

module.exports = {
	entry:{
    home: './src/home.js',
    contact: './src/contact.js',
    product: './src/product.js', 
    single: './src/single.js',
	},
	output:{
		filename: '[name].bundle.js',
    path: __dirname + '/dist'
	},
  watch: true,
 
	module:{
		rules: [
    {test:/\.html$/, loader: ['html-loader'],},
		{test:/\.css$/, loaders:['style-loader', 'css-loader']},
		{test: /\.(jpg|png|gif|svg)$/i, loader: "file-loader?name=images/[name].[ext]"},
  {
    test: /\.(scss)$/,
    use: [{
      loader: 'style-loader', // inject CSS to page
    }, {
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'sass-loader' // compiles Sass to CSS
    }]
  },
  { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
  { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
  {
    test: /\.(png|jpg|gif)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ]
  }
    ]
  },
  

};