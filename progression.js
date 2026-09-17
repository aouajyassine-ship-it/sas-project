
function normaliserNom(nom) {
    nom = nom.trim();
    let mots = nom.split(" ");
    let result = "";
    for ( let i = 0 ; i < mots.length ; i++) {
        let mot = mots[i];
        let premiereLettre = mot[0].toUpperCase();
        let reste = mot.slice(1).toLowerCase();
        result = result + premiereLettre + reste + " ";
    }
    return result;
} 