const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
// const bodyParse = require('body-parser');
const Post = require('./models/Times');

// Templete Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Body Parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// Rotas

app.get('/', function(req, res){
    Times.findAll({order: [['id', 'DESC']]}).then(function(times){
        res.render('home', {times: times})
    })
    
})

app.get('/', function(req, res){
    Posicoes.findAll({order: [['id', 'DESC']]}).then(function(posicoes){
        res.render('home', {posicoes: posicoes})
    })
    
})

app.get('/', function(req, res){
    Jogadores.findAll({order: [['id', 'DESC']]}).then(function(jogadores){
        res.render('home', {jogadores: jogadores})
    })
    
})

app.get('/cad', function(req, res){
    res.render('form')
})

app.post('/add', function(req, res){
    Post.create({
        nome: req.body.nome
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro: " + erro)
    })
})


app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000.");
});