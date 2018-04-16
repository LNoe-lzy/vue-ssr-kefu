const express = require('express')
const fs = require('fs')
const path = require('path')
const {
  createBundleRenderer
} = require('vue-server-renderer')

const isProd = process.env.NODE_ENV === 'production'
const app = express()
const resolve = file => path.resolve(__dirname, file)
const templatePath = resolve('./index.html');

function createRenderer(bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    basedir: resolve('./dist'),
    runInNewContext: false
  }))
}

let renderer
let readyPromise

if (isProd) {
  // 生成服务端渲染函数
  const bundle = require('./dist/vue-ssr-server-bundle.json')
  const template = fs.readFileSync(templatePath, 'utf-8')
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  renderer = createRenderer(bundle, {
    // 模板html文件
    template,
    // client manifest
    clientManifest,
  })
} else {
  readyPromise = require('./build/setup-dev-server')(
    app,
    templatePath,
    (bundle, options) => {
      renderer = createRenderer(bundle, options)
    }
  )
}

// 引入静态资源
app.use(express.static(path.join(__dirname, 'dist')))

function render(req, res) {
  res.setHeader('Content-Type', 'text/html')

  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if (err.code === 404) {
      res.status(404).send('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).send('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }

  const context = {
    title: '测试用例平台', // default title
    url: req.url
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }
    res.send(html)
  })
}

app.get('*', isProd ? render : (req, res) => {
  readyPromise.then(() => render(req, res))
})

app.on('error', err => console.log(err))
app.listen(3000, () => {
  console.log(`vue ssr started at localhost:3000`)
})
