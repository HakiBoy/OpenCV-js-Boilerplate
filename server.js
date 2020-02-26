const express = require('express')
const path = require('path')

const PORT = 3000

const app = express()

//views directory
const viewsDir = path.join(__dirname, 'views')
app.use(express.static(viewsDir))

// serve css and opencv.js
app.use(express.static(path.join(__dirname, './public')))
// serve images content
app.use(express.static(path.join(__dirname, './images')))
// server video content
app.use(express.static(path.join(__dirname, './media')))

// route list
app.get('/', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))