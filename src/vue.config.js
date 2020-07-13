module.exports = {
    configureWebpack:{
        resolve:{
            extensions:[],
            alias:{
                '@':'src',
                'asseets':'@/assets',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    }
}