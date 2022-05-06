const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const app = express()
const port = 8081

//express settings
app.set('port', port)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//static files
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('pages/index',{
        title: "FreeLánzate",
        temp: "<a href=\"/login\">Iniciar Sesión</a>"
    })
})

app.get('/welcome', (req, res) => {
    res.render('pages/index',{
        title: "FreeLánzate",
        temp: "Bienvenido <br> <br> (Página en desarrollo)"
    })
})

app.get('/sent', (req, res) => {
    res.render('pages/index',{
        title: "FreeLánzate",
        temp: "Correo enviado <br> <br> (Funcionalidad en desarrollo)"
    })
})

app.get('/login', (req, res) => {
    res.render('pages/login', {
        title: "Iniciar Sesión"
    })
})

app.get('/restorePassword', (req, res) => {
    res.render('pages/forgotPassword', {
        title: "Recuperar contraseña"
    })
})

app.get('/newPassword', (req, res) => {
    res.render('pages/newPassword', {
        title: "Recuperar contraseña"
    })
})

app.get('/register', (req, res) => {
    res.render('pages/newUser', {
        title: "Registro Usuario"
    })
})

app.get('/register/freelancer', (req, res) => {
    res.render('pages/newFreelancer', {
        title: "Registro Freelancer"
    })
})

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})