const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/rongootman/dev/gatsby-multi-lang-netlify-cms/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/rongootman/dev/gatsby-multi-lang-netlify-cms/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/rongootman/dev/gatsby-multi-lang-netlify-cms/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/rongootman/dev/gatsby-multi-lang-netlify-cms/src/pages/index.js"))),
  "component---src-templates-articles-js": hot(preferDefault(require("/Users/rongootman/dev/gatsby-multi-lang-netlify-cms/src/templates/articles.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/rongootman/dev/gatsby-multi-lang-netlify-cms/src/templates/blog-post.js")))
}

