module.exports = {
    pages:{
        index:{
            entry:'src/main.js'
        },
    },
    lintOnSave:false,
    // devServer:{
    //     proxy:{
    //         '/atguigu':{
    //             target:'http://127.0.0.1:5000',
    //             pathRewrite:{'^/atguigu':''},
    //         }
    //     }
    // }
    devServer:{
        proxy:'http://127.0.0.1:5000'
    }
}