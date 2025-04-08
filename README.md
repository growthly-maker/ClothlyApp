# Clothly - Livraison de vêtements à la demande

Clothly est une application mobile qui met en relation des clients avec des magasins de vêtements via un service de livraison rapide - comme Uber Eats, mais pour les vêtements!

## Concept

L'application connecte trois types d'utilisateurs :
- **Clients** : Peuvent parcourir les magasins et vêtements disponibles, passer commande et suivre leur livraison en temps réel
- **Magasins partenaires** : Peuvent gérer leur catalogue de produits et les commandes entrantes
- **Livreurs** : Peuvent accepter des livraisons et générer des revenus en livrant des vêtements

## Fonctionnalités principales

- Inscription et authentification des utilisateurs
- Navigation par catégories de vêtements et boutiques
- Système de commande simplifié
- Suivi des livraisons en temps réel
- Système de notation et d'avis

## Technologies

- React Native
- Navigation: React Navigation
- Gestion d'état: Context API (évolutif vers Redux/Zustand si nécessaire)
- Design System personnalisé

## Structure du projet

- `/src/assets` - Images, fonts, et autres ressources statiques
- `/src/components` - Composants réutilisables
- `/src/navigation` - Configuration de la navigation
- `/src/screens` - Écrans de l'application
- `/src/services` - Services API et utilitaires
- `/src/theme` - Styles globaux et thème
- `/src/store` - État global de l'application
- `/src/context` - Contextes React pour la gestion d'état

## Installation

```bash
# Installer les dépendances
npm install

# Démarrer Metro
npm start

# Lancer sur iOS
npm run ios

# Lancer sur Android
npm run android
```

## Prochaines étapes

- Intégration backend avec une API RESTful
- Implémentation des fonctionnalités de paiement
- Système de géolocalisation pour la livraison
- Notifications push
- Tests unitaires et d'intégration

## Contributeurs

Créé dans le cadre du développement initial de l'application Clothly.

## Licence

Propriétaire - Tous droits réservés