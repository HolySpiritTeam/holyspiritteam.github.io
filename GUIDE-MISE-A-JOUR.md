# Guide administrateur — Site Holy Spirit Team

- **Site public :** https://holyspiritteam.github.io
- **Espace administrateur :** https://app.pagescms.org
- **Hébergement :** GitHub Pages (gratuit, mises à jour illimitées)
- **Fichiers du site :** dépôt GitHub `HolySpiritTeam/holyspiritteam.github.io`

---

## 1. Se connecter à l'espace administrateur

1. Ouvrez **https://app.pagescms.org**.
2. Connectez-vous :
   - **Propriétaire (compte GitHub HolySpiritTeam)** : « Sign in with GitHub ».
   - **Administrateur invité** : saisissez votre adresse e-mail. Vous recevez un lien de connexion par e-mail, sans mot de passe et sans compte GitHub.
3. Choisissez le site **holyspiritteam.github.io**.

Le menu de gauche affiche : **Actualités, Événements, Galerie photos, Vidéos, Départements, Informations générales**.

## 2. Modifier le contenu

Chaque rubrique affiche une liste repliée de titres. **Cliquez sur un titre** pour l'ouvrir et le modifier.

| Je veux… | Comment |
|---|---|
| **Ajouter** un élément | Bouton **+ Add an item** en bas de la liste, puis remplir les cases |
| **Modifier** un élément | Cliquer sur son titre, puis changer le texte |
| **Supprimer** un élément | Cliquer sur la **corbeille 🗑** à droite de son titre |
| **Ajouter une photo** | **Upload** pour envoyer une photo du téléphone ou de l'ordinateur, **Select** pour en choisir une déjà envoyée |
| **Changer l'ordre** | Faire glisser avec les **6 petits points ⋮⋮** à gauche du titre |
| **Enregistrer** | Bouton **Save** en haut à droite. **À faire avant de quitter la rubrique !** |

Où trouver quoi :
- **Actualités** : les activités passées, avec photo. La plus récente s'affiche en premier.
- **Événements** : ce qui est à venir. Les événements passés disparaissent seuls du site.
- **Galerie photos** : photo, légende et catégorie.
- **Vidéos** : coller le lien YouTube (recommandé).
- **Départements** : nom, description et responsable.
- **Informations générales** : textes de l'accueil, verset, « Qui sommes-nous », chiffres clés, dons, contact, réseaux sociaux.

Une rubrique vide (aucune actualité, aucune photo…) est masquée automatiquement sur le site.

Après **Save**, le site public se met à jour en **1 à 3 minutes**. Rafraîchissez la page pour voir la nouvelle version.

**Conseils :**
- Les photos doivent faire moins de 1 Mo. Pour réduire une photo de téléphone, utilisez https://squoosh.app.
- Pour les vidéos, privilégiez YouTube : les fichiers vidéo sont lourds.
- La **catégorie** d'une photo crée automatiquement un bouton de filtre dans la galerie. Écrivez-la toujours de la même façon (ex. « Louange », pas parfois « louange »).
- L'ordre des actualités est automatique : la plus récente en premier.

## 3. Gérer les administrateurs (propriétaire uniquement)

Dans Pages CMS, ouvrez le site puis **Collaborators** (ou « Settings » → « Collaborators ») :
- **Inviter** : saisissez l'e-mail de la personne. Elle reçoit une invitation.
- **Retirer l'accès** : supprimez la personne de la liste. L'effet est immédiat.

Les administrateurs invités peuvent seulement modifier le contenu et les photos. Ils ne peuvent ni supprimer le site, ni gérer les autres administrateurs.

## 4. En cas d'erreur : revenir en arrière

Chaque enregistrement est gardé dans l'historique GitHub, avec qui l'a fait et quand.
Sur https://github.com/HolySpiritTeam/holyspiritteam.github.io, cliquez sur **Commits** pour voir l'historique. Vous pouvez y retrouver l'ancienne version d'un fichier.
En cas de doute, demandez de l'aide avant de toucher aux fichiers techniques (`index.html`, `css/`, `js/`, `.pages.yml`).

## 5. Formulaire de contact

Par défaut, le formulaire ouvre la messagerie du visiteur. Pour recevoir les messages directement par e-mail :
1. Créez un compte gratuit sur https://formspree.io, puis « New form ».
2. Copiez l'adresse fournie (ex. `https://formspree.io/f/abcdwxyz`).
3. Collez-la dans **Informations générales → Contact → Adresse Formspree**.

## 6. Couleurs du site (technique)

Les couleurs reprennent celles du logo. Elles se règlent en haut du fichier `css/style.css` : `--primaire` (magenta), `--primaire-fonce` (prune), `--accent` (orange), `--accent-clair` (jaune).
