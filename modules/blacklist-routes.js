module.exports = function () {
    this.nuxt.hook('generate:extendRoutes', async routes => {
      console.log("---before---")
      console.log(routes)
      const blackList = ['/content'];
      const routesToGenerate = routes.filter(page => !blackList.includes(page.route));
      routes.splice(0, routes.length, ...routesToGenerate);
      console.log("---after---")
      console.log(routes)
    });
  };