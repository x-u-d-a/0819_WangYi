const px2rem = require('postcss-px2rem')
//配置培训rem的适配
const postcss = px2rem({
    remUnit: 75  //设置的大小就是设计稿的十分之一
})


module.exports = {
    runtimeCompiler:true,
    //暂时关闭eslint语法检查
    // lintOnSave: false,
    css:{
        //添加postcss的配置
    loaderOptions:{
        postcss:{
            plugins:[
                postcss
            ]
          }
       }
    },

}