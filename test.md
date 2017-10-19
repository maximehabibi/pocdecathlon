<div id="write" class="is-node">

# <a name="header-n3" class="md-header-anchor "></a>Notification workflow sur dossier de souscription

Cette API doit permettre de renvoyer des notification sur une souscription. Elle permet à l'assureur de communiquer des informations d'état de la souscription.

| **Version** | 0.2 |
| **Auteur** | Damien BROCHON |
| **Societé** | Natixis |

## <a name="header-n21" class="md-header-anchor "></a>Protocole

Le service doit respecter la norme **REST**. Le protocole à utiliser est **HTTPS**.

## <a name="header-n25" class="md-header-anchor "></a>Securisation

Les headers et transactions sont sécurisés par HTTPS. Ce qui permet d'utiliser un header `Authorization` `Basic` pour transmettre les requêtes. Un utilisateur et un mot passe seront fournis à chaque assureur.

Le champs `Authorization` doit contenir le mot `Basic` suivi des login et mot de passe au format suivant qui sont ensuite encodés en base 64 :

> bp1818:somepwd

Pour notre exemple nous trouverons dans le header ce résultat :

<pre class="md-fences mock-cm" style="display:block;position:relative">Authorization: Basic YnAxODE4OnNvbWVwd2Q=</pre>

## <a name="header-n36" class="md-header-anchor "></a>API

Cet appel permet un retour de l'assureur sur le statut de la souscription. Il va être utilisé afin d'envoyer des informations au partenaire. Les cas de retour sont les suivants :

*   Manque de pièce justificative
*   Manque d'informations
*   Go Virement
*   Fonds réceptionnés (ex: Prélèvement SEPA effectué)
*   Demande d'encaissement chèque
*   CP émis au client
*   Dossier refusé

### <a name="header-n62" class="md-header-anchor "></a>Requête pour notifier un évènement

<pre class="md-fences mock-cm" style="display:block;position:relative">PUT /subscription-case/{case-number}/notify/ HTTPS/1.1
Authorization: Basic YnAxODE4OnNvbWVwd2Q=
Content-Type: application/json

{
   "notification":{
      "type": "",
      "descriptions":[
         {
            "comment":"",
            "document-type":"",
            "document-id":""
         }
      ]
   }
}</pre>

| Paramètre Path | Obligatoire | Type | Format | Description |
| --- | --- | --- | --- | --- |
| `case-number` | X | `string` | Numéro de dossier externe (correspond au numéro AVXXXXXXX) |

#### <a name="header-n78" class="md-header-anchor "></a>Réponse :

<pre class="md-fences mock-cm" style="display:block;position:relative">HTTPS/1.1 200 OK
Content-Type: application/json

{
   "notification-response":{
      "id":"",
      "date": "",
      "case-number":"",
      "type":"",
      "descriptions":[
         {
            "comment":"",
            "document-type":"",
            "document-id":""
         }
      ]
   }
}</pre>

Les champs présents dans la réponse sauf le champ `id` reprennent les données de la requête.

#### <a name="header-n82" class="md-header-anchor "></a>Réponse si erreur :

A utiliser uniquement en cas d'erreur d'enregistrement ou erreur technique

<pre class="md-fences mock-cm" style="display:block;position:relative">HTTPS/1.1 400 BAD REQUEST
Content-Type: application/json

{
  "error": 
  {
    "status": "",
    "description": ""
  }
}</pre>

Faire figurer la valeur du champ `case-number` dans la description de l'erreur. Le code HTTP peut être en `4xx` si erreur client, `5xx` si erreur serveur.

#### <a name="header-n91" class="md-header-anchor "></a>Réponse si le dossier n'existe pas

<pre class="md-fences mock-cm" style="display:block;position:relative">HTTPS/1.1 404 NOT FOUND
Content-Type: application/json

{
  "error": 
  {
    "code": "",
    "description": ""
  }
}</pre>

Faire figurer la valeur du champ `case-number` dans la description de l'erreur. Le code HTTP peut être en `4xx` si erreur client, `5xx` si erreur serveur.

#### <a name="header-n96" class="md-header-anchor "></a>Champs du type `notification`

| Champ | Obligatoire | Type | Format | Description |
| --- | --- | --- | --- | --- |
| `case-number` | X | `string` | Numéro d'assurance vie partenaire réservé. (n°AVXXXXXXXX) |
| `type` | X | `string` | Voir(1) | Type de notification |
| `descriptions` | `description[]` | Tableau de descriptions fonctionnelles de la notification. Elle doit comprend 1 ou n éléments. |
| `description.comment` | X | `string` | Commentaire libre permettant d'ajouter une description fonctionnelle |
| `description.document-type` | `string` | Voir(2) | A utiliser qu'au cas le type de la notification est `MISSING_PIECE`, il s'agit du type de document manquant. |
| `description.document-id` | `string` | Il s'agit de l'ID du document qui pose problème. Cet id est transmis par le service de récupération du dossier de souscription. |

**(1)** Ce champ contient l'une des valeurs suivantes :

| Valeur | Description |
| --- | --- |
| `MISSING_PIECE` | Manque de pièces justificatives : au cas ou la pièce est illisible ou n'est pas disponible alors qu'elle est attendue. |
| `MISSING_INFORMATION` | Manque d’informations : lorsqu'une ou plusieurs informations obligatoires sont manquantes |
| `GO_TRANSFER` | Go virement : lorsque l'assureur donne son accord au courtier afin que le client puisse procéder au virement vers les comptes du client (à utiliser uniquement si l'assureur ne dispose pas de compte ouvert chez le courtier) |
| `CHECK_RECOVERY_REQUEST` | Demande d'encaissement du chèque : lorsque l'assureur donne son accord au courtier afin que le client/banquier puisse procéder à l'envoi du chèque vers l'assureur (à utiliser uniquement si l'assureur ne dispose pas de compte ouvert chez le courtier) |
| `DIRECT_DEBIT_DONE` | Fonds réceptionnés : informe que l'assureur à pu récupérer les fonds. Que ce soit par prélèvement SEPA ou sur son compte ouvert chez le courtier. |
| `SPECIFIC_TERMS_SENT` | Conditions particulières émises au client. Informe de l'émission des conditions particulières au client. |
| `REFUSED_CASE` | Dossier refusé |

**(2)** Voir les types de la documentation du service `/subscription-case/{case-number}/documents`

* * *

#### <a name="header-n171" class="md-header-anchor "></a>Champs du type `notification-response`

| Champ | Obligatoire | Type | Format | Description |
| --- | --- | --- | --- | --- |
| `id` | X | `string` | Id technique de la notification enregistrée. |
| `date` | X | `string` | ISO 8601 : `aaaammjjThhmiss` | Date d'enregistrement de la notification. |
| `case-number` | X | `string` | Numéro d’assurance vie partenaire réservé. (n°AVXXXXXXXX) |
| `type` | X | `string` | Voir(1) | Type de notification |
| `descriptions` | `description[]` | Tableau de descriptions fonctionnelles de la notification. Elle doit comprend 1 ou n éléments. |
| `description.comment` | X | `string` | Commentaire libre permettant d'ajouter une description fonctionnelle |
| `description.document-type` | `string` | Voir(2) | A utiliser qu'au cas le type de la notification est `MISSING_PIECE`, il s'agit du type de document manquant. |
| `description.document-id` | `string` | Il s'agit de l'ID du document qui pose problème. Cet id est transmis par le service de récupération du dossier de souscription. |

(1) Ce champ contient l'une des valeurs suivantes :

| Valeur | Description |
| --- | --- |
| `MISSING_PIECE` | Manque de pièces justificatives : au cas ou la pièce est illisible ou n'est pas disponible alors qu'elle est attendue. |
| `MISSING_INFORMATION` | Manque d’informations : lorsqu'une ou plusieurs informations obligatoires sont manquantes |
| `GO_TRANSFER` | Go virement : lorsque l'assureur donne son accord au courtier afin que le client puisse procéder au virement vers les comptes du client (à utiliser uniquement si l'assureur ne dispose pas de compte ouvert chez le courtier) |
| `CHECK_RECOVERY_REQUEST` | Demande d'encaissement du chèque : lorsque l'assureur donne son accord au courtier afin que le client/banquier puisse procéder à l'envoi du chèque vers l'assureur (à utiliser uniquement si l'assureur ne dispose pas de compte ouvert chez le courtier) |
| `DIRECT_DEBIT_DONE` | Fonds réceptionnés : informe que l'assureur à pu récupérer les fonds. Que ce soit par prélèvement SEPA ou sur son compte ouvert chez le courtier. |
| `SPECIFIC_TERMS_SENT` | Conditions particulières émises au client. Informe de l'émission des conditions particulières au client. |

(2) Voir les types de la documentation du service `/subscription-case/{case-number}/documents`

#### <a name="header-n254" class="md-header-anchor "></a>Champs du type `error`

| Champ | Obligatoire | Type | Format | Description |
| --- | --- | --- | --- | --- |
| `code` | X | `string` | Voir(1) | Code erreur |
| `description` | X | `string` | Description de l'erreur (avec le case-number) |

(1) Ce champ contient le code HTTP de la réponse suivi d'un numéro permettant d'identifier l'erreur.

</div>
