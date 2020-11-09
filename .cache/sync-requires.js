const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/rongootman/dev/AR-Website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/rongootman/dev/AR-Website/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/rongootman/dev/AR-Website/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/rongootman/dev/AR-Website/src/pages/index.js"))),
  "component---src-templates-articles-js": hot(preferDefault(require("/Users/rongootman/dev/AR-Website/src/templates/articles.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/rongootman/dev/AR-Website/src/templates/blog-post.js")))
}

