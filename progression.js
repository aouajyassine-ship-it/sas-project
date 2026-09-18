import { apprenants } from "./data.js";


function normaliserNom(nom) {      // Nettoyer et uniformiser un nom
     nom = nom.trim();
    let mots = nom.split(" ");
    let result = "";
    for (let i = 0; i < mots.length; i++) {
    let mot = mots[i];
    let premiereLettre = mot[0].toUpperCase();
    let reste = mot.slice(1).toLowerCase();
    result = result + premiereLettre + reste + " ";
    }
    return result.trim();
} 


  function validerResultat(jour, exercicesTermines, totalExercices, challengeTermine) {    // Vérifier les valeurs d’un résultat journalier
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


   function ajouterApprenant(id, nomComplet, ville) {           //Ajouter un apprenant en contrôlant les doublons d’identifiant
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


function enregistrerResultat(id, jour, exercicesTermines, totalExercices, challengeTermine) {    //Ajouter ou mettre à jour une journée
    for (let i = 0; i < apprenants.length; i++) {
     if (apprenants[i].id === id) {
     if (!validerResultat(jour, exercicesTermines, totalExercices, challengeTermine)) {
     return false;
}
     for (let j = 0; j < apprenants[i].resultats.length; j++) {
     if (apprenants[i].resultats[j].jour === jour) {
      apprenants[i].resultats[j].exercicesTermines = exercicesTermines;
      apprenants[i].resultats[j].totalExercices = totalExercices;
      apprenants[i].resultats[j].challengeTermine = challengeTermine;
      return true;
}
}
     let resultat = {
     jour: jour,
     exercicesTermines: exercicesTermines,
     totalExercices: totalExercices,
     challengeTermine: challengeTermine
};
     apprenants[i].resultats.push(resultat);
     return true;
}
}
     return false;
}


function rechercherApprenant(valeur) {   // Retrouver un profil par identifiant ou par nom
 let idRecherche = Number(valeur);
 for (let i = 0; i < apprenants.length; i++) {
 if (apprenants[i].id === idRecherche) {
   return apprenants[i];
 }
 if (typeof valeur === "string") {
  let nomRecherche = normaliserNom(valeur);
  if (apprenants[i].nomComplet === nomRecherche) {
    return apprenants[i];
}
}
}
 return false ;    
}


function calculerProgression(apprenant) {          //Produire les indicateurs individuels
   let totalExercices = 0;
   let exercicesTermines = 0;
   let challengesTermines = 0;
   let progression = 0;
   let niveau = "";
   for ( let i = 0 ; i < apprenant.resultats.length ; i++) {
     totalExercices = totalExercices + apprenant.resultats[i].totalExercices;
     exercicesTermines = exercicesTermines +apprenant.resultats[i].exercicesTermines ;
     if (apprenant.resultats[i].challengeTermine === true){
        challengesTermines = challengesTermines + 1;
 }
   }
   if (totalExercices === 0) {
    progression = 0;
   } else {
    progression = exercicesTermines / totalExercices * 100;
   }
   if (progression >= 80) {
       niveau = "Solide";
   }else if (progression >= 50) {
    niveau = "En progression";
   } else {
    niveau = "À renforcer";
   }
   return {
    progression: progression,
    challengesTermines: challengesTermines,
    joursEnregistres: apprenant.resultats.length,
    niveau: niveau
};
}
