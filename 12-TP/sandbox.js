// Séparateur
console.log("----- Exercice 1 -----")
const lesNotes = [12,14.4,9,13];

const NotePlusHaute =  notes => notes.reduce( (max,note) => Math.max(max,note),0)

console.log("Note la plus haute est :",NotePlusHaute(lesNotes))

// Séparateur
console.log("----- Exercice 2 -----")

const Aleatoire = nombreTirage => {
    let tableau = []
    for (let i = 0; i < nombreTirage; i++) {
    let chiffreAlea = Math.random()
    if (chiffreAlea > 0.5){
        tableau.push(1)
    } else  {
    tableau.push(0)}
    }
    return tableau
}

let tirages = Aleatoire(10)
console.log("tab de tirage",tirages)
let nombresPile = tirages.filter(tirage => tirage==0).length
console.log(nombresPile)
let nombresFace = tirages.filter(tirage => tirage==1).length
console.log(nombresFace)

let pourcentageFace = 100*nombresFace/10
console.log(pourcentageFace)

//Avec la ternaire console.log(tirages == 0 ? nbPile++ : nbFace ++)
console.clear()



// Séparateur
console.log("----- Exercice 3 -----")

const villes = {
    paris : {nom:"Paris", latitude: 48.8534, longitude: 2.3488},
    toulouse : {nom:"Toulouse", latitude: 46.6043, longitude: 1.4437},
    lyon : {nom:"Lyon", latitude: 45.75, longitude: 4.85}
}

const getCoordonnees = (ville => { return `${ville.longitude}, ${ville.latitude}`})
console.log(getCoordonnees(villes.lyon))

const getCoordonnees2 = (({longitude,latitude}) => { return `${longitude}, ${latitude}`})
console.log(getCoordonnees2(villes.lyon))



// Séparateur
console.log("----- Exercice 4 -----")

const personnages = [
    {nom: "Tya", age:25},
    {nom: "Milo", age:22},
    {nom: "Nina", age:32},
    {nom: "Elio", age:21},
];

let NomMaj = []
personnages.forEach(personnage => NomMaj.push(personnage.nom.toUpperCase()))
console.log(NomMaj)


// Séparateur
console.log("----- Exercice 5 -----")

const supprimerPerso = (({nom}) => personnages.shift(nom))
supprimerPerso('Tya')
console.log(personnages)


// Séparateur
console.log("----- Exercice 6 -----")

const personnages2 = [
    {nom: "Tya", age:25, continent:"Asie"},
    {nom: "Milo", age:22,continent:"Europe"},
    {nom: "Nina", age:32,continent:"Asie"},
    {nom: "Elio", age:21,continent:"Europe"},
];

let Europe = []
const getEurope = (({continent,nom}) => Europe.push(nom))
console.log(getEurope('Europe'))
