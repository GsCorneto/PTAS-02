const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


const produtos = [
  {id: 1, nome: "Gorgonzola", preco: "R$101", descricao: "Queijo azul, com sabor mais puxado para o salgado. Ótimo com várias receitas.", imagem:"/images/gorgon.jpg"},
  {id: 2, nome: "Provolone", preco: "R$78", descricao: "Ótimo como acompanhamento ou porção.", imagem:"/images/provo.JPG"},
  {id: 3, nome: "Emmental", preco: "R$67", descricao: "Queijo dos elementos", imagem:"public/images/qemme.jpg"},
  {id: 4, nome: "Parmesão", preco: "R$100", descricao: "Muito utilizado em finalizar macarrão.",imagem: "/images/parme.jpg"},
  {id: 5, nome: "Coalho", preco: "R$15", descricao: "Queijo comumente utilizado em receitas nordestinas.", imagem: "/images/coalho.jpg"},
  {id: 6, nome: "Muçarela", preco: "R$68", descricao: "Queijo delicioso para lanches e receitas, extremamente gostoso.", imagem:"/images/muça.png"},
  {id: 7, nome: "Roquefort", preco: "R$50", descricao: "Queijo tijolo", imagem: "public/images/queijoRo.jpg"},
  {id: 8, nome: "Cheddar", preco: "R$98", descricao: "Queijo alaranjado com sabor único, muito utilizado em lanches", imagem: "/images/chedd.jpg"},
  {id: 9, nome: "Lua Cheia", preco: "R$63", descricao: "Queijo com sabor mais doce,  ótimo acompanhado de geleia e nozes.", imagem: "/images/full.jpg"},
  {id: 10, nome: "Brie", preco: "R$54", descricao: "Queijo tijolo de obra", imagem: "/images/brie.jpg"},
]

function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id)
  return produto || null
}


app.get('/', (req, res) => {
  res.render('index', { produtos });
});



app.get('/produtos/:id', (req, res) => {
  const produto = buscarProdutoPorID(req.params.id)
  res.render('produtos', { produto });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


console.log(buscarProdutoPorID(2))