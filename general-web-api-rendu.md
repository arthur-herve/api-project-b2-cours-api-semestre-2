Pour le code de l'API, j'ai réutilisé le code de mon projet de fin d'année.

# Principes et standards REST : une approche pour les API Web

## API
L'API ( interface de programme d'application) sert d'intermédiaire entre plusieurs machines ou logiciels. Ainsi, plusieurs systèmes entrent en interaction sans qu'il soit nécessaire pour eux de connaître le fonctionnement interne des autres. C'est pourquoi les deux parties doivent se mettre d'accord sur les protocoles utilisés durant l'interaction.   Cela donne un premier avantage, les processus d'intégration sont simplifiés et les coûts liés à la création d'interfaces personnalisées sont réduits. 
Ce type de programme offre une plus grande flexibilité : pour un besoin donné, une application peut aller chercher dans diverses API les ressources nécessaires. Un site web pourra ainsi aller chercher des destinations de voyages avec la météo locales, des prévisions, les moyens de transports pour y accéder, les modes de transport locaux et les horaires de ceux-ci et ainsi de suite.  
Des entreprises proposent leurs données à la vente via des API. On citera la SNCF et TCL pour les transports, Météo France pour la météo et ainsi de suite. 
Les API facilitent la création et la maintenance des applications, ce qui permet aux développeurs de se concentrer sur leurs fonctionnalités de base plutôt que de passer du temps à créer des fonctions répétitives.  
Le plus souvent les données seront renvoyées au format JSON ou bien XML à l'aide de requêtes HTTP.  
  
## REST

Dans le but d'harmoniser le développement des APIs, un principe a été posé durant les années 2000, le principe REST. Ce principe permet d'avoir une communication simplifiée entre les parties.  
Avant l'avènement de l'API REST, il existait diverses techniques pour développer une API mais imparfaites et rendaient difficile l'intégration des logiciels dans les produits. Le Representational State Transfer (REST) est venu fournir une norme qui permettait la communication entre deux serveurs de n'importe où dans le monde en utilisant certains attributs tels que l'uniformité de l'interface, l'architecture client/serveur, l'absence de rétention d'état, la mise en cache de la représentation des ressources, l'utilisation du protocole et des méthodes HTTP.

Ce principe REST vise à optimiser les processus d'intégration entre les clients et les serveurs. Cela permet de segmenter le projet d'une manière connue et en utilisant des pratiques partagées. Les API RESTful permettent de séparer les parties d'une application de telle manière à ce que les parties puissent évoluer sans impacter les autres parties. Par exemple, on peut faire évoluer la manière dont on traite une information récupérées auprès du serveur ou à l'inverse, on modifie la manière dont on traite la requête, tant que le format de la requête ne change pas l'autre partie ne sera pas impactée.
  
### Les règles d'une API RESTful
  
1. **Uniformité de l'interface**   
Pour une même ressource, les mêmes demandes d'API. Autrement dit, un même identificateur URI (Uniform Resource Identifier, on le définit par la suite)  
2. **Découplage entre le client et le serveur**  
Il doit y avoir une indépendance totale entre le client et le serveur, le minimum de partage d'informations entre les deux parties. L'URI qui permet l'échange d'information doit être l'unique information dont aura besoin le client. Aucune des deux parties ne pourra modifier l'autre.  
3. **Stateless**   
Pour une ressource demandées, on n'accepte qu'une seule et unique requête. Les informations sont contenues dans ladite requête. Aucune information cliente ne sera stockée côté serveur et aucune session n'est nécessaire pour bénéficier de l'API côté serveur.  
4. **Mise en cache**  
POur ne pas mobiliser inutilement des ressources, il est important de faire des caches côté client et côté serveur avec une préférence pour le serveur. Le but est de limiter les requêtes et le traitement d'informations lorsqu'il suffit juste de conserver temporairement des données comme l'affichage d'une page web.  
5. **Architecture système en couches**  
Lorsque l'on fait un appel vers une API REST, il y aura souvent des intermédaires avant la réponse. Les API REST doivent être conçues de telle manière à ce que le client et le serveur ne puissent savoir s'ils sont en relation directe avec l'autre.  
6.  **Code à la demande**  
Il est possible, et cela n'est pas systématique, de renvoyer du code dans la réponse. La règle dans ce cas est que le code ne doit pas être executé.  

## URI et URL  
L'URI pour Uniform Resource Identifier est un identifiant de ressource formé par une chaîne de caractères. L'URL (Uniform Resource Locator) est un type d'URI qui contient où une ressource peut-être trouvée sur internet.  
Exemple d'URL :  
`http://localhost:5000/users/etudiants/`


## HTTP  
L'Hypertext Transfer Protocol est un protocole permettant de récupérer des ressources on aura par exemple les documents HTML. Ce protocole est de type client-serveur, c'est à dire que le destinataire initie la transaction. Cette transaction prend la forme de messages individuels (et non un flux de données), qui ont pour noms 'requêtes' pour ceux envoyés par le client et 'réponse' pour ceux envoyés par le serveur.  
Exemple de requête vers un api :  
`http://localhost:5000/users/etudiants/`
Cette requête est accompagné par un type d'opération.
  
## CRUD  
CRUD pour Create Read Update Delete, est l'acronymes des quatres opérations principales que l'on on opère en base de données:  
|   Opérations   |   SQL |   HTTP |   Exemple d'URL |    Exemple de code côté API  |
|---    |:-:    |:-:    |:-:    |:-:    |
|   Create   |   INSERT   |   POST/PUT |   `http://localhost:5000/room/new/`  |   `router.post("/room/new/", isAuthenticated, isEducationManager, newRoomPOST);`  |
|   Read   |   SELECT  |   GET |   `http://localhost:5000/rooms/campus/:idCampus/`  |   `router.get("/rooms/campus/:idCampus/",isAuthenticated,isEducationManager,getRoomsByCampusGET);`  |
|   Update   |   UPDATE   |   PUT/PATCH |  `http://localhost:5000/room/:idRoom/`  |     `router.patch("/room/:idRoom/",isAuthenticated,isEducationManager,patchRoomPATCH);`  |
|   Delete   |   DELETE   |   DELETE |   `http://localhost:5000/room/:idRoom/`  |   `router.delete("/room/:idRoom/",isAuthenticated,isEducationManager,deleteRoomDELETE);`  |  

## KISS  
Le principe KISS pour 'Keep It Simple Stupid' à faire simple lorsque l'on peut faire simple. Ici, le but est d'avoir un code simple et clair à lire et à debugger. Cela peut aller de l'organisation du code avec par exemple la réunion des routes par type de données, à utiliser des fonctions préexistantes.

## HATEOAS  
Le principe HATEOAS pour Hypermedia As The Engine of Application State, est une contrainte mise en place dans les applications REST afin que le client n'interagisse avec le serveur que via des hypermedia. Autrement dit, un client qui accède à une page web via une URL aura ses actions limitées aux liens contenus dans la vue retournée.
  
## YAGNI  
Yagni signifie 'you ain't gonna need it'. C'est un principe de développement déclarant qu'un développeur n'a pas à ajouter des fonctionnalités à un logiciel si celles-ci ne sont pas absolument nécessaires. Pour une API, on évitera de développer des routes qui sont inutiles.
  
## MVC  
Le principe de Model View Controller désigne une architecture séparant les 'préoccupations' entre une partie logique métier et une partie affichage.  
1. Les Modèles gèrent les données et la logique métier
2. Les Vues gèrent la disposition et l'affichage
3. Les Contrôleurs acheminent les commandes des parties modèles et views. 

## CORS  
Pour 'Cross-origin resource sharing', désigne le mécanisme qui, en ajoutant des en-têtes aux requêtes HTTP, permet d'accéder à une ressource provenant d'un domaine, port, protocole différent de ceux utilisés pour les pages courantes.
  
# Sources
## API
### Définition API 
https://www.cnil.fr/fr/definition/interface-de-programmation-dapplication-api#:~:text=Une%20API%20(application%20programming%20interface,des%20données%20et%20des%20fonctionnalités.  
  
https://www.redhat.com/en/topics/api/what-are-application-programming-interfaces

### Exemple d'APIs  

**Météo**  
https://www.data.gouv.fr/fr/organizations/meteo-france/#/datasets  
  
**SNCF**  
https://numerique.sncf.com/startup/api/  
  
**TCL**  
https://data.grandlyon.com/portail/fr/jeux-de-donnees/lignes-metro-funiculaire-reseau-transports-commun-lyonnais-v2/api  
**Set d'API gratuites**  
https://github.com/public-apis/public-apis  

## REST
### Définition REST  
https://www.knowledgehut.com/blog/programming/rest-api  
https://www.ibm.com/fr-fr/topics/rest-apis  

## URI URL 
### Définition URI et URL  
https://developer.mozilla.org/fr/docs/Glossary/URI   
https://fr.wikipedia.org/wiki/Uniform_Resource_Identifier  
https://developer.mozilla.org/fr/docs/Glossary/URL  
https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL  

## MVC  
https://developer.mozilla.org/fr/docs/Glossary/MVC  

## CRUD  
https://fr.wikipedia.org/wiki/CRUD  
https://developer.mozilla.org/fr/docs/Glossary/CRUD  

## KISS  
https://fr.wikipedia.org/wiki/Principe_KISS  

## HATEOAS
https://fr.wikipedia.org/wiki/Hypermédia  
https://fr.wikipedia.org/wiki/HATEOAS  

## YAGNI  
https://fr.wikipedia.org/wiki/YAGNI  







