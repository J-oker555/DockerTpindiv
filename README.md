# 🌟 Projet Citations React + Node.js avec Docker Compose

Ce projet est une application web full-stack composée :
- d'une API **Node.js/Express** qui fournit des citations aléatoires
- d'un **frontend React** qui les affiche joliment

Le tout est **conteneurisé avec Docker** et orchestré via **Docker Compose** 🐳

---

## ⚙️ Lancer le projet

### 1. Cloner le repo

```bash
git clone https://github.com/ton-utilisateur/ton-repo.git
cd ton-repo
2. Lancer en un clic :

docker-compose up --build

Frontend dispo sur : http://localhost:3000

Backend dispo sur : http://localhost:5000/quotes


*******Questions de réflexion

Quelle différence fais-tu entre un Dockerfile et un docker-compose.yml ?

    Dockerfile : Définit comment construire une image d’un conteneur (instructions de build)

    docker-compose.yml : Définit comment exécuter plusieurs conteneurs ensemble (orchestration, réseau, ports…)

Quels sont les avantages de séparer les services dans une architecture Docker ?

    Isolation : chaque service a ses dépendances

    Scalabilité : tu peux scaler indépendamment le front ou le back

    Maintenance plus facile : mise à jour d’un service sans toucher aux autres

En quoi Docker Compose facilite-t-il le travail en équipe et le déploiement ?

    Un seul fichier pour tout lancer (docker-compose up)

    Moins de bugs liés aux environnements locaux différents

    Reproductibilité assurée

Pourquoi est-il utile de publier une image sur Docker Hub même pour un projet perso ?

    Partage facile : tu peux lancer le projet de n’importe où sans rebuild

    Sauvegarde : ton image est toujours dispo même sans ton code source

C   I/CD & déploiement : tu peux intégrer ça dans un pipeline automatique