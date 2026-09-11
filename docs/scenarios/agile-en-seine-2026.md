# Agile En Seine & IA 2026

Atelier Gas Town du 22 septembre 2026 : 1 h 45 en français, environ 20 participants en 10 binômes. Le présentateur réalise le parcours en live ; chaque binôme le reproduit dans son lab Taxiway. Un second facilitateur accompagne les blocages. Les rôles conducteur/navigateur s'inversent pendant l'observation des agents.

Ce conducteur suit le contenu actuel de la variante `workshop`. Les durées sont des repères d’animation, pas une garantie d’exécution pour dix binômes ou une installation à froid. Les retours de répétition restent dans le rapport du projet Agreement Hub, pas dans le déroulé destiné à animer l’atelier.

## Objectif et périmètre

Faire observer le passage d’une intention à deux évolutions coordonnées, puis à une application vérifiée : un plan, un GO, des beads, des agents, des intégrations et des tests fonctionnels visibles dans le navigateur.

L'application de départ est celle récupérée depuis le dépôt par Taxiway, sans référence Git imposée ni ajout préalable. Aucun starter bibliothèque à préparer ni branche applicative à publier.

Nous reprenons la logique du prompt `demo-15-min` utilisé pour [Dev With AI](dev-with-ai-live-4.md) et [SACEM](sacem-matinale-dsi.md), avec une sélection désormais stricte : le Mayor lit `docs/use-cases/README.md`, inspecte l'application et choisit exactement deux des cinq use cases listés. Les conducteurs suggéraient Recherche/Filtre et Risk Reviewer offline, mais ces exemples ne deviennent pas des choix imposés dans cet atelier.

Chaque binôme valide son propre plan : les fonctionnalités peuvent différer entre les dix labs. Elles doivent être visibles, testables et dimensionnées pour moins de 15 minutes après GO, sans dépendre d'un premier use case à réaliser. Si un candidat réclame une fonctionnalité préalable, choisir un périmètre autonome ou un autre candidat. Mode mock/offline si nécessaire, sans service externe ni refonte large. Les tests et la restitution se basent sur les critères du plan de chaque lab.

Le GO autorise toutes les tâches du plan approuvé, y compris leurs dépendances lorsqu'elles deviennent prêtes. Une nouvelle fonctionnalité ou extension nécessite un nouvel accord. Le Mayor expose les fichiers partagés, réserve leur modification à un responsable à la fois et explique le parallélisme réellement possible. Ni deux workers simultanés sur toute la durée, ni des noms d'agents fixes, ni deux tâches strictement verticales ne sont garantis.

## Conducteur de 105 minutes

| Temps | Durée | Séquence | Checkpoint |
|---|---:|---|---|
| 00:00–00:05 | 5 min | Accueil et binômes | Conducteur/navigateur identifiés |
| 00:05–00:20 | 15 min | Présentation Gas Town | Toutes les slides conceptuelles conservées |
| 00:20–00:40 | 20 min | Installation, lab, Claude Code, agent-browser et accès Langfuse | À 00:35, rouge accompagné ; à 00:40, prêt ou secours |
| 00:40–00:45 | 5 min | Présentation de l'application, clone hôte, lancement et découverte | CRUD initial visible |
| 00:45–00:50 | 5 min | Données via l'interface | Douze contrats présents après rechargement |
| 00:50–00:55 | 5 min | Enregistrement, entrée dans le lab, tmux, mission et GO unique | Record lancé ; périmètre, critères et dépendances compris |
| 00:55–01:10 | 15 min | Delivery et observation guidée | Rapports réguliers, navigation tmux et bilan du Mayor |
| 01:10–01:15 | 5 min | Bilan, pause des agents et arrêt de l’enregistrement | Bilan conservé, record terminé ; lab disponible |
| 01:15–01:25 | 10 min | Mise à jour et vérification avec l’agent | Fonctionnalités testées dans le navigateur visible |
| 01:25–01:30 | 5 min | Analyse interactive du record et Langfuse | Déroulement, traces et coût des appels |
| 01:30–01:35 | 5 min | Aller plus loin et synthèse | Ce que Gas Town change |
| 01:35–01:45 | 10 min | Questions et conclusion | Créneau protégé |

La variante `workshop` conserve toutes les slides conceptuelles de la présentation, y compris Beads, Convoys et Polecats. La théorie précède l’atelier ; pendant l’exécution, les binômes utilisent la fiche tmux et les commandes d’observation, sans nouvelle présentation ni nouveau prompt. Les numéros changent avec les insertions : naviguer par titre et vérifier le titre actif. `Aller plus loin avec les formulas` reste une ouverture sans nouvel exercice.

### Repères dans le support actuel

| Slides | Séquence à animer |
|---|---|
| 3 | Remerciement des partenaires, après les intervenants |
| 14 | À vous de piloter Gas Town : lancement de l’atelier et fonctionnement en binôme |
| 15–17 | Taxiway, outils de l’application, puis création et diagnostic du lab |
| 18–19 | Présenter Agreement Hub, récupérer la copie locale, lancer et découvrir l’application |
| 20 | Générer douze contrats avec Claude Code et agent-browser |
| 21 | Démarrer le record, entrer dans le lab, expliquer tmux et rejoindre le Mayor |
| 22–23 | Confier la mission, relire le plan, envoyer GO et observer les agents au travail |
| 24 | Se détacher de la session Gas Town et suivre la réalisation avec les commandes gt et bd |
| 25–26 | Lire le bilan, mettre en pause et arrêter l’enregistrement |
| 27–28 | Mettre à jour la copie locale puis reprendre l’agent pour les tests fonctionnels |
| 29 | Lancer l’analyse interactive du record et consulter Langfuse |
| 30 | Bravo : exprimer le besoin, observer les agents et vérifier le résultat |
| 31–33 | Formulas, synthèse et slide Merci d’origine avec questions-réponses |
| 34 | Inviter les participants à donner leur avis dans TingEvent |

## Setup et application

Les participants n’ont aucune installation imposée avant de venir. Les vingt minutes couvrent les prérequis Taxiway, Git, Node.js 24 LTS (24.x)/npm 11+, Claude Code, agent-browser, son navigateur et les accès nécessaires. Windows 11 suit le parcours Linux dans WSL2. Le créneau de données n’inclut aucune installation. Suivre l’ordre des slides : installer Taxiway (15), préparer l’outillage de l’application (16), puis créer le lab (17).

### Installer Taxiway — slide 15

Sous Windows 11, installer [WSL2](https://learn.microsoft.com/windows/wsl/install), puis utiliser son terminal Linux. Installer [Docker](https://docs.docker.com/get-started/get-docker/) Desktop sur macOS ou Docker Engine avec le plugin Compose sous Linux ou WSL2. Installer [Lima](https://lima-vm.io/docs/installation/), que Taxiway utilisera comme driver. La page [Taxiway](https://taxiway.sh/) donne accès à sa documentation d’installation.

Sur la machine hôte, dans WSL2 sous Windows :

```bash
curl -fsSL https://taxiway.run | sh
taxiway init
taxiway status
```

### Préparer les outils de l’application — slide 16

Les commandes suivantes se lancent sur la machine hôte. Une fois Node.js/npm et Claude Code installés via les liens du deck, installer agent-browser :

```bash
npm install -g agent-browser
```

Sur macOS :

```bash
agent-browser install
```

Sur Linux ou WSL2 :

```bash
agent-browser install --with-deps
```

Installer le skill pour Claude Code :

```bash
npx skills add vercel-labs/agent-browser --global --skill agent-browser --agent claude-code
```

Ouvrir Claude Code, terminer l'authentification puis saisir `/exit` dans la session interactive :

```bash
claude
```

### Créer le lab — slide 17

Le nom `agile-en-seine` désigne le lab local du binôme ; chaque binôme utilise sa propre machine.

```bash
taxiway up agile-en-seine \
  --type gastown \
  --repo https://github.com/manufacture-dev/agreement-hub.git \
  --set version=1.1.0 \
  --set beads-version=1.0.3 \
  --set model=claude-opus-4-8
```

```bash
taxiway status
taxiway doctor agile-en-seine
taxiway access
```

Un provisionnement terminé ne suffit pas : `taxiway doctor` doit être acceptable avant le checkpoint. Le contrôle des settings, hooks et `gt doctor` fait aussi partie de la préparation des facilitateurs ; les participants vérifieront Gas Town à l'ouverture du Mayor après les données. À quinze minutes de setup, le facilitateur prend en charge les labs rouges. À vingt minutes, le binôme utilise un lab de secours validé ou rejoint un voisin ; la salle poursuit.

Ouvrir [Langfuse](http://langfuse.localhost:4000) avec les accès retournés par `taxiway access`, puis sélectionner le projet du lab. L’analyse du record et la consultation des traces sont deux actions distinctes ; aucun accès via agent-browser à Langfuse n’est nécessaire.

En cas d’erreur du diagnostic, relancer `taxiway doctor agile-en-seine --fix`. Quelques warnings non bloquants peuvent rester ; demander de l’aide si un blocage persiste.

### Présenter, récupérer et lancer l’application — slides 18–19

Présenter d’abord Agreement Hub à partir de la capture et de ses fonctionnalités existantes (slide 18). Sur la slide suivante, récupérer et lancer l’application, puis l’ouvrir avec l’encadré « Découvrir l’application ».

Sur l'hôte, cloner le dépôt bare local de Taxiway dans un dossier neuf. Cette copie suit les livraisons du lab. Adapter le chemin d'état uniquement si l'installation Taxiway le personnalise.

```bash
git clone ~/.taxiway/lab-state/agile-en-seine/git/agreement-hub.git ~/agreement-hub
```

Cette copie locale permettra de récupérer les évolutions produites dans le lab. Ouvrir deux terminaux pour lancer l’application.

Terminal backend :

```bash
cd ~/agreement-hub/backend
npm install
npm run dev
```

Terminal frontend :

```bash
cd ~/agreement-hub/frontend
npm install
npm run dev
```

Attendre que les serveurs soient prêts, puis ouvrir [Agreement Hub](http://localhost:5173) depuis l’encadré en bas de la slide de lancement (slide 19) pour découvrir le CRUD existant. L’ouverture de l’application sert de vérification initiale, sans contrôle Git ni appel /health supplémentaire. Conserver les deux terminaux ouverts.

## Données, plan et observation

### Générer les contrats — slide 20

Dans un terminal supplémentaire sur la machine hôte, laisser les serveurs backend et frontend ouverts et lancer l’agent dans la copie locale :

```bash
cd ~/agreement-hub
claude
```

Depuis Claude Code sur l'hôte, utiliser le [prompt données](../../public/prompts/workshop-seed.fr.txt), qui commence par `/agent-browser`. L’agent conserve une session dédiée en mode visible (headed), la même fenêtre et le même onglet. Il inspecte l’application puis crée douze contrats fictifs réalistes via l’interface : types, entreprises, statuts et clauses variés, titres métier sans préfixe ni nom de client, données cohérentes. Le modèle choisit les détails, sans quotas de statuts ni catalogue de clauses imposés. Respecter les champs et validations ; ne modifier ni code ni contrats existants, sans SQL ni API directe. Vérifier la persistance et reprendre sans doublons après interruption jusqu’à douze créations, puis résumer les contrats et blocages. Le prompt à droite des commandes de lancement est affiché et copié à l’identique, sans défilement.

Conserver cette session Claude Code et son navigateur pour la vérification finale. Le badge « Agent application » désigne le même agent sur les slides 20 et 28 ; la remarque rose sous le terminal rappelle de garder sa session ouverte. Les données générées appartiennent à la copie locale de l’application ; ce n’est pas un transfert de base de données vers le lab.

### Enregistrer et rejoindre le Mayor — slide 21

Après les données, ouvrir un autre terminal sur l’hôte pour démarrer l’enregistrement et entrer dans le lab :

```bash
taxiway record start agile-en-seine
taxiway shell agile-en-seine
```

Dans le shell du lab, vérifier Gas Town puis rejoindre le Mayor :

```bash
gt doctor
gt status
gt mayor attach
```

### Confier la mission et envoyer GO — slides 22–23

Chaque tranche doit rester fidèle au besoin documenté et testable dans l’interface. Le plan précise les numéros et noms exacts des deux use cases, ainsi que ce qui est couvert ou exclu. Un endpoint technique hors liste ne constitue pas un second use case. Les use cases IA n° 1 et 2 restent éligibles : simuler le LLM sans service externe, sans les écarter pour ce motif. Ajuster les choix et le périmètre pour tenir dans les 15 minutes après GO.

Transmettre **une seule fois le prompt de mission de l’atelier** :

- [Français](../../public/prompts/workshop-mission.fr.txt)
- [English](../../public/prompts/workshop-mission.en.txt)

Le prompt a été condensé pour l’atelier. La slide affiche et copie exactement le même fichier, dans la langue choisie ; il n’y a ni résumé séparé ni instructions cachées. Il remplace les prompts séparés de contrat, premier incrément, parallélisme et stabilisation. L’application reste le CRUD existant : aucune bibliothèque à réaliser avant de démarrer.

Le Mayor lit `docs/use-cases/README.md` et choisit exactement deux des cinq use cases listés, sans en inventer d’autres. Le plan cite leurs intitulés exacts et propose pour chacun un périmètre indépendant, les résultats visibles, les dépendances, les fichiers partagés et les checks. Le Mayor adapte le choix et le périmètre au minimum démontrable en 15 minutes, plutôt que de viser deux use cases exhaustifs. Relire le plan et vérifier l’appartenance à la liste, le temps et l’absence de fonctionnalité préalable imposée. Les choix peuvent différer entre les binômes. Envoyer ensuite dans le Mayor :

```text
GO
```

Le prompt vise moins de quinze minutes d’exécution : réduction de scope à huit minutes si nécessaire, stabilisation à douze minutes. La navigation et l’observation ont lieu pendant ce travail. Dès le bilan reçu, passer à la suite sans prolonger le monitoring. Il n’y a pas de marge séparée : les dix minutes de questions-réponses absorbent les petits décalages.

### Observer les sessions, sans piloter les workers

1. Dans la session du Mayor, `Ctrl+b Ctrl+b s` ouvre la liste des sessions Gas Town. Sélectionner une session Polecat lorsqu’elle apparaît et observer son activité sans lui saisir d’instructions.
2. `Ctrl+b Ctrl+b d` détache la session Gas Town et revient au shell Taxiway.
3. Les commandes GT et beads ci-dessous se lancent dans ce shell, jamais dans le prompt de l’agent.
4. `gt mayor attach` permet de retrouver le Mayor et ses rapports.
5. Depuis le tmux Taxiway, `Ctrl+b s` liste les sessions Taxiway ; `Ctrl+b d` revient à la machine hôte.

Pour chaque préfixe, appuyer sur Ctrl+b puis relâcher ; le répéter pour le tmux imbriqué, puis taper la commande s ou d. Réutiliser la fiche tmux du deck.

### Commandes d’observation à disposition des binômes

La slide 23 commence par le GO dans la session du Mayor, puis propose d’observer les agents avec `Ctrl+b Ctrl+b s` pour choisir une session et valider avec Entrée. Le Mayor présente le bilan, un Polecat montre l’implémentation et les tests, le Witness surveille les Polecats, la Refinery intègre les changements et le Deacon surveille la santé de Gas Town. Sur la slide 24, `Ctrl+b Ctrl+b d` permet de se détacher de la session Gas Town et de retrouver le shell Taxiway pour suivre la réalisation : état global et messages à gauche ; tâches, convoys et file d’intégration à droite. À tout moment, `gt mayor attach` permet de revenir aux agents, puis de choisir une session ; se détacher à nouveau permet de reprendre les commandes de suivi.

Chaque commande est copiée séparément. Remplacer les identifiants entre chevrons, chevrons compris, par ceux affichés.

```bash
gt status
gt mail inbox mayor/
bd list --all --flat
bd ready
bd show <bead_id>
gt convoy list --all
gt convoy status <convoy_id>
gt refinery queue agreement_hub
gt mayor attach
```

Repérer les Polecats créés, le travail prêt ou bloqué, la progression du convoy et la queue d’intégration. Les binômes échangent les rôles pendant l’observation. Ne pas forcer deux workers simultanés si le scope réel ne le permet pas.

Le Mayor fait un point **toutes les trois minutes ou en cas de blocage**, comme demandé dans le prompt initial : résultat fonctionnel, objets Gas Town, blocages et décision humaine éventuelle. Pas de nouveau prompt entre deux incréments. Consulter les états au fil du parcours, sans polling serré ni relance automatique de la Refinery. En cas de blocage, demander au facilitateur.

Dès le bilan final, arrêter l’observation et passer à la pause des agents et à l’arrêt de l’enregistrement.

## Lire le bilan, mettre en pause et arrêter l’enregistrement — slides 25–26

Lire le bilan du Mayor : fonctionnalités réalisées, vérifications effectuées et ce qui reste à faire. Conserver ce bilan pour le comparer au résultat observé lorsque l’agent testera l’application.

Le prompt de mission demande aussi au Mayor une branche et un SHA dans son bilan : ce sont des informations de traçabilité, pas des valeurs à recopier dans le prompt de vérification.

Après le bilan, utiliser `Ctrl+b Ctrl+b d` pour revenir dans le shell du lab, hors de la session du Mayor :

```bash
gt estop
```

Utiliser ensuite `Ctrl+b d` pour revenir sur la machine hôte et arrêter l’enregistrement :

```bash
taxiway record stop agile-en-seine
```

Conserver le bilan du Mayor et la référence de l’enregistrement pour la vérification et l’analyse. Le lab reste disponible : pas de `down` à cette étape et pas de récupération Git en double. Le fetch est réalisé une seule fois, lors de la mise à jour de la copie hôte ci-dessous.

`gt estop` exempte certaines sessions et ne garantit pas l’arrêt de tous les appels ni un coût nul. Ne pas confondre pause du travail, arrêt du record et arrêt du lab.

## Mettre à jour l’application et vérifier avec l’agent — slides 27–28

Dans la copie locale sur la machine hôte :

```bash
cd ~/agreement-hub
git fetch
git rebase
```

Réutiliser les terminaux backend et frontend conservés depuis le lancement de l’application. Si une erreur apparaît dans l’un de ces terminaux, arrêter le serveur concerné avec Ctrl+C, puis exécuter dans son terminal, déjà placé dans le bon dossier :

```bash
npm install
npm run dev
```

Si tout fonctionne, laisser les serveurs tourner. Si l’erreur persiste ou en cas de conflit de rebase, demander de l’aide sans forcer. Ouvrir l’application avec le bouton « Ouvrir l’app » de la slide 27 pour voir le résultat. Le checkpoint « Application à jour » confirme que les changements sont récupérés et que l’application est accessible, sans prétendre que les fonctionnalités ont déjà été vérifiées.

Reprendre la session Claude Code utilisée pour créer les contrats et envoyer le [prompt de vérification](../../public/prompts/workshop-verify.fr.txt) ([anglais](../../public/prompts/workshop-verify.en.txt)). Aucun SHA ni plan à renseigner : l’agent utilise l’historique Git et le code pour identifier les fonctionnalités ajoutées, puis les teste via agent-browser en mode visible. Il réutilise la fenêtre et l’onglet de création des contrats, préserve les données existantes et ne modifie pas le code.

Les binômes suivent les actions dans le navigateur ; il n’y a pas de tests manuels en parallèle. Lire le compte rendu : fonctionnalités identifiées, scénarios exécutés, résultats et éventuels blocages. Ce qui n’a pas été testé reste non vérifié.

## Analyser le déroulement et consulter Langfuse — slide 29

Sur la machine hôte, ouvrir l’analyse interactive du dernier enregistrement avec Claude Code :

```bash
taxiway record analyse agile-en-seine \
  --interactive --runner claude-code \
  --language fr
```

La commande affichée et copiée adapte automatiquement `--language` à la langue active de la présentation : `fr` ou `en`. Taxiway prépare le contexte et lance l’agent en mode interactif : poser des questions pour approfondir l’analyse et comprendre ce qui s’est passé. Cette commande analyse l’enregistrement ; les traces Langfuse se consultent séparément.

Ouvrir [Langfuse](http://langfuse.localhost:4000), sélectionner le projet du lab et consulter les traces et le coût des appels. Revenir à cet onglet pendant la première question sur le coût, si utile. La slide Merci reste celle d’origine, sans lien ajouté. Il n’y a ni slide dédiée aux coûts, ni comparaison entre tableaux de bord.

Marquer la fin de la pratique avec la slide 30 « Bravo ! — Vous avez piloté votre premier lab Gas Town ». Reprendre les trois gestes : exprimer le besoin au Mayor et valider son plan, observer les agents, vérifier le résultat et analyser le déroulement. Valoriser le parcours de chaque binôme sans garantir que tous ont livré deux fonctionnalités. Ne pas lancer de tour de table supplémentaire.

Faire la transition vers les formulas à l’oral : « Comment rendre ce fonctionnement réutilisable ? » Cette ouverture ne figure pas dans le contenu affiché. La clôture s’inscrit dans le créneau d’analyse et de transition existant ; elle n’ajoute pas de durée au conducteur.

Poursuivre avec les formulas (31), la synthèse « Ce que Gas Town change » (32), puis les questions-réponses sur la slide Merci d’origine (33). Terminer par TingEvent (34) pour recueillir les avis. Les durées des séquences restent dans le conducteur ; seuls les repères d’exécution du prompt Mayor et ses rapports réguliers restent indiqués dans les slides 22 et 23.

## Préparation des facilitateurs

Cette liste concerne la préparation de l’animation, pas des étapes supplémentaires à faire exécuter aux participants. La revue du support ne valide pas le fonctionnement réel du lab.

- [ ] Répéter l’installation à froid sur macOS, Linux et Windows 11/WSL2 : prérequis Taxiway, Git, Node.js/npm, Claude Code, agent-browser, navigateur visible et authentifications.
- [ ] Vérifier la création et le diagnostic du lab avec les versions affichées, puis l’ouverture du Mayor et les raccourcis tmux.
- [ ] Vérifier le chemin du dépôt bare local, le nom du rig `agreement_hub`, le contexte des commandes `bd` depuis le shell Taxiway et le lancement backend/frontend sur un clone neuf.
- [ ] Répéter la sélection de deux use cases parmi les cinq documentés, vérifier leurs numéros et noms dans le plan, le GO unique et les rapports réguliers, sans fonctionnalité préalable imposée.
- [ ] Vérifier que les changements intégrés sont récupérables par `git fetch` puis `git rebase`, que les contrats locaux sont conservés et que l’application redémarre si nécessaire.
- [ ] Vérifier la création des douze contrats puis la reprise de la même session Claude Code et du même navigateur pour tester les fonctionnalités livrées.
- [ ] Vérifier l’enregistrement, sa fin après `gt estop` et l’analyse interactive avec `--runner claude-code`. Confirmer le comportement de pause sans le confondre avec un arrêt du lab.
- [ ] Vérifier les accès à Langfuse et l’ouverture du projet du lab pour consulter les traces et les coûts.
- [ ] Préparer l’accompagnement des blocages avec le second facilitateur, le réseau de l’événement et une solution de secours. Dimensionner dix labs plus celui du présentateur et prévoir le budget des sessions du lab comme de celles sur l’hôte.
- [ ] Vérifier les versions FR/EN, les prompts réellement copiés, les liens, les exports et le QR code public : `https://manufacture.dev/gastown-presentations/agile-en-seine-2026/#/1`.

Repères de répétition, conformes au tableau : setup terminé à 00:40, application ouverte à 00:45, données à 00:50, GO à 00:55, bilan autour de 01:10, record terminé à 01:15, vérification à 01:25, analyse à 01:30 et questions à 01:35. Aucune marge séparée des dix minutes de questions-réponses. Le créneau 00:50–00:55 inclut aussi l’enregistrement et l’explication de tmux : sa faisabilité doit être vérifiée en répétition.

Aux checkpoints, vert signifie résultat atteint, jaune en cours/incertain et rouge aide nécessaire. Le présentateur montre son résultat, puis demande le signal ; aucun tour de table ni restitution des dix binômes. Une fonctionnalité intégrée, un travail encore dans la chaîne d'intégration ou un blocage expliqué constituent des résultats pédagogiques distincts. Le support doit toujours annoncer ce qui a été effectivement vérifié.

## Après l’atelier : arrêt facultatif du lab

Une fois la vérification terminée et les éléments utiles à l’analyse conservés, le binôme peut arrêter son lab depuis la machine hôte :

```bash
taxiway down agile-en-seine
```

Cet arrêt conserve l’état du lab. Il n’est pas demandé pendant la phase de vérification ; ne pas utiliser `destroy` ni arrêter les services globaux.
