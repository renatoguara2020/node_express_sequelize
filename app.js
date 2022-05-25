const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./connSequelize')
const Users = require('./models/User')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/', async  (req, res) => {

   const users = await Users.findAll({raw:true})

   console.log(users)
  res.render('home', {users:users})
})

app.get('/users/create' , (req, res) => {

    res.render('addUser')
})
app.post('/users/create', async (req, res) => {

    const firstName = req.body.firstName;
    const occupation = req.body.occupation;
    const password = req.body.password;
    const userName = req.body.userName;


    console.log(req.body)
   await Users.create({firstName , occupation,password, userName})
     res.redirect('/')
})

conn.sync().then(()=>{
    app.listen(3000)

}).catch((err)=>console.error(err));