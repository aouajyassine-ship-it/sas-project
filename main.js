import {
    ajouterApprenant,
    enregistrerResultat,
    rechercherApprenant,
    filtrerParNiveau,
    trierParProgression,
    afficherTableauDeBord
} from "./progression.js";

import { apprenants } from "./data.js";

 import promptSync from "prompt-sync";
const prompt = promptSync();

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

let choix = prompt("Votre choix : ");
console.log("Vous avez choisi :", choix);

if (choix === "1") {
    afficherTableauDeBord();
}
if (choix === "2") {
    console.log(apprenants); // console.log(JSON.stringify(apprenants, null, 2)); pour afficher les objects
}
if (choix === "3") {
    let id = prompt("ID : ");
    let nomComplet = prompt("Nom complet : ");
    let ville = prompt("Ville : ");
    let resultat = ajouterApprenant(id, nomComplet, ville);
    console.log(apprenants);
if (resultat === true) {
    console.log("Apprenant ajouté avec succès.");
} else {
    console.log("Erreur : cet ID existe déjà.");
}
}
if (choix === "4") {
    let id = prompt("Identifiant de l'apprenant : ");
    let apprenant = rechercherApprenant(id);
if (apprenant === false) {
        console.log("Apprenant introuvable.");
} else {
        console.log(apprenant);
}
}

