const fetch = require('node-fetch');

module.exports = async function todasMoedas() {
    const resposta = await fetch("https://economia.awesomeapi.com.br/json/all")
    const json = await resposta.json()
    return json;    
};