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
    if (!isNaN(Number(nomComplet)) || !isNaN(Number(ville))) {
        return "texte_invalide";
}
    for (let i = 0; i < apprenants.length; i++) {
    if (apprenants[i].id === id) {
       return false;
}
}
    object.id = id;
    object.nomComplet = normaliserNom(nomComplet);
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
    niveau = "A renforcer";
   }
   return {
    progression: progression,
    challengesTermines: challengesTermines,
    joursEnregistres: apprenant.resultats.length,
    niveau: niveau
};
}


function filtrerParNiveau(niveau) {                       //Sélectionner les profils d’un niveau donné
  let resultats = [];
  for (let i = 0; i < apprenants.length; i++) {
     let indicateurs = calculerProgression(apprenants[i]);
     if (indicateurs.niveau === niveau) {
    resultats.push(apprenants[i]);  
}
 } 
 return resultats;
}

function trierParProgression() {      //Classer les profils par progression décroissante.
    let resultats = [...apprenants];  // copie le tableau apprenants
    resultats.sort(function(apprenant1, apprenant2) {
        let progression1 = calculerProgression(apprenant1).progression;
        let progression2 = calculerProgression(apprenant2).progression;
        return progression2 - progression1;
});
    return resultats;
}

function afficherTableauDeBord() {
    let totalApprenants = apprenants.length;
    let totalProgression = 0;
    let totalChallenges = 0;
    let solide = 0;
    let enProgression = 0;
    let aRenforcer = 0;
    console.log("===== TABLEAU DE BORD =====");
    console.log("Total apprenants :", totalApprenants);
    for (let i = 0; i < totalApprenants; i++) {
        let indicateurs = calculerProgression(apprenants[i]);
        totalProgression = totalProgression + indicateurs.progression;
        totalChallenges = totalChallenges + indicateurs.challengesTermines;
        if (indicateurs.niveau === "Solide") {
            solide++;
} else if (indicateurs.niveau === "En progression") {
            enProgression++;
} else {
            aRenforcer++;
}
        console.log(
            apprenants[i].nomComplet,
            "-",
            indicateurs.progression + "%",
            "-",
            indicateurs.niveau
);
}
    let progressionMoyenne = 0;
    if (totalApprenants > 0) {
        progressionMoyenne = totalProgression / totalApprenants;
    }
    console.log("Progression moyenne :", progressionMoyenne + "%");
    console.log("Challenges terminés :", totalChallenges);
    console.log("===== NIVEAUX =====");
    console.log("Solide :", solide);
    console.log("En progression :", enProgression);
    console.log("À renforcer :", aRenforcer);
}
function trierParNom() {            // ordre alphabetique
    let resultats = [...apprenants];
    resultats.sort(function(apprenant1, apprenant2) {
        return apprenant1.nomComplet.localeCompare(apprenant2.nomComplet);
});
    return resultats;
}
export {
    normaliserNom,
    validerResultat,
    ajouterApprenant,
    enregistrerResultat,
    rechercherApprenant,
    calculerProgression,
    filtrerParNiveau,
    trierParNom,
    trierParProgression,
    afficherTableauDeBord
};

