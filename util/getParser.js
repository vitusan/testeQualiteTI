module.exports = (produtos) => {
    let requestData = [];
    produtos.forEach(produto => {
        var data = JSON.stringify({
            "valor": `${parseInt(produto.valor_produto, 10)}`,
            "quantidade": `${parseInt(produto.quantidade_produto, 10)}`
        });
    
        var config = {
            method: 'get',
            url: 'https://p.pergunte.me/APIProduto/consultProd',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        requestData.push(config);
    });
    return requestData;
};
