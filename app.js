// NOte:
// runing friendlist.js in app.js using export modules.



const express = require('express')
const app = express()
const port = 3000

const friends = require ("./models/friendlist")


app.get('/', (req, res) => {
    res.send(friends)
})

app.get('/friends', (req, res, next) => {
    res.json(friends)
    next();
})

app.post('/friends', (req, res, next) => {
   friends.push ({
       id: friends.length +1,
       name:req.body.name,
        age:req.body.age,
        phone:req.body.phone
   })
   res.json({message: 'Thing created successfully!'});
  });


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})