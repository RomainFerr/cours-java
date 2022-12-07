/*
 * Les callback
 */

const fonctionExterne = (fonctionCallback) => {
    const valeur = 10
    fonctionCallback(10)
}

const afficherValeur = valeur => console.log(valeur)

// j'appel la fonction externe avec la fonction callback

fonctionExterne(afficherValeur)

fonctionExterne(valeur => console.log(valeur))



// Exemple 1 : afficher le contenu d'un tableau

const personnes = ['Pierre','Damien','Jeanne','Pauline']

// Afficher avec la méthode classique

for (const personne of personnes) {
    console.log(`Hello ${personne}`)
}

// Version moderne : lié a ES6 : utiliser la méthode forEach (Array)
// Cette méthode permet d'exécuter une fonction de callback
// sur chaques éléments du tableau
// Cette fonction de callback prend au moins un argument
// qui est l'élément courant.
// Syntaxe : tableau.forEach(callback)

personnes.forEach( personne => console.log('Uesh',personne))

console.clear()


// Exemple 2
const notes = [10,2,17,4,11,5]

notes.forEach( note => console.log(note))

//récupérer toute les notes > 10

console.clear()

const noteSup = []
for (const note of notes) {
    if(note>=10){
        noteSup.push(note)
    }
}
console.log(noteSup)
console.clear()

// version moderne ES6 : methode filter

 notes
     .filter( note => note > 10)
     .forEach(note => console.log(note))

// Recuperer la note max

const notes1 = [5,10,2,17,4,18,15]

let nMax = 0
for (const note of notes1) {
    if (nMax < note){
        nMax = note
    }
}
console.log(nMax)
console.clear()


// version moderne ES6 : methode reduce


noteMax = notes1.reduce( (max,note) => Math.max(max,note),0)
console.log(noteMax)
noteSomme = notes1.reduce( (max,note) => max + note)
console.log(noteSomme)
noteMoy = notes1.reduce( (max,note) => max + note,0)/ notes.length
console.log(noteMoy)

