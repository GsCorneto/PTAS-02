const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index', { message: 'Cacilda hein!'});
});

const produtos = [
  {id: 1, nome: "Gorgonzola", preco: "R$100", descricao: "descricao"},
  {id: 2, nome: "Provolone", preco: "R$78", descricao: "descricao"},
  {id: 3, nome: "Gouda", preco: "R$", descricao: "descricao"},
  {id: 4, nome: "Parmesão", preco: "R$100", descricao: "descricao"},
  {id: 5, nome: "Coalho", preco: "R$100", descricao: "descricao"},
  {id: 6, nome: "Muçarela", preco: "R$68", descricao: "descricao"},
  {id: 7, nome: "Parmesão", preco: "R$50", descricao: "descricao"},
  {id: 8, nome: "Cheddar", preco: "R$98", descricao: "descricao"},
  {id: 9, nome: "Lua Cheia", preco: "R$63", descricao: "descricao"},
  {id: 10, nome: "Brie", preco: "R$54", descricao: "descricao"},
]


app.get('/queijo', (req, res) => {
  res.render('queijos', { message: 'Vários Cheese'});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});