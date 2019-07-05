require("dotenv").config()
const contentful = require("contentful")

module.exports = contentful.createClient({
  space: "6N9kZ1ncGM6uS9otrP0Hy6n5NXA8BmW5nFJCkzTmgWE",
  accessToken: "crmkzp2rr7hq"
})
