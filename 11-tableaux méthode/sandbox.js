let comptes = [
    {prenom : 'Jean', nom:'Dupond',age:45,prenium:false},
    {prenom : 'Alexis', nom:'Dutreux',age:20,prenium:true},
    {prenom : 'Ameli', nom:'Jeanne',age:19,prenium:false},
    {prenom : 'Jack', nom:'Duond',age:31,prenium:true}
]

//------------------------------------------
// On va récupérer tout les comptes prénium
//------------------------------------------


// const comptePrenium = comptes.filter( compte => compte.prenium )

// const comptePrenium = comptes.filter( compte => compte.prenium && compte.age<25 )

const comptePrenium = comptes.filter( ({prenium}) => prenium )

console.log(comptePrenium)

console.clear()
//------------------------------------------
// MAPPER
//------------------------------------------

//---------------------------------------------------------------
// récupérer l'identité de la personne lié au compte prenium
//---------------------------------------------------------------

const identites = comptes.map( compte => {
    return `${compte.prenom} ${compte.nom.toUpperCase()}`
})

console.log(identites)

//--------------------------------------------------------------------------------------------------------------
//je veux récupéré l'identité de la persoone sous la forme d'un objet : forme : prenom : 'prenom' , nom : 'nom'
//--------------------------------------------------------------------------------------------------------------

const identite2 = comptes.map(compte => {
    return (
        {
            prenom : compte.prenom,
            nom : compte.nom
        }
    )
})

console.log(identite2)

//exmple 3

const identitesPrenium = comptes
    .filter(compte => compte.prenium)
    .map( compte => (
        {
         prenom : compte.prenom,
         nom : compte.nom
        }
        )
    )
console.log(identitesPrenium)

console.clear()

//----------------------------------------
// Trier
//----------------------------------------

let prenoms = ['pierre','paul','jack']

// Exemple 1 : Trie ascendant

prenoms.sort()
console.log(prenoms)

// Exemple 2 : tri alphabetique (mais avec maj et min)

prenoms = ['pierre','anne','Pauline','Jack','jeanne']

prenoms.sort()
console.log(prenoms)

// Exemple 3 : Tri alphabétique (case insensitive)

prenoms = ['pierre','anne','Pauline','Jack','jeanne']

prenoms.sort((a,b)=>{
    if ( a.toLowerCase() < b.toLowerCase() ){
        return -1
    }
    if (a.toLowerCase() > b.toLowerCase()){
        return 1
    }
    return 0
})

console.log(prenoms)

// Exemple 4 : en utilisant la local

prenoms = ['pierre','anne','Pauline','Jack','jeanne']

prenoms.sort( (a,b) => {
    return a.localeCompare(b)
})
// = prenoms.sort( (a,b) => a.localeCompare(b) )

console.log(prenoms)

// séparateur

console.log("-------------")

// Exemple 5 : Tri ascendant d'un tableau numerique

let notes = [14,2,12,15,10,8]

notes.sort() // Tri par défaut

console.log(notes) // PROBLEME !!! tri avec premier chiffre de chaques nombres

// Exemple 6 : Tri ascendant d'un tableau numerique

notes = [14,2,12,15,10,8]

notes.sort((a,b)=> a-b )

console.log(notes)

// Exemple 7 : Tri descendant d'un tableau numerique

notes = [14,2,12,15,10,8]

notes.sort((a,b)=> b-a )

console.log(notes)

// Exemple 8 : Tri descendant d'un tableau de chaine