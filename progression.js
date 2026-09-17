import { apprenants } from "./data.js";

function normaliserNom(nom) {      // Nettoyer et uniformiser un nom
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

  function validerResultat(jour, exercicesTermines, totalExercices, challengeTermine) {    // Vérifier les valeurs d’un résultat journalier.
    if (jour <=7 && jour > 0 ){
        
  } else {
    return false;
  } 
    if (exercicesTermines > totalExercices || exercicesTermines < 0){
        return false ;
    } 
    if (totalExercices < 0) {
        return false;
    }
    if (challengeTermine !== true && challengeTermine !== false){
        return false ;
    }
    return true;
}

   function ajouterApprenant(id, nomComplet, ville) {           //Ajouter un apprenant en contrôlant les doublons d’identifiant.
    let object = {} ;
    for (let i = 0; i < apprenants.length; i++) {
    if (apprenants[i].id === id) {
       return false;
    }
}
    object.id = id;
    object.nomComplet = nomComplet;
    object.ville = ville;
    object.resultats = [];
    apprenants.push(object);
    return true;
}
