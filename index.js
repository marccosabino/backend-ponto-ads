let express = require('express');
let app = express();

const port = 3000;

app.get("/user/:id", (req, res) => {
    console.log(req.params.id);
})


app.post("/user/:id1-:id2", (req,res) => {
    res.send(req.params);
})

//app.METHOD(path, callback [callback...])
app.get("/teste", (req, res) => {
    res.send("Resposta da rota/teste");
});


app.post ("/rotapost", (req, res) => {
    res.send("Retorno da rota usando o método post")
})


app.listen(port, () => {
    console.log(`Servidor escutando a porta ${port}`);
})

/*
    MÉRTODO HTTP PARA RECUPERAR INFORMAÇÕES
    /user -> retorna todos os usuários (ADM)
    /user/:id -> retorna a informação do usuário id (ADM, próprio usuário)
    /user/:id/registers -> retorna os registros do usuário id (ADm, prórpio usuário)
    /user/:id/registers -> retorna os registros do usuário id (ADM, próprio usuário)

    MÉTODO HTTP PARA CRIAR RECURSOS
    /user -> cria um usuário
*/