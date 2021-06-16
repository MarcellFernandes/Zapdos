const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

/*
 * list   - GET
 * get    - GET
 * create - POST
 * delete - DELETE
 * update - PUT ou PATCH
 */

// Tipo de compilação
// JIT

const contacts = []

app.get('/', (req, res) => {
  return res.json({
    message: 'Olá'
  })
})

// GET http://localhost:3000/api/contacts
app.get('/api/contacts', (req, res) => {
  req.query
  return res.json(contacts)
})


/**
 * Implementar auto increment de contacts
 */
// POST http://localhost:3000/api/contacts
app.post('/api/contacts', (req, res) => {
  const contact = req.body  
  contacts.push(contact)
  
  return res.json(contact)
})

/**
 * Criar uma rota get que pegue por id
 */

app.listen(3000, () => {
  console.log('App is running...')
})
