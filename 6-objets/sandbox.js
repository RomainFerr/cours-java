/*
 * Les objets
 */

// Création d'un objet littéral

const utilisateur = {
    nom : 'Dupond',
    age : 49,
    email : 'dupond@test.com',
    ville : 'Besançon'
}
console.log(utilisateur)

// Accès aux attributs (propriétés) d'un objet

console.log(utilisateur.nom)
console.log(utilisateur['nom'])

// Modification d'un objet

utilisateur.age = 31
console.log(utilisateur)
utilisateur['age'] = 35
console.log(utilisateur)

// Copie d'objets (copie par référence)

let utilisateurCopie = utilisateur
utilisateurCopie.email='lol@test.fr'
console.log(utilisateur,utilisateurCopie)//il faudrait faire une shallow copy

// Création d'un objet complexe

const utilisateur2 = {
    nom : 'Dupond',
    prenoms : ['Jeanne','Damien','Albert'],
    email : 'cestmouaouesh@gmail.com',
    adresse : {
        rue : '20 rue de potier',
        codePostal : '25000',
        ville : 'Besacon'
    }

}

//afficher uniquement la ville

console.log(utilisateur2.adresse.ville)
console.log(utilisateur2.prenoms.join(', '))
console.log(utilisateur2.prenoms[0].toLowerCase())



