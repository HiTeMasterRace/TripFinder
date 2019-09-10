# Déroulé du module

Semaine d'intégration : **faire connaissance autour d'un projet**

Créer des groupes de 4/5 membres

Définir le rôle et le travail de chacun

# Descriptif

Création d'une application d'inspiration de voyages pour l'aéroport d'Orly à Paris

# Contexte

L'aéroport parisien d'Orly souhaite proposer à ses visiteurs une application d'inspiration de voyages

À partir de différents critères, l'application affichera une liste de villes recommandées

Toutes les villes proposées doivent être accessibles à partir de l'aéroport d'Orly

Les critères peuvent être de différents types : température, continent, mois de l'année, type de voyage (culture, plage, montagne, famille, vie nocturne…), budget…

# Fonctionnalités

Suite au choix de différents critères, l'application recommande certaines villes

Il est possible, à partir de la liste des villes recommandées, de consulter les détails d'une ville sélectionnée : image de présentation, localisation sur une carte, présentation…

> BONUS : un espace d'administration permettant d'ajouter, modifier et supprimer des villes

# Composantes du projet

## Généralités

L'application se compose de deux parties

* l'API, manipulant du JSON, et accessible à partir d'une URL distincte; par exemple http://localhost:8000

* l'application accessible à partir d'une URL distincte; par exemple http://localhost:8001

## API

Création d'une API manipulant du JSON avec PHP et MySQL/MariaDB

Quelques exemples d'endpoints GET possibles pour l'API

### Lister les villes

```http
GET /cities
```

### Récupérer une ville

```http
GET /cities/{name}
```

### Recherche

```http
GET /cities/search?continent={name}
GET /cities/search?continent={name}&temperature={value}
GET /cities/search?continent={name}&temperature={value}&type={value}
```

> BONUS : Authentification de chaque requête vers l'API avec [JSON Web Tokens](https://jwt.io/)

## Front

Création du front en JavaScript et PHP

# Outils recommandés

Environnement de développement Apache/PHP/MySQL

* sur Windows

	* [XAMPP](https://www.apachefriends.org/fr)

	* [WAMP](http://www.wampserver.com)

	* [EasyPHP](http://www.easyphp.org)

	* [MAMP](https://www.mamp.info/en/downloads/)

* sur MacOS

	* [MAMP](https://www.mamp.info/en/downloads/)

	* [XAMPP](https://www.apachefriends.org/fr)

* sur Linux

	* à installer avec le terminal

Contrôle de version : [Git](https://git-scm.com/)

Gestion des dépendances et auto-chargement des classes PHP : [Composer](https://getcomposer.org/)

Empaqueteur JS : [Webpack](https://webpack.js.org/)

# Livrable de fin de semaine

Disponibilité du code source et base de données sur un dépôt Git : [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), [Bitbucket](https://bitbucket.org/), [Framagit](https://framagit.org/), …

À la racine du dépôt Git, le fichier **README.md** doit décrire le nom, rôle et travail de chacun des membres de l'équipe

# Quelques rappels

En considérant l'arborescence suivante

```
/project
├── api
│	└── index.php
├── assets
│   ├── css
│   └── js
├── public
│   ├── css
│   ├── js
│	└── index.php
├── src
│	├── Api
│	└── App
├── composer.json
└── webpack.config.js
```

Pour lancer le serveur intégré du PHP dans les dossier **api** et **public**

```bash
php -S localhost:8000 -t api
php -S localhost:8001 -t public
```

Pour auto-charger les classes PHP avec [Composer](https://getcomposer.org/)

* dans le fichier **composer.json**

```json
{
	"autoload": {
		"psr-4" : {
			"MyProject\\" : "src/"
		}
	}
}
```

* pour créer les classes d'auto-chargement

```bash
composer dumpautoload
```

Pour configurer [Webpack](https://webpack.js.org/)

* dans le fichier **webpack.config.js**

```js
const path = require("path");
 
module.exports = {
	mode: "development",
	entry: {
		index: "./assets/js/index.js"
	},
	output: {
		filename: "js/[name].js",
		path: path.resolve(__dirname, "./public")
	}
}
```

# Références

Liste des villes accessibles à partir de l'aéroport d'Orly

* <https://www.aeroports-voyages.fr/aeroport/paris-orly/ORY>

Température moyenne mensuelle des villes du monde

* <http://www.meteofrance.com/climat/monde>

Meilleure période pour visiter

* <https://public.tableau.com/profile/ryan7046#!/vizhome/TheBestTimetoVisitAnywhereCelsius/Sheet1>

Exemples d'applications existantes

* <http://inspirationvoyage.hellotrip.fr/>

* <https://www.evaneos.fr/ou-partir/>

* <https://greatescape.co/?origin=PAR&originType=city>

* <https://www.ou-et-quand.net/>

* <https://www.easyjet.com/fr/inspireme>

* <http://fromparistoinspiration.parisaeroport.fr/search>

* <https://www.airfrance.fr/guide-voyage/>

* <https://www.nantes.aeroport.fr/fr/inspirations-destinations/inspirez-vous>

* <http://www.toulouse.aeroport.fr/passagers/vols-destinations/destinations>

* <https://www.montpellier.aeroport.fr/vols-destinations/inspiration-voyage-montpellier/>

* <https://www.bordeaux.aeroport.fr/vols-destinations/destinations-depart-bordeaux>

* <https://www.transavia.com/fr-FR/book-a-flight/advanced-search/search/>

* <https://www.algofly.fr/ou-partir/>

Liste des statuts HTTP pour l'API

* <https://www.restapitutorial.com/httpstatuscodes.html>

JSON Web Tokens

* <https://jwt.io/>

Authentification avec JSON Web Tokens

* <https://auth0.com/learn/json-web-tokens/>

Affichage de carte avec Leaflet

* <https://leafletjs.com/>