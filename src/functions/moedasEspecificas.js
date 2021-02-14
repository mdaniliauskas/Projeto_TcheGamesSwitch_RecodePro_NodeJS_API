const fetch = require('node-fetch');

module.exports = async function moedasEspecificas(moedas) {
    const resposta = await fetch(`https://economia.awesomeapi.com.br/json/all/${moedas}/`)
    //Ex: https://economia.awesomeapi.com.br/all/USD-BRL/
    const json = await resposta.json()
    return json;        
};