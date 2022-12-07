const articles = [
    {titre : 'article 1', auteur : 'Dupond', likes:0},
    {titre : 'article 2', auteur : 'Duond', likes:50},
    {titre : 'article 3', auteur : 'Dund', likes:34},
    {titre : 'article 4', auteur : 'Dupo', likes:32},
    {titre : 'article 5', auteur : 'Dupondt', likes:31},
    {titre : 'article 6', auteur : 'Dupont', likes:310},
    {titre : 'article 7', auteur : 'Dupon', likes:10}
]

for (const article of articles) {
    console.log(`${article.titre} a ${article.likes} likes`)
}
console.clear()
//methode foreach
articles.forEach( article => console.log(`${article.titre} a ${article.likes} likes`))

console.clear()

//destructuring
articles.forEach(({titre,likes})=>
    console.log(`${titre} a ${likes} likes`)
)


