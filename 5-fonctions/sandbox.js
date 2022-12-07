/*
 * Les fonctions
 *
 * function hello (parametre):void {
 * Corps/implémentation
 * }
 * Appel fonction : hello (argument)
 *
 */

// Déclaration d'une fonction (methode "classique" avant ES6)

function hello(){
    console.log('Hello BTS sio2')
}
hello()

// Fonction anonyme (à préférer)

const hello2 = function (){
    console.log('LEL') }

hello2() // Appel de la fonction contenu dans la variable hello2

// Fonction avec paramètres

const  hello3 = function (nom) {
    console.log(`Hello ${nom.toUpperCase()}`)
}
hello3( 'Jeanne')
console.clear()

// Fonction retournant un résultat

const calculerAire = function (rayon) {
    return 3.14 * rayon**2
}
console.log(calculerAire(5))
console.clear()


// Fonction fléchée (introduit par ES6 : arrow function)
// une fonction fléché est une fonction anonyme avec une syntaxe particulière

const calculerAire2 = (rayon) => {
    return 3.14 * rayon**2
}
console.log(calculerAire2(5))

// Simplification avec un seul paramètre

const calculerAire3 = rayon => { return 3.14 * rayon**2}
console.log(calculerAire3(4))


// Simplification avec une seule instruction return

const calculerAire4 = rayon => 3.14 * rayon**2
console.log(calculerAire4(4))
console.clear()

// Exemple : fonction permettant de calculer le montant total TTC d'un ensemble de produits avec un taux de TVA donné


const calculerMontantTotal = (tva,prixH) => {
    let prixFinal = 0
    for (const prix of prixH) {
        prixFinal += prix + prix * tva
}
return prixFinal
}

const prixHT = [10,20,30,12]
console.log("Let's a go",calculerMontantTotal(0.20,prixHT))