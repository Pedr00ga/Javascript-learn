
const filmes = [
    {id: 1, nomeFilme: "Harry Potter"},
    {id: 2, nomeFilme: "Senhor dos aneis"},
    {id: 3, nomeFilme: "Pulp Fiction"}

]

console.log(filmes);

console.log(filmes.find(function (filmes) {
    return filmes.nomeFilme === "Harry Potter"
}
))