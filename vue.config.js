module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule("text")
            .test(/\.txt$ | \.key\.pub$/i)
            .use("raw-loader")
            .loader("raw-loader")
            .end();
    },
    publicPath: "./",
    outputDir: "docs"
};


