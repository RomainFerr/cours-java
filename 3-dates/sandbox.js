/*
 * Les dates
 */

// Déclaration d'une date

const maintenant = new Date()
console.log(maintenant)
console.clear()

// Quelques méthodes

console.log('Année : ',maintenant.getFullYear())
console.log('N° Mois -1 : ',maintenant.getMonth())
console.log('N° Jour : ',maintenant.getDate())
console.log('Jour : ',maintenant.getDay())
console.log('Heure : ',maintenant.getHours())
console.log('Minute : ',maintenant.getMinutes())
console.log('Seconde : ',maintenant.getSeconds())
console.log('Milli : ',maintenant.getMilliseconds())
console.clear()

// Conversion d'une date en chaine

console.log('Date :',maintenant.toString())
console.log('Date :',maintenant.toDateString())
console.log('Date :',maintenant.toTimeString())
console.log('Local :',maintenant.toLocaleString())
console.log('Local :',maintenant.toLocaleDateString())
console.log('Local :',maintenant.toLocaleTimeString())
console.clear()

// Conversion d'une date en timestamp

const timestamp = maintenant.getTime()
console.log(timestamp)
console.clear()

// Comparaison de dates

const dateAvant2 = new Date(2022,6,12,12,0,0)
console.log(dateAvant2)
const dateAvant = new Date('2022-07-12 12:00:00')
console.log(dateAvant)
const difference = maintenant.getTime() - dateAvant.getTime()
console.log(difference)

if (maintenant.getTime()>dateAvant.getTime()){
    console.log(`${maintenant.toLocaleDateString()} est après ${dateAvant.toLocaleDateString()}`)
} else {
    console.log(`${maintenant.toLocaleDateString()} est avant ${dateAvant.toLocaleDateString()}`)
}
console.clear()

// Conversion d'un timestamp en date

console.log(maintenant.getTime())
const ts = 1669199076132
const now = new Date(ts)
console.log(now)