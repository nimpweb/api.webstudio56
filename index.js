require('dotenv').config()
const express = require('express')
const formData = require('express-form-data')
const os = require('os')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(formData.parse({
  uploadDir: os.tmpdir(),
  autoClean: true
}))
app.use(formData.format())
app.use(formData.stream())
app.use(formData.union())
app.use(express.json())

app.get('/v1/stats', (req, res) => {
  res.status(200).json({
    order: 201,
    appeals: 1092,
    networks: 4,
    regions: 4
  })
})

// app.post('/api/v1/', (req, res) => {
//   const order = JSON.parse(req.body)

// })

const start = async () => {
  try {
    const port = process.env.PORT || 3000
    app.listen(port, () => console.log(`Server has been started at port ${port}`))
  } catch (error) {
    console.log('ERROR HAS BEEB DETECTED: ', error)    
  }
}

start()