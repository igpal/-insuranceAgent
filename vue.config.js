module.exports = {
  transpileDependencies: ['vuetify'],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
                @import "~@/styles/_variables.scss"; 
                @import "~@/styles/_mixins.scss";`
      }
    }
  }
};
