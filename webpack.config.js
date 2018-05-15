const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");

const plugins = [
    new HtmlWebpackPlugin({
        template: "src/index.html",
        filename: "index.html",
        inject: "body"
    })
];
new OptimizeJsPlugin({
    sourceMap: false
});
module.exports = env => {
    // Production Configuration
    const environment = env || "production";
    //--------------------------------------

    // Development Configuration
    // const environmentDevelopment = env || 'development';
    //-----------------------------------------------------

    // Production Configuration
    return {
        mode: environment,
        entry: "./src/index.js",
        optimization: {
            minimize: true
        },
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "app." + environment + ".bundle.js"
        },
        //-----------------------------------------------

        // Development Configuration
        // return {
        //     mode: environmentDevelopment,
        //     entry: "./src/index.js",
        //     output: {
        //         path: path.resolve(__dirname, "build"),
        //         filename: 'app.' + environmentDevelopment + '.bundle.js'
        //     },
        //-----------------------------------------------------------------

        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: "style-loader" },
                        {
                            loader: "css-loader",
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
            ]
        }
    };
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
            inject: "body"
        }),
        new OptimizeJsPlugin({
            sourceMap: false
        })
    ];
};
