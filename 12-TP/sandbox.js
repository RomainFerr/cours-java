const lesNotes = [12,14.4,9,13];

const NotePlusHaute =  notes => notes.reduce( (max,note) => Math.max(max,note),0)

console.log("Note la plus haute est :",NotePlusHaute(lesNotes))

// Séparateur
console.log("-----------------------------------------")

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
let nombresPile = tirages.filter().length






