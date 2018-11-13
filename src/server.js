const express = require('express')
const helmet = require('helmet')
const path = require('path')

const app = express()
const PORT = 3000
const PUBLIC_HTML = path.join(__dirname, 'public/html')
const PUBLIC_JS = path.join(__dirname, 'public/javascripts')
const PUBLIC_STYLES = path.join(__dirname, 'public/stylesheets')

// Helmet
app.use(helmet())

// Static files
app.use(express.static(PUBLIC_HTML))
app.use('/js', express.static(PUBLIC_JS))
app.use('/style', express.static(PUBLIC_STYLES))

app.listen(PORT, () => console.log(`PeterBot.ai listening on port ${PORT}!`))
