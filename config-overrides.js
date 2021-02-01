const path = require('path');

const {
    override,
    addDecoratorsLegacy, //引入装饰器编译方法
    addWebpackAlias,
    overrideDevServer,
    disableEsLint,
    addWebpackResolve
} = require("customize-cra"); //引入对应添加或修改 webpack 配置项的方法

function resolve(dir) {
    return path.join(__dirname, dir)
}

const devServerConfig = () => config => {
    return {
        ...config,
        proxy: {
            '/api': {
                target: 'http://localhost:3001/',
                //target: 'http://129.211.185.74:3001/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        }
    };
};

// const addPublicPath = () => config => {
//     if(config.mode === 'production') config.output.publicPath = './'
//     return config;
// }


module.exports = {
    webpack: override( //添加或修改通过webpack 配置通过override包裹
        disableEsLint(),
        addDecoratorsLegacy(),
        addWebpackAlias({
            "@": resolve('src'),
            '@components': resolve('src/components'),
            '@pages': resolve('src/pages')
        }),
        // add
        // WebpackResolve({
        //     extensions: ['.js', '.jsx', '.json', '.tsx', '.ts']
        // }),
        //addPublicPath(),
        //addPublicPath1()
    ),
    devServer: overrideDevServer(
        devServerConfig()
    )
};
