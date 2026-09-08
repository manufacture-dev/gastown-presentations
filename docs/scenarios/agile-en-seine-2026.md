# Agile En Seine & IA 2026

Ce document cadre la présentation-atelier Gas Town prévue pour Agile En Seine & IA 2026. L'événement officiel se déroule les 22 et 23 septembre 2026 au Palais des Congrès d'Issy-les-Moulineaux. Le programme place l'atelier Gas Town le 22 septembre, premier jour de l'événement.

La session dure 1 h 45, se déroule en français et accueille environ 20 participants répartis en 10 binômes. Elle combine la présentation complète de Gas Town, du live coding réalisé par le présentateur et un atelier guidé dans lequel chaque binôme reproduit les étapes dans son propre lab Taxiway.

## État initial du deck

Le talk utilise la variante `workshop`, dérivée de la variante `full` de DiliTrust TechDay et présentée en français. Cette variante conserve les slides conceptuelles du deck complet, puis ouvre une séquence d'atelier dédiée après `Supervision`.

La cible éditoriale du futur deck workshop est la suivante:

1. conserver toutes les slides de la présentation complète en français;
2. ouvrir l'atelier par le setup complet de Docker, Lima, Taxiway et du lab;
3. expliquer la navigation entre les sessions tmux imbriquées;
4. présenter Agreement Hub depuis la copie locale créée par Taxiway;
5. dérouler le travail par incréments avec des commandes et prompts copiables;
6. réserver une phase distincte à la vérification de l'application produite;
7. conserver `Aller plus loin avec les formulas` et `Ce que Gas Town change` après la vérification;
8. terminer avec `Merci` et dix minutes de questions-réponses.

La variante `full` reste inchangée pour les présentations existantes.

## Intention générale

L'objectif n'est pas seulement de montrer Gas Town. Chaque participant doit pouvoir observer et manipuler le passage d'une intention produit à un delivery distribué:

- préparer un environnement reproductible avec Taxiway;
- confier un premier incrément au Mayor;
- observer le plan, les beads et le worker associé;
- lancer plusieurs incréments indépendants en parallèle;
- suivre leur progression avec les convoys et les rôles de supervision;
- stabiliser, intégrer et vérifier le résultat dans Agreement Hub.

Le live coding donne la référence commune et le rythme. Les binômes n'ont pas à présenter leur résultat devant la salle: les checkpoints servent à vérifier leur progression et à déclencher de l'aide, pas à organiser dix restitutions.

## Organisation des participants

Les 20 participants travaillent en 10 binômes. Cette organisation limite le nombre de labs à accompagner et permet à chaque personne de participer activement.

Chaque binôme utilise deux rôles:

- le conducteur saisit les commandes et les prompts;
- le navigateur lit les consignes, contrôle le résultat attendu et aide au diagnostic.

Les rôles s'inversent après le premier incrément, avant la séquence de travail en parallèle.

Chaque binôme dispose d'un lab Taxiway. Un lab non opérationnel à la fin de la phase de setup ne bloque pas la salle: le binôme rejoint temporairement un binôme voisin pendant qu'un facilitateur intervient sur l'environnement en difficulté.

Deux facilitateurs constituent la configuration recommandée:

- le présentateur maintient le rythme, explique et réalise le live coding;
- le second facilitateur accompagne les binômes qui signalent un blocage.

## Conducteur de 1 h 45

### Enregistrement et analyse en parallèle

L’enregistrement fait partie du parcours. Depuis la machine hôte, avant `taxiway shell agile-en-seine`, lancer `taxiway record start agile-en-seine`.

Après la stabilisation et le bilan du Mayor, exécuter `gt estop` dans le shell du lab. Cette commande gèle le travail des agents, mais exempte le Mayor et l’overseer ; elle ne détruit pas le lab et ne garantit pas une consommation globale nulle.

Depuis la machine hôte, arrêter l’enregistrement avec `taxiway record stop agile-en-seine --latest`. Ouvrir ensuite une session Claude Code dédiée à l’analyse et copier le prompt `workshop-analysis` depuis la présentation. L’agent réutilise les consignes de `taxiway record analyze agile-en-seine --prompt-only` et croise les fichiers de l’enregistrement avec les traces du lab dans Langfuse via agent-browser. Il ne lance pas d’autre agent et reste en lecture seule. Si une connexion à Langfuse est nécessaire, le binôme s’authentifie sans exposer ses secrets.

Ne pas attendre le rapport : mettre à jour l’application et essayer les parcours manuellement, puis ouvrir une autre session Claude Code pour la vérification fonctionnelle. Le prompt `workshop-verify` combine inspection du code, checks pertinents et tests de chaque fonctionnalité livrée via agent-browser (parcours nominal, cas limite, persistance lorsque applicable). Le rapport distingue les résultats observés des vérifications bloquées ou non exécutées. Revenir au rapport d’analyse après la vérification et avant la synthèse pour comparer coordination, incidents et résultat observé. L’analyse et la vérification consomment encore des tokens. Ces actions s’insèrent dans les créneaux existants, sans ajouter de durée à la session.

Le replay seul reste optionnel après l’atelier : `taxiway record player agile-en-seine`, depuis la machine hôte.

| Temps | Durée | Séquence | Résultat attendu |
|---:|---:|---|---|
| 0:00-0:05 | 5 min | Accueil et constitution des binômes | Dix binômes numérotés, rôles conducteur et navigateur compris |
| 0:05-0:20 | 15 min | Présentation complète de Gas Town | Modèle mental commun avant de manipuler |
| 0:20-0:35 | 15 min | Setup complet: installation, Taxiway et création du lab | Lab accessible et diagnostic sans erreur bloquante |
| 0:35-0:40 | 5 min | Présentation de l'application Agreement Hub | État initial observé depuis la copie locale créée par Taxiway |
| 0:40-0:45 | 5 min | Transmission du contrat initial au Mayor | Garde-fous acceptés, aucun travail encore dispatché |
| 0:45-1:00 | 15 min | Premier incrément guidé | Bibliothèque de clauses planifiée, lancée et observable |
| 1:00-1:15 | 15 min | Fonctionnalités en parallèle | Workflow d'approbation et Générateur de clauses suivis séparément |
| 1:15-1:20 | 5 min | Supervision, stabilisation et intégration | Nouveaux dispatchs gelés et état de convergence explicite |
| 1:20-1:30 | 10 min | Vérification de l'application produite | Branche récupérée, checks lancés et produit inspecté |
| 1:30-1:32 | 2 min | Aller plus loin avec les formulas | Ouverture vers les playbooks réutilisables |
| 1:32-1:35 | 3 min | Synthèse: ce que Gas Town change | Apprentissages reliés aux concepts du talk |
| 1:35-1:45 | 10 min | Conclusion et questions-réponses | Discussion finale; ce créneau absorbe aussi un léger retard |

## Rythme de l'atelier

Chaque étape suit la même boucle:

1. la slide expose l'objectif, le contexte d'exécution et le résultat attendu;
2. le présentateur exécute la séquence en live coding;
3. les binômes copient les commandes ou le prompt depuis leur propre navigateur;
4. ils reproduisent la séquence dans leur lab;
5. le checkpoint vérifie que la salle peut avancer;
6. les facilitateurs accompagnent les binômes qui en ont besoin.

Les futures slides pratiques doivent distinguer clairement les contextes. Un bouton de copie ne doit pas mélanger des commandes exécutées sur la machine hôte, une entrée dans le shell Taxiway et un prompt destiné à une session interactive du Mayor.

Pour chaque étape, le deck devra proposer:

- un chemin essentiel commun à tous les binômes;
- une exploration facultative, courte et en lecture seule, pour les binômes en avance;
- un résultat observable servant de critère de passage au checkpoint.

## Parcours de commandes

Les commandes de setup sont exécutées depuis le terminal de la machine hôte. Sur Windows 11, il faut d'abord installer WSL2, puis exécuter le parcours Linux depuis le terminal WSL2.

Initialiser Taxiway et créer le lab:

```bash
taxiway init
taxiway status

taxiway up agile-en-seine \
  --type gastown \
  --repo https://github.com/manufacture-dev/agreement-hub.git \
  --set version=1.1.0 \
  --set beads-version=1.0.3 \
  --set model=claude-opus-4-8
```

Vérifier le lab puis y entrer:

```bash
taxiway list agile-en-seine
taxiway doctor agile-en-seine
taxiway access
taxiway shell agile-en-seine
```

Vérifier Gas Town depuis le shell du lab:

```bash
gt doctor
gt status
```

Rejoindre le Mayor:

```bash
gt mayor attach
```

Observer le premier incrément:

```bash
bd list --all --flat
bd ready
bd show <bead_id>
gt convoy list --all
gt convoy status <convoy_id>
gt status
```

Observer le parallélisme et la convergence:

```bash
gt status
bd list --all --flat
bd ready
gt convoy list --all
gt refinery queue agreement_hub
gt refinery status agreement_hub
gt witness status agreement_hub
gt dolt status
gt mail inbox
```

### Lancer l'application avant le premier incrément

Sur la machine hôte (dans WSL2 sous Windows), avec Node.js 20+ et npm 10+, cloner le dépôt bare local créé par Taxiway. Ne pas cloner GitHub directement : cette copie doit suivre les livraisons du lab.

```bash
git clone ~/.taxiway/lab-state/agile-en-seine/git/agreement-hub.git ~/agreement-hub
```

Ce chemin correspond à l'installation standard de Taxiway. Adapter le répertoire d'état si celui-ci a été personnalisé. Le dossier de destination doit être nouveau.

Terminal 1 :

```bash
cd ~/agreement-hub/backend
npm install
npm run dev
```

Terminal 2 :

```bash
cd ~/agreement-hub/frontend
npm install
npm run dev
```

Suivre d'abord la slide pratique pour cloner et lancer l'application, puis présenter Agreement Hub en ouvrant http://localhost:5173 sur la slide suivante. Garder les deux serveurs actifs. Le backend écoute sur le port 3001.

Récupérer la branche livrée depuis cette même copie de référence, après avoir arrêté les deux serveurs avec Ctrl+C :

```bash
cd ~/agreement-hub
git fetch origin
git switch main
git rebase origin/main
npm --prefix backend install
npm --prefix frontend install
```

Relancer `npm run dev` dans chacun des terminaux backend et frontend, puis vérifier l'application.

Les prompts longs sont volontairement séparés des slides et disponibles dans `public/prompts/workshop-*.{fr,en}.txt`. Ils couvrent le contrat initial, le premier incrément, le parallélisme, la stabilisation et la vérification.

## Navigation dans les sessions tmux imbriquées

Taxiway ouvre une session tmux extérieure qui donne accès aux sessions Gas Town. Comme les deux niveaux utilisent le préfixe `Ctrl+b`, il faut transmettre ce préfixe au niveau intérieur:

- `Ctrl+b s`: choisir une session dans le tmux courant;
- `Ctrl+b Ctrl+b`: transmettre le préfixe `Ctrl+b` au tmux Gas Town intérieur;
- `Ctrl+b Ctrl+b s`: ouvrir l'arbre de sessions du tmux intérieur;
- `Ctrl+b Ctrl+b d`: détacher le tmux intérieur et revenir au niveau Taxiway;
- `Ctrl+b d`: détacher le tmux courant.

Les touches sont tapées successivement. Le deck renvoie vers le [guide officiel tmux](https://github.com/tmux/tmux/wiki/Getting-Started) et une [cheat sheet tmux](https://tmuxcheatsheet.com/).

## Signal de progression

À chaque checkpoint, les binômes utilisent un signal simple:

- **vert**: résultat attendu atteint;
- **jaune**: commande en cours ou résultat incertain;
- **rouge**: aide nécessaire.

Le présentateur montre d'abord son propre résultat à l'écran, puis demande le signal de la salle. On avance lorsque tous les binômes sont au vert ou déjà accompagnés. Il n'y a ni tour de table ni projection obligatoire des écrans participants.

## Checkpoint 1 - Environnement opérationnel

Le binôme doit avoir:

- Docker, Lima et Taxiway installés pendant l'atelier;
- un lab Taxiway accessible;
- un diagnostic sans erreur bloquante;
- un statut Gas Town lisible;
- une navigation tmux comprise.

Exploration facultative: identifier le Mayor, le Witness et la Refinery dans l'état du système.

## Checkpoint 2 - Premier incrément lancé

Le binôme doit avoir:

- transmis le premier besoin au Mayor;
- lu et, si nécessaire, recadré le plan proposé;
- donné son accord pour l'exécution;
- identifié le bead et le worker associés.

Le premier incrément doit rester simple, visible et démontrable. Le scénario retenu est la `Bibliothèque de clauses`, avec uniquement le travail de fondation strictement nécessaire.

Exploration facultative: retrouver le worktree et observer le statut détaillé du bead.

Après ce checkpoint, conducteur et navigateur inversent leurs rôles.

## Checkpoint 3 - Parallélisme visible

Le binôme lance deux incréments indépendants. Le périmètre recommandé combine:

- `Workflow d'approbation`;
- `Générateur de clauses`.

Le binôme doit pouvoir observer:

- deux beads correspondant aux deux flux produit;
- deux Polecats actifs ou terminés;
- un convoy donnant une vue d'ensemble;
- des contextes de travail isolés.

L'objectif n'est pas de forcer un parallélisme artificiel, mais de rendre visibles le découpage, les dépendances et la coordination choisis par Gas Town.

Exploration facultative: repérer les fichiers potentiellement partagés ou expliquer pourquoi les deux incréments peuvent avancer indépendamment.

## Checkpoint 4 - Convergence et preuve

Treize minutes avant la synthèse, aucun nouveau travail n'est lancé. Tous les binômes passent en stabilisation:

- état réel des beads et du convoy;
- workers terminés ou encore actifs;
- merge queue et éventuels conflits;
- résultat présent sur la branche de delivery;
- vérification fonctionnelle dans Agreement Hub.

Trois issues sont acceptables:

- une fonctionnalité intégrée et visible;
- une fonctionnalité terminée mais encore dans la chaîne d'intégration;
- un blocage clairement identifié grâce aux objets Gas Town.

Un blocage compris constitue un résultat d'apprentissage. La réussite de l'atelier ne dépend pas de dix démonstrations parfaites.

## Aide et différences de vitesse

Les participants demandent de l'aide dès qu'un signal passe au rouge. Le second facilitateur privilégie un diagnostic court et observable: commande exécutée, message reçu, statut du bead ou état du lab.

Garde-fous recommandés:

- ne pas prolonger indéfiniment le setup d'un seul lab;
- ne pas lancer un nouvel incrément après le début de la stabilisation;
- ne pas laisser une réparation locale interrompre le live coding pour toute la salle;
- permettre à un binôme bloqué de suivre temporairement l'environnement du voisin;
- réserver les explorations facultatives à des actions en lecture seule.

## Synthèse collective et questions-réponses

Il n'y a pas de restitution formelle des dix binômes. La synthèse démarre directement par quelques questions ouvertes:

- À quel moment Gas Town vous a-t-il aidés à comprendre ce qui se passait?
- Quel blocage avez-vous pu diagnostiquer grâce aux objets de delivery?
- Qu'est-ce qui change lorsque le travail est distribué entre plusieurs agents?

Le présentateur relie les réponses spontanées aux concepts du deck:

- intention produit et Mayor;
- travail explicite avec les beads;
- parallélisme avec les Polecats;
- suivi avec les convoys;
- convergence avec Witness et Refinery;
- preuve finale dans Agreement Hub.

La discussion se poursuit naturellement en questions-réponses. La slide `Ce que Gas Town change` structure la synthèse, puis la slide `Merci` accueille les dernières questions et clôt la session.

## Préparation attendue

Les participants n'ont aucune installation à réaliser avant de venir. Le setup de quinze minutes couvre Docker, Lima, Taxiway et la création du lab. Les liens d'installation restent dans le deck et pourront être mis à jour lorsque la nouvelle documentation Taxiway sera publiée.

Avant l'atelier, les facilitateurs vérifient:

- que les liens Docker, Lima, Taxiway et WSL2 sont accessibles depuis le réseau de l'événement;
- que le provisionnement du repository Agreement Hub fonctionne sur macOS, Linux et Windows 11 via WSL2;
- que le téléchargement des dépendances tient dans le créneau prévu;
- la route publique de cette présentation;
- le fonctionnement des boutons de copie dans le deck web;
- l'accès local à Agreement Hub;
- le mécanisme de signal vert, jaune ou rouge;
- la présence du second facilitateur.

Le QR code de la première slide devra pointer vers la route publique du talk:

```text
https://manufacture.dev/gastown-presentations/agile-en-seine-2026/#/1
```
