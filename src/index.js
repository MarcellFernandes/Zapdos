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
  // req.query
  return res.json(contacts)
})


/**
 * Implementar auto increment de contacts
 */
// POST http://localhost:3000/api/contacts
app.post('/api/contacts', (req, res) => {
  // {
  //   body: {
  //     contact: {
  //       name: 'lalala',
  //       email: 'laala@la.com'
  //     }
  //   }
  // }

  // const ususarios = ['marcell', 'gabriel'] // length = 2
  // usuarios.push('victor')
  // usuarios = ['marcell', 'gabriel', 'victor']
  // usuarios.pop()

  const { contact } = req.body
  const lastPosition = contacts.lenght - 1;
  const lastContact = contacts[lastPosition]

  if ('id' in lastContact) {
    const newContact = { id: lastContact.id + 1, ...contact }
    contacts.push(newContact)
  } else {
    const newContact = { id: 1, ...contact }
    contacts.push(newContact)
  }
  
  return res.json(contact)
})

/**
 * Criar uma rota get que pegue por id
 * GET http://localhost:3000/api/contacts?id=2&name=gabriel
 */
app.get('/api/contacts/single-contact', (req, res) => {
  // { id: 2 }
  const { id } = req.query
  // const user = [{ id: 1, name: 'gabriel' }, { id: 2, name: 'marcell' }]
  // const products = [{ user_id: 1, name: 'ps4' }, {user_id: 2, name: 'xbox'}...]

  // map
  // reduce
  // filter

  // const usersWithProducts = user.map((user) => {
  //   user.product = product.filter(product => product.user_id === user.id)
  //   return user
  // })

  const contactFound = contacts.filter(contact => {
    return contact.id === id
  })

  return res.json(contactFound)
})

app.listen(3000, () => {
  console.log('App is running...')
})
