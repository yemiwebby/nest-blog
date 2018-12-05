const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: ['./public/js/main.js'],
    watch: true,
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
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
}