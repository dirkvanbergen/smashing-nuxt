require("dotenv").config()
const contentful = require("contentful")

module.exports = contentful.createClient({
  space: "crmkzp2rr7hq",
  accessToken: "5zMyVGAhA954hoAufHqkkHzI20GXozmQTQTDDeNGYhQ"
})
