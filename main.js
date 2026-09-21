import {
    ajouterApprenant,
    enregistrerResultat,
    rechercherApprenant,
    filtrerParNiveau,
    calculerProgression,
    trierParProgression,
    trierParNom,
    afficherTableauDeBord
} from "./progression.js";

import { apprenants } from "./data.js";

 import promptSync from "prompt-sync";
const prompt = promptSync();

let choix = "";
while (choix !== "0") {
console.log("===== SAS PROGRESS CONSOLE =====");
console.log("1. Afficher le tableau de bord");
console.log("2. Afficher la liste des apprenants");
console.log("3. Ajouter un apprenant");
console.log("4. Consulter un apprenant par identifiant");
console.log("5. Ajouter ou modifier le résultat d'une journée");
console.log("6. Rechercher un apprenant par nom");
console.log("7. Filtrer les apprenants par niveau");
console.log("8. Trier les apprenants par progression décroissante");
console.log("9. Trier les apprenants par ordre alphabétique");
console.log("0. Quitter");

 choix = prompt("Votre choix : ");
console.log("Vous avez choisi :", choix);

if (choix === "1") {
    afficherTableauDeBord();
}

if (choix === "2") {
    console.log(apprenants); // console.log(JSON.stringify(apprenants, null, 2)); pour afficher les objects
}

if (choix === "3") {
    let id = Number(prompt("ID : "));
    let nomComplet = prompt("Nom complet : ");
    let ville = prompt("Ville : ");
    let resultat = ajouterApprenant(id, nomComplet, ville);
    console.log(apprenants);
if (resultat === true) {
    console.log("Apprenant ajouté avec succès.");
} else if (resultat === "id_existe") {
    console.log("Erreur : cet ID existe déjà.");
} else if (resultat === "texte_invalide") {
    console.log("Erreur : le nom et la ville ne doivent pas contenir de nombres.");
}

}
if (choix === "4") {
    let id = Number(prompt("ID de l'apprenant : "));
    let apprenant = rechercherApprenant(id);
    if (apprenant === false) {
        console.log("Apprenant introuvable.");
} else {
        console.log("===== APPRENANT =====");
        console.log("ID :", apprenant.id);
        console.log("Nom :", apprenant.nomComplet);
        console.log("Ville :", apprenant.ville);
        console.log("Résultats :", apprenant.resultats);
}
}

if (choix === "5") {
    let id = Number(prompt("ID de l'apprenant : "));
    let jour = Number(prompt("Jour : "));
    let exercicesTermines = Number(prompt("Exercices terminés : "));
    let totalExercices = Number(prompt("Total exercices : "));
    let challengeTermine = prompt("Challenge terminé ? (true/false) : ");
if (challengeTermine === "true") {
    challengeTermine = true;
} else {
    challengeTermine = false;
}
    let resultat = enregistrerResultat(
    id,
    jour,
    exercicesTermines,
    totalExercices,
    challengeTermine
);
    if (resultat === true) {
        console.log("Résultat enregistré avec succès.");
        let apprenant = rechercherApprenant(id);
        console.log("===== TABLEAU DE L'APPRENANT =====");
        console.log("ID :", apprenant.id);
        console.log("Nom :", apprenant.nomComplet);
        console.log("Ville :", apprenant.ville);
        console.log("Résultats :");

    for (let i = 0; i < apprenant.resultats.length; i++) {
        console.log(
                "Jour :", apprenant.resultats[i].jour,"| Exercices :", apprenant.resultats[i].exercicesTermines + "/" + apprenant.resultats[i].totalExercices,"| Challenge :", apprenant.resultats[i].challengeTermine
);
        }
} else {
        console.log("Erreur : résultat invalide ou apprenant introuvable.");
}
}

if (choix === "6") {
    let nom = prompt("Nom de l'apprenant : ");
    let apprenant = rechercherApprenant(nom);
if (apprenant === false) {
    console.log("Apprenant introuvable.");
} else {
    console.log("===== APPRENANT TROUVÉ =====");
    console.log("ID :", apprenant.id);
    console.log("Nom :", apprenant.nomComplet);
    console.log("Ville :", apprenant.ville);
    console.log("Résultats :", apprenant.resultats);
}
}

if (choix ===  "7") {
    let niveau = prompt("Niveau :");
    let resultat = filtrerParNiveau(niveau);
    if (resultat.length === 0){
        console.log("Aucun apprenant trouvé pour ce niveau.");
    } else {
      console.log("===== APPRENANTS =====");
      for (let i = 0; i < resultat.length; i++) {
        console.log(
                resultat[i].nomComplet,
                calculerProgression(resultat[i]).progression + "%",
                calculerProgression(resultat[i]).niveau
);
}
}
}

if (choix === "8") {
    let resultats = trierParProgression();

for (let i = 0; i < resultats.length; i++) {
    console.log(
    resultats[i].nomComplet,
     "-",
calculerProgression(resultats[i]).progression + "%"
    );
}
}

if (choix === "9") {
    let result = trierParNom();
    console.log("===== ORDRE ALPHABÉTIQUE =====");
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].nomComplet);
    }
}

if (choix === "0" ) {
    console.log("Au revoir!");
} 
}


