const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index', { message: 'Cacilda hein!'});
});

const produtos = [
  {id: 1, nome: "Gorgonzola", preco: "R$100", descricao: "Queijo azul, com sabor mais puxado para o salgado. Ótimo com várias receitas."},
  {id: 2, nome: "Provolone", preco: "R$78", descricao: "Ótimo como acompanhamento ou porção."},
  {id: 3, nome: "Gouda", preco: "R$", descricao: "Queijo com sabor mais doce,  ótimo acompanhado de geleia e nozes."},
  {id: 4, nome: "Parmesão", preco: "R$100", descricao: "Muito utilizado em finalizar macarrão."},
  {id: 5, nome: "Coalho", preco: "R$100", descricao: "Queijo comumente utilizado em receitas nordestinas."},
  {id: 6, nome: "Muçarela", preco: "R$68", descricao: "Queijo delicioso para lanches e receitas, extremamente gostoso."},
  {id: 7, nome: "Roquefort", preco: "R$50", descricao: "Queijo tijolo"},
  {id: 8, nome: "Cheddar", preco: "R$98", descricao: "Queijo alaranjado com sabor único, muito utilizado em lanches"},
  {id: 9, nome: "Lua Cheia", preco: "R$63", descricao: "Sabor doce"},
  {id: 10, nome: "Brie", preco: "R$54", descricao: ""},
]


app.get('/queijo', (req, res) => {
  res.render('queijos', { message: 'Vários Cheese'});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});