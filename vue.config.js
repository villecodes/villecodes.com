module.exports = {
    configureWebpack: config => {
        config.output.globalObject = "this"
    }
}