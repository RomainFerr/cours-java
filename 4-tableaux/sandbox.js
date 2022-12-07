/*
 * Les tableaux
 */

// Déclaration d'un tableau (exemple :  tableau d'entiers)

const tab = [10,20,30,12]
console.log(tab)

// Type d'un tableau

console.log(typeof tab)

// Accès à un élément

console.log('element à l\'index 3 : ',tab[2])

// Taille d'un tableau

console.log('nombre element : ',tab.length)

// Ajout d'un élément

tab.push(300)
console.log(tab)
console.clear()

// Parcours d'un tableau : boucle for

for (let i=0;i<tab.length; i++){
    console.log(tab[i])
}
console.clear()

// Parcours du tableau : boucle for-of (accès aux valeurs)

for (const number of tab) {
    console.log(number)
}
console.clear()

// Parcours du tableau : boucle for-in (accès aux index)

for (const tabKey in tab) {
    console.log(tabKey," : ",tab[tabKey])
}
console.clear()

// Copie d'un tableau : opérateur d'affectation = (copie par référence)

const tabClone = tab
console.log(tab,tabClone)
tabClone.push(1000)
console.log(tab,tabClone)
console.clear()

// Copie d'un tableau :  Array.from (shallow copie - copie superficielle)

const tabCopie = Array.from(tab)
tabCopie.push(2000)
console.log(tab,tabCopie)
console.clear()

// Quelques méthodes

const resultat = tab.join('-')
console.log(resultat)
console.clear()

// Récupérer la position d'un élément

const position = tab.indexOf(20)
console.log("l'élément 20 est en ",position)
console.clear()

// Concaténer deux tableaux

const tab2 = [60,30,80]
console.log(tab.concat(tab2))
console.clear()

// Slice du tableau

const tabSlice = tab.slice(1,4)
console.log(tab,tabSlice)
console.clear()

// Shallow Copie

const tabCopie2 = tab.slice()
tabCopie2.push(90000)
console.log(tab,tabCopie2)
console.clear()