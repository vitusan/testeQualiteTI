const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const ejsMate = require('ejs-mate');
const { selectUsuarios, selectProdutos, updateProduto, insertCustomer } = require('./database/index');
const axios = require('axios').default;
const requestParser = require('./util/getParser');

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/usuarios', async (req, res) => {
  const usuarios = await selectUsuarios();
  res.render('usuarios/index', { usuarios });
});

app.get('/produtos', async (req, res) => {
  const produtos = await selectProdutos();
  let prodData = [];
  let axiosConfig = requestParser(produtos);

  function repostaOrdenada(index) {
    axios(axiosConfig[index])
      .then(function (response) {
        prodData.push(response.data);
        index++;
        if (index == axiosConfig.length) {
          res.render('produtos/index', { produtos, prodData });
          return null;
        }
        repostaOrdenada(index);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  repostaOrdenada(0);
});

app.get('/produtos/new', (req, res) => {
  res.render('produtos/new');
});

app.put('/produtos', async (req, res) => {
  await updateProduto(req.body.produto);
  res.redirect('/produtos');
});

app.post('/produtos', async (req, res) => {
  await insertCustomer(req.body.produto);
  res.redirect('/produtos');
});

app.listen(3000, () => {
  console.log('Serving on port 3000');
});
