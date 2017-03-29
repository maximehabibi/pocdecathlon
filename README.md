# pocdecathlon
Ce repository contient les documents nécessaires au bon déploiement du PoC API Decathlon
_____________________________________________________________________________

## Déploiement et utilisation de l'application Ionic

Dézipper le dossier contenant l'application Ionic.
Se positionner au 1er niveau de dossiers au sein de l'arborescence et lancer l'application grâce à la commande "ionic serve --lab"

## Personnalisation du portail développeur Apigee

**_Il n'y a aucun moyen d'upload automatiquement les fichiers joints sous Apigee, le contenu texte des documents doit être retranscrit un à un via copier/coller_** 

1. Se connecter sur Apigee, une fois cela fait se rendre sur l'interface d'API Management Apigee Edge.
2. Sélectionner "Portals" dans l'onglet "Publish", cliquer sur "+ Portal" en haut à droite de la page.
3. Choisir un nom et une description pour ce portail.
4. Copier/Coller le contenu des documents et fichiers aux endroits correspondants sur le portail développeur.
5. Ajouter les APIs.
6. Vos APIs sont maintenant en ligne et utilisables.

## Redéploiement des APIs

1. Se connecter sur Apigee, une fois cela fait se rendre sur l'interface d'API Management Apigee Edge.
2. Sélectionner "API Proxy" dans l'onglet "Develop", cliquer sur "+ Proxy" en haut à droite de la page.
3. Choisir la dernière option : "Proxy bundle" puis upload le dossier zippé téléchargé sur ce repository.
4. Une fois le proxy déployé, vérifiez bien qu'un environnement a été sélectionné en "Deployment".
5. Si aucun environnement n'a été sélectionné, cliquez sur "Deployment : Test".
6. Vos APIs sont maintenant en ligne et utilisables.

## Déployer Apigee BaaS

1. Se connecter sur Apigee, une fois cela fait se rendre sur l'interface d'API Management Apigee Edge.
2. Sélectionner "API BaaS" dans l'onglet "Develop", puis créer un compte BaaS.
3. Revenir à l'interface d'API Management.
3. Mettre à jour les lignes de code suivantes dans le document "app.js" accessible depuis l'onglet "Develop" de votre API. Ce document est situé en bas du menu latéral gauche dans la section "Scripts".

    var UsergridClient = require('./node_modules/usergrid/lib/client')  
    var Usergrid = new UsergridClient  
    ({  
      "appId": "votreAppId",  
      "orgId": "votreOrgId",  
      "authMode": "NONE",  
      "baseUrl": "votreBaseUrl, communément "https://apibaas-trial.apigee.net/"",  
      "clientId": "votreClientIdBaas",  
      "clientSecret": "votreClientSecretBaas"  
    }) 
   
4. Créer deux Collections: "/organisateurs" & "/participants"
5. les peupler respectivement avec les documents 
