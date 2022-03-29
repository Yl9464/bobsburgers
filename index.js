/* eslint-disable no-console */
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const { getAllRecords, getMemberByName, saveMember } = require('./controllers/members')
const { getAllTraitsWithCharactersName } = require('./controllers/characteristics')

const app = express()

app.use(express.static('client/build'))
app.use(cors())

app.get('/api/members', getAllRecords)
app.post('/api/members', bodyParser.json(), saveMember)
app.get('/api/members/:name', getMemberByName)

app.get('/api/traits', getAllTraitsWithCharactersName)
app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})

