# SAS Progress Console

## Description

SAS Progress Console est une application en JavaScript exécutée avec Node.js.

Elle permet de gérer et suivre la progression de plusieurs apprenants pendant leur parcours de formation.

L'application permet notamment de :

* Afficher un tableau de bord.
* Afficher la liste des apprenants.
* Ajouter un nouvel apprenant.
* Consulter un apprenant par son identifiant.
* Ajouter ou modifier les résultats d'une journée.
* Rechercher un apprenant par son nom.
* Filtrer les apprenants selon leur niveau.
* Trier les apprenants par progression.
* Trier les apprenants par ordre alphabétique.

## Technologies utilisées

* JavaScript
* Node.js
* npm
* prompt-sync
* Git / GitHub

## Structure du projet

```text
sas-project/
│
├── data.js
├── main.js
├── progression.js
├── README.md
│
└── tests/
    └── test.js
```

## Installation

Cloner le projet :

```bash
git clone https://github.com/aouajyassine-ship-it/sas-project.git
```

Accéder au dossier :

```bash
cd sas-project
```

Installer les dépendances :

```bash
npm install
```

## Lancer l'application

Exécuter :

```bash
node main.js
```

Un menu permet de choisir l'action à effectuer.

## Menu

```text
1. Afficher le tableau de bord
2. Afficher la liste des apprenants
3. Ajouter un apprenant
4. Consulter un apprenant par identifiant
5. Ajouter ou modifier le résultat d'une journée
6. Rechercher un apprenant par nom
7. Filtrer les apprenants par niveau
8. Trier les apprenants par progression décroissante
9. Trier les apprenants par ordre alphabétique
0. Quitter
```

## Calcul de la progression

La progression d'un apprenant est calculée avec la formule :

```text
Progression = (Exercices terminés / Total des exercices) × 100
```

Les niveaux sont définis comme suit :

* **Solide** : progression >= 80%
* **En progression** : progression >= 50% et < 80%
* **À renforcer** : progression < 50%

Le nombre de challenges terminés et le nombre de jours enregistrés sont également calculés.

## Tests

Les tests se trouvent dans le dossier `tests`.

Pour exécuter les tests :

```bash
node tests/test.js
```

Les tests vérifient notamment :

* La normalisation des noms.
* La validation d'un résultat valide.
* Le refus d'un résultat avec un jour invalide.
* La recherche d'un apprenant existant.
* Le comportement lorsqu'un apprenant n'existe pas.

## Données

Les données utilisées dans le projet sont fictives et sont stockées dans `data.js`.

## Auteur

Aouaj Yassine 

Projet réalisé dans le cadre de la formation JavaScript / SAS.
