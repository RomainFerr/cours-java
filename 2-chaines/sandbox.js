/*
 * Les chaines de caractères
 */

// chaine littérale

console.log("bts sio")
console.log('bts sio')
console.clear()

// Déclaration d'une variable de type chaine

let email = "test@gmail.com"
console.log(email)
console.clear()

// Concaténation de chaines

const prenom = 'Romain'
const nom = 'FERREIRA'
const identite = prenom+" "+nom
console.log(identite)
console.clear()

// Accès à un caractère

console.log(identite[2])
console.clear()

// Longueur d'une chaine

const longueur = identite.length
console.log('longueur : '+longueur)
console.log('longueur : '+identite.length)
console.clear()

// Quelques méthodes

console.log(identite.toUpperCase())
console.log(email.indexOf('@'))
console.log(email.substring(email.indexOf('@')+1))
console.log(email.slice(email.indexOf('@')+1))
console.clear()

// Template string (interpolation) mettre une variable qui sera interprété dans une chaine

const titre = 'cours javascript'
const auteur ='Jean DAMIEN'
const phrase = 'Le cours '+titre+' a été écrit par '+auteur
console.log(phrase)
const phrase2 = `Le cours ${titre} a été écrit par ${auteur}`
console.log(phrase2)