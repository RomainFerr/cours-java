/*
 * Destructuring
 */

//******************************************************
// Utilisation avec les tableaux
//******************************************************

console.clear()
const nombres = [12,4,5];

// Sans destructuring

const nb1 = nombres[0]
const nb2 = nombres[1]
const nb3 = nombres[2]

// Destructuring "total"

const [a,b,c] = nombres
console.log(a,b,c)
console.clear()

// Destructuring "partielle"
//récup les 2 premieres valeurs

const [d,e,...reste] = nombres
console.log(d,e)
console.clear()
const prenoms = ['crerce','bbggbgbg','mpmpmp']
const [prenomCOurant,...Lol]= prenoms
console.log(prenomCOurant)
console.clear()

//******************************************************
// Utilisation avec les objets
//*****************************************************

let utilisateur = {
    nom: 'dupond',
    age: 30,
    email: 'dupond@exemple.fr',
}

// Sans destructuring

const nom1= utilisateur.nom
const age1= utilisateur.age
const mail1= utilisateur.email

// Destructuring

const {nom,age,email} = utilisateur
console.log(nom,email,age)
console.clear()

// Destructuring avec changement de denomination des variables

const {nom:n1,age:a1,email:e1} = utilisateur
console.log(n1,a1,e1)

// Pas d'obligation de tout récupérer !

const {email:e2}=utilisateur
console.log(e2)

//******************************************************
// Destructuring et fonction
// Utilisation principale avec des objets
//*****************************************************

let p1 = {
    nom: 'dupond',
    prenom: 'jean',
    email: 'dupond@exemple.fr'
}

// Création d'une fonction retournant l'identité d'un objet sous la forme "prenom NOM"
// Méthode "classique"

const getIdentité = persone => persone.prenom+' '+persone.nom.toUpperCase()
console.log(getIdentité(p1))
console.clear()

// Méthode "destructuring"

const getIdentity = ({nom,prenom}) => prenom+' '+nom.toUpperCase()
console.log(getIdentity(p1))
