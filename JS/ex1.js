let nom = "Titi"
let prenom = "Toto"

function concatenation (nom, prenom) {
    return nom + " " + prenom
}

let concat = concatenation(nom, prenom);

console.log(`${concat}`)

concat = concatenation("Bob", "Blop");

console.log(`${concat}`)

function carre (nb) {
    return nb*nb;
}

console.log(carre(5))