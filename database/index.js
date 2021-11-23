async function connect(){
  if(global.connection && global.connection.state !== 'disconnected')
      return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection({
    host: '168.90.104.214',
    port: '3306',
    user: 'VictorAndrade',
    password: 'Victor*7808',
    database: 'db_cadidatoVictorAndrade'
  });
  console.log("Conectou no MySQL!");
  global.connection = connection;
  return connection;
}

async function selectUsuarios(){
  const conn = await connect();
  const [rows] = await conn.query('SELECT user.nome_usuario, user.sobrenome_usuario, user.cpf_usuario, ' +
    'tpus.decricao_tipo_usuario FROM `tb_usuario` AS user INNER JOIN lst_tipo_usuario AS tpus ' +
    'ON cod_tipo_usuario = id_tipo_usuario;');
  return rows;
}

async function selectProdutos(){
  const conn = await connect();
  const [rows] = await conn.query('SELECT id_produto, nome_produto, valor_produto, quantidade_produto FROM tb_produto;');
  return rows;
}

async function updateProduto(produto){
  const conn = await connect();
  const sql = 'UPDATE tb_produto SET nome_produto=?, valor_produto=?, quantidade_produto=? WHERE id_produto=?;';
  const values = [produto.nomeProduto, produto.valorProduto, produto.quantidadeProduto, produto.idProduto];
  return conn.query(sql, values);
}

module.exports = { selectUsuarios, selectProdutos, updateProduto };
