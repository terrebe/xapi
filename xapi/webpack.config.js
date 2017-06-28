var webpack = require("webpack");

module.exports = {
	entry: '/Users/Ben/Documents/projects/xapi/src/index.js',
	output: {
		filename: 'bundle.js',
		path: '/Users/Ben/Documents/projects/xapi/dist/assets',
		publicPath: "assets"
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: ["babel-loader"],
				query: {
					presets: ["latest", "stage-0", "react"]
				}
			}
		]
	}
}
