module.exports = function() {
  this.nuxt.hook("generate:extendRoutes", async routes => {
    const blackList = ["/content"]
    const routesToGenerate = routes.filter(
      page => !blackList.includes(page.route)
    )
    routes.splice(0, routes.length, ...routesToGenerate)
  })
}
