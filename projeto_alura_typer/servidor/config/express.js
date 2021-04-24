var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('./../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Atividade módulo 6 - Descomente o código para habilitar os cabeçalhos da resposta, e tente carregar as frases aleatoriamente:
 //app.use(function(req, res, next) {
 	//res.header("Access-Control-Allow-Origin", "*");
 	//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	//next();
 //});

consign({cwd: 'app'})
	.include('api')
	.then('routes')
	.into(app);

module.exports = app;
