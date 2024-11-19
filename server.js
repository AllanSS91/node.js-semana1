import express from "express";

const posts = [
    { descricao: 'Uma foto teste', imagem: 'https://placecats.com/mille/300/150', id: 1 },
    { descricao: 'Gato fofo dormindo', imagem: 'https://placecats.com/cute/200/300', id: 2 },
    { descricao: 'Gato fazendo panqueca', imagem: 'https://placecats.com/cute/200/300', id: 3 },
  ];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

function buscarPostPorID(id) {
    return posts.findIndex((posts) => {
        return posts.id === Number(id)
    })
}


app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);

});
