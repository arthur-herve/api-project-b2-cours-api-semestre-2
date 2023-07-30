# Projet-annuel-B2

Pour faire fonctionner ce projet il est nécessaire d'ajouter plusieurs fichiers de configuration :  
### Backend  
Un fichier `backend/config.json` et `backend/dist/config.json` contenant :  
```json
{
    "user": "#METTRE LE NOM DE L'UTILISATEUR#",
    "password": "#METTRE LE MOT DE PASSE DU SERVEUR#",
    "server": "#METTRE L'ADRESSE SERVEUR#",
    "database": "test-database",
    "options": {
        "trustedConnection": true,
        "encrypt": false,
        "enableArithAbort": true,
        "trustServerCertificate": true
    },
    "API": "http://localhost:3000",
    "HOST": 5000
}
```  
Un dossier CONFIG-FILES dans le backend et un autre dans le dist soit, `backend/CONFIG-FILES/secret-password.json` et `backend/dist/CONFIG-FILES/secret-password.json`.  
```json
{
    "passwordToken" : "#METTRE UNE CHAINE DE CARACTERE QUI SERVIRA DE MOT DE PASSE#",
    "passwordHashSalt" : 10
}
```
### Frontend 
Mettre un fichier config.json tel que : `frontend/src/config.json`
```json
{
    "API" : "http://localhost:5000"
}
```
  
  
## Base de données
Etant donné que nos droits sur le serveur alloué par l'école à notre projet ont été révoqués le moyen faire fonctionner cet API est d'installer SQL Server sur son ordinateur et de lancer le serveur en local.