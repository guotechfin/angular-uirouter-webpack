const path = require('path');

module.exports = {
    entry: './app/index.js',

    output: {
        path: './target',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'ng-annotate', exclude: /node_modules/ },
            { test: /\.css$/,  loader: 'style!css'   },
            { test: /index\.html$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.template\.html$/, loader: 'file-loader' },
        ],
        preLoaders: [
            { test: /\.js$/, loader: 'source-map-loader' }
        ]
    }
};
