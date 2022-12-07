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


// séparateur

console.log("-------------")


// Exemple 2 : tri alphabetique (mais avec maj et min)

prenoms = ['pierre','anne','Pauline','Jack','jeanne']

prenoms.sort()
console.log(prenoms)


// séparateur

console.log("-------------")


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


// séparateur

console.log("-------------")


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


// séparateur

console.log("-------------")


// Exemple 6 : Tri ascendant d'un tableau numerique

notes = [14,2,12,15,10,8]

notes.sort((a,b)=> a-b )

console.log(notes)


// séparateur

console.log("-------------")


// Exemple 7 : Tri descendant d'un tableau numerique

notes = [14,2,12,15,10,8]

notes.sort((a,b)=> b-a )

console.log(notes)


// séparateur

console.log("-------------")


// Exemple 8 : Tri descendant d'un tableau de chaine

prenoms = ['pierre','anne','Pauline','Jack','jeanne']

prenoms.sort( (a,b) => {
    return b.localeCompare(a)
})

console.log(prenoms)


// séparateur

console.log("-------------")


// Exemple 9 : Tri ascendant d'un tableau d'objets
// tri ascendant sur l'age

comptes = [
    {prenom : 'Jean', nom:'Dupond',age:45,prenium:false},
    {prenom : 'Alexis', nom:'Dutreux',age:20,prenium:true},
    {prenom : 'Ameli', nom:'Jeanne',age:19,prenium:false},
    {prenom : 'Jack', nom:'Duond',age:31,prenium:true}
]

/*comptes.sort((a,b)=>{
    return a.age-b.age
    }
)*/

comptes.sort(({age:a},{age:b})=>{
    return a-b
    }
)
console.log( comptes)


// séparateur

console.log("-------------")


// Exemple 10 : Tri ascendant dans un autre tableau

notes = [14,2,12,15,10,8]
/*let notes2=notes
                .slice()
                .sort((a,b)=> a-b )*/

let notes2=[...notes].sort((a,b)=> a-b )

console.log(`note 1er:${notes} - note 2eme:${notes2}`)

// Exercice
comptes = [
    {prenom : 'Jean', nom:'Dupond',age:45,prenium:false},
    {prenom : 'Alexis', nom:'Dutreux',age:20,prenium:true},
    {prenom : 'Ameli', nom:'Jeanne',age:19,prenium:false},
    {prenom : 'Jack', nom:'Duond',age:31,prenium:true}
]


// le\la plus jeune

comptes.sort(({age:a},{age:b})=>{
        return a-b
    }
)
let plusJeune=comptes[0]

console.log(plusJeune)


// nombre de premium

let prenium = comptes.filter( ({prenium}) => prenium ).length
console.log('Nombre de premium :',prenium)


// age de la personne la plus agé (reduce)

let AgePlus = comptes.reduce( (max,{age:b}) => Math.max(max,b),0)

console.log(AgePlus)

// Moyenne des ages (reduce)

let AgeMoy = comptes.reduce( (max,{age:b}) => max + b,0) / comptes.length

console.log(AgeMoy)