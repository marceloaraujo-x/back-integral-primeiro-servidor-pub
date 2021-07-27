const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let contador = 0;

app.get("/", (req, res) => {
    res.send(`É a vez de ${jogadores[contador]} jogar!`)
    contador++
    if (contador === jogadores.length) {
        contador = 0;
    }
})

app.listen(8000);