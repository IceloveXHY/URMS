var webpack = require('webpack');
const path = require('path')
const address = require('address') 
const localIp = address.ip(); // 自动获取IP

function resolve(dir) {
    return path.join(__dirname, dir)
}

function publicPath(){
    if (process.env.NODE_ENV === 'production') {
        return "././";
    } else {
        return "/";
    }
}

// vue.config.js
module.exports = {
    publicPath: publicPath(),
    configureWebpack: {
        devtool: 'source-map',
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        plugins: [
            new (class {
                apply(compiler) {
                    // 编译完成后执行（确保服务器已启动）
                    compiler.hooks.done.tap('PrintLocalNetworkAddress', () => {
                        console.log('\n=========================================');
                        console.log(`📡 局域网访问地址：http://${localIp}:8081/`);
                        console.log('⚠️  注意：需同一WiFi，关闭VPN/防火墙/AP隔离');
                        console.log('=========================================\n');
                    });
                }
            })()
        ]
    },
    lintOnSave: false,
    devServer: {
        host: "0.0.0.0",
        port: 8081,
        hot: true,
        https: false,
        open: true,
        disableHostCheck: true,
        useLocalIp: true,
        proxy: {
            '/gaoxiaokeyanxinxi': {
                target: 'http://localhost:8080/gaoxiaokeyanxinxi/',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/gaoxiaokeyanxinxi': ''
                }
            }
        }
    },
    chainWebpack(config) {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}