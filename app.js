const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.get('/version', (_req, res) => {
  res.send('2') // change this string to ensure a new version deployed
})

app.get('/fail', (req, res) => {
  res.status(404).send()
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
