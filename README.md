# 💻 Digital Banking Frontend - Angular

Bienvenue dans le projet **Digital Banking (Frontend)**, une application web de gestion bancaire moderne développée avec **Angular**. Cette interface permet aux clients et aux administrateurs de visualiser, gérer et interagir avec leurs comptes bancaires en toute sécurité.

---

## 🗂️ Sommaire

1. [ Technologies utilisées](#-technologies-utilisées)
2. [️ Architecture du projet](#-architecture-du-projet-frontend)
3. [ Authentification & sécurité](#-authentification--sécurité)
4. [️ Lancer l’application](#️-lancer-lapplication)


---

##  Technologies utilisées

| Icône | Technologie | Rôle |
| :--: | ----------- | ---- |
| ![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white) | Angular 17+ | Framework frontend |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white) | Bootstrap | UI Design |
| ![JWT](https://img.shields.io/badge/JWT-black?logo=JWT&logoColor=white) | JWT | Authentification sécurisée |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) | TypeScript | Langage principal |
| ![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white) | SCSS / CSS | Styles |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) | Node.js | Runtime |
| ![Angular CLI](https://img.shields.io/badge/Angular%20CLI-red?logo=angular&logoColor=white) | Angular CLI | Gestion du projet |

---

##  Architecture du projet frontend

📁 `digital-banking-frontend/`
```
  ├── accounts/ → Composants pour afficher & gérer les comptes
  ├── admin-template/ → Templates et vues spécifiques à l’administration
  ├── customers/ → Composants pour gérer les clients
  ├── customers-accounts/ → Gestion client + comptes associés
  ├── environments/ → Fichiers de configuration par environnement
  ├── guards/ → Protection des routes selon les rôles
  ├── interceptors/ → Injection automatique du JWT dans les requêtes
  ├── login/ → Page et logique de connexion utilisateur
  ├── model/ → Modèles métier : Customer, Account, etc.
  ├── navbar/ → Composant de la barre de navigation globale
  ├── new-customer/ → Composant de création de client
  ├── not-authorized/ → Affichage en cas d’accès refusé
  ├── services/ → Services pour communiquer avec l’API backend
  ├── app.component.* → Composant principal
  ├── app.module.ts → Module racine de l’application
  └── app-routing.module.ts → Configuration des routes Angular
```

---

##  Authentification & sécurité

Le frontend utilise un système de connexion JWT :

-  Stockage sécurisé du token (localStorage)
-  Intercepteur pour ajouter le JWT à chaque requête
-  Guards pour protéger les routes selon les rôles

---

## Lancer l’application

- Login page 
![img.png](img.png)

- Authentification en tant que admin
![img_1.png](img_1.png)

- Listes des clients
![img_2.png](img_2.png)

- Ajouter un nouveau client
![img_3.png](img_3.png)

![img_4.png](img_4.png)

![img_5.png](img_5.png)

![img_6.png](img_6.png)

- Supprimer un client

![img_7.png](img_7.png)

![img_8.png](img_8.png)

- Chercher un client

![img_9.png](img_9.png)

- Consulter un compte 

![img_10.png](img_10.png)

![img_11.png](img_11.png)

![img_12.png](img_12.png)
 


 Ce frontend communique avec un backend Spring Boot sécurisé. Ensemble, ils forment une solution complète de gestion bancaire digitale.

---
 Auteur : Sara EL AMRANI



