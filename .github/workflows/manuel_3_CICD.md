### Étape 1 : Configurer les Secrets GitHub, pour que GitHub Actions puisse se connecter à ton serveur, tu dois configurer des secrets pour le déploiement.

Clé SSH : Génère une clé SSH sur ton serveur et ajoute la clé publique à ton dépôt GitHub sous Settings > Secrets and variables > Actions > New repository secret.
Liste des variables : 
- SERVER_IP
- USER
- SSH_PRIVATE_KEY
- SSH_PORT

#### Sur ton serveur, génère clé avec un nom définit stuv
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
Ajouter la clé au fichier `/home/{USER}/.ssh/autorizedkey`, ou un truc comme ça

### Étape 2 : Créer un Workflow GitHub Actions
Crée un fichier .github/workflows/deploy.yml dans ton dépôt GitHub.


### Étape 3 : Configurer Docker Compose
Le docker compose t'as capté

### Étape 4 : Tester le Workflow
Push le code sur la branche main de ton dépôt GitHub.
GitHub Actions exécutera le workflow de déploiement, transférera les fichiers via SCP, et exécutera les commandes nécessaires pour redémarrer les conteneurs Docker avec la nouvelle version de l'application.






