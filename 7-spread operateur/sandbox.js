/*
 * Opérateur spread
 */

//******************************************************
// Utilisation avec les tableaux
//******************************************************

console.clear()
const nombres = [12,16,88,66,11]
console.log(nombres)
console.clear()

// Utilisation de l'opérateur spread ...

console.log(...nombres)
console.clear()

// Copie de tableau (shallow copie ou slice)

const nombresCopie = [...nombres]
console.log(nombresCopie)
console.clear()

// Fusion (concaténation) de tableaux

const pairs = [8,3,4,6]
const impair = [5,1,3,7]
const nombrePairsImpairs = pairs.concat(impair)
console.log(nombrePairsImpairs)
const nombrePairsImpairs2 = [...pairs,...impair]
console.log(nombrePairsImpairs2)


//******************************************************
// Utilisation avec les objets
//******************************************************

console.clear()
const utilisateur = {
    nom: 'dupond',
    age: 30,
    email: 'dupond@exemple.fr',
    ville: 'Besançon'
}
console.log(utilisateur)
console.clear()

// Copie d'objet (shallow copie)

const utilisateur2 = {...utilisateur}
console.log(utilisateur2)

// Copie d'objet avec modification d'un attribut

const utilisateur3 = {...utilisateur, email : 'lel@gmail.com'}
console.log(utilisateur3)
const utilisateur4 = {...utilisateur, nom:'Durand', email : 'lel@gmail.com'}
console.log(utilisateur4)
// Copie d'objet avec ajout d'un nouvel attribut

const utilisateur5 = {...utilisateur, sexe : 'M'}
console.log(utilisateur5)

