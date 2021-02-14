const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './src/views');

const todasMoedas = require('./src/functions/todasMoedas');
const moedasEspecificas = require('./src/functions/moedasEspecificas');


app.get('/', (req, res) => {
      res.render('index');
});

app.get ('/todasmoedas', async (req, res) => {
    const resultado = await todasMoedas()
    res.json(resultado);
});

app.get ('/moedasespecificas', async (req, res) => {
    const { moedas } = req.body
    const resultado = await moedasEspecificas(moedas)
    res.json(resultado);
});

app.listen(3003)