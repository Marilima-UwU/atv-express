// importando o express 
const express = require("express");

// iniciando a aplicação com a função express()
const app = express();


//utiliza-se para obter dados no caso vai falar sobre os aracnos maiores.
app.get("/", (req, res) => {
  res.send("<h1>Tarot e seus arcanos maiores</h1> Os Arcanos Maiores representam basicamente a jornada de evolução do Ser Humano sendo contada através de símbolos ancestrais. Os significados de tais cartas ilustram a estrutura da consciência humana, contendo lições de vida profundamente significativas que foram passadas de geração a geração.");
});



//utiliza-se para obter dados no caso vai falar sobre a primeira carta do tarot
app.get("/Enamorados", (req, res) => {
  // endereço de acesso: http://localhost:5000/Enamorados
  res.send("<h1>Os Enamorados - a sexta carta </h1> <h2>Esta carta indica que provavelmente você está em uma encruzilhada e precisa fazer uma escolha. Se você atualmente não está vivendo esse tipo de situação, provavelmente um novo caminho irá surgir na sua vida e você terá que tomar uma decisão importante</h2> <h3>Essa dúvida poderá surgir em qualquer área da sua vida, podendo ser tanto uma dúvida entre dois parceiros amorosos quanto entre duas propostas de emprego.</h3>");
});

// ele vai servir para colocar mais cartas de arcanos maiores  no servidor 
app.post("/Enamorados", (req, res) => {
  // endereço de acesso: http://localhost:5000/sol
  res.send("<h1>Colocar mais arcanos</h1>");
});

//vai servir para mudar, no caso atualizar cartas.
app.put("/Enamorados", (req, res) => {
  // endereço de acesso: http://localhost:5000/sol
  res.send("Mudar mais arcanos");
});

//ele vai serir para excluir uma carta de arcano maior
app.delete("/Enamorados", (req, res) => {
  // endereço de acesso: http://localhost:5000/sol
  res.send("Excluir arcanos");

});

//numero da porta onde o "site" ira funcionar
const port = 5000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));