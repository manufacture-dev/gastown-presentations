# DiliTrust TechDay

Ce document décrit la cinématique complète de la présentation DiliTrust TechDay: les slides portent le récit, Gas Town travaille en arrière-plan, et Agreement Hub sert de preuve produit.

Le but est de rendre la démonstration filmable, répétable et cohérente avec le deck: une présentation sur l'organisation du delivery AI-native, pas une simple session de coding assistée.

## Intention générale

La démonstration doit prouver une bascule de posture:

- on ne demande pas à un agent unique de coder une petite tâche;
- on donne une intention produit au Mayor;
- Gas Town transforme cette intention en beads, dépendances, convoys et travail distribué;
- des Polecats exécutent en parallèle dans des contextes isolés;
- Witness, Refinery et Deacon rendent l'exécution observable;
- la preuve finale se fait sur le repository livré et dans Agreement Hub.

Le présentateur garde le contrôle du mandat, du périmètre de démo et des décisions à risque. Il ne pilote pas manuellement chaque worker, chaque branche ou chaque merge.

## Principe de pilotage

À partir du lancement de la slide 6, le comportement attendu est:

1. donner le mandat complet au Mayor;
2. attendre le plan;
3. donner un `GO` explicite;
4. laisser Gas Town créer les beads, convoys, assignments et merges;
5. revenir régulièrement observer l'état du système;
6. n'interrompre que pour les décisions qui changent réellement le périmètre.

Décisions que le Mayor doit prendre seul:

- architecture ordinaire;
- nommage;
- fichiers;
- composants UI;
- séquencement courant;
- ownership des beads;
- ordre de merge raisonnable;
- récupération standard après conflit.

Décisions qui peuvent être renvoyées à l'humain:

- changement de scope de démo;
- dépendance externe nouvelle;
- risque de perte de travail;
- coût ou durée fortement supérieur;
- conflit non récupérable;
- arbitrage produit visible par l'audience.

Point impératif: l'application finale doit rester démontrable sans accès LLM. Les fonctionnalités AI doivent donc inclure un mode mock/offline ou un comportement équivalent.

## Fichiers sources

Prompt de lancement officiel pour ce talk:

Pendant la démo, le prompt doit être récupéré depuis le deck avec le bouton "Copier le prompt" / "Copy prompt". Le deck est la référence pratique à utiliser en live.

Les fichiers source correspondants sont:

```text
public/prompts/gastown-demo-prompt.all-use-cases.fr.txt
public/prompts/gastown-demo-prompt.all-use-cases.en.txt
```

Ces fichiers correspondent au prompt `all-use-cases` déclaré dans `talks/dilitrust-techday.json`. Ne pas maintenir une copie divergente dans ce scénario.

Deck:

```text
slides.md
```

Application cible:

```text
https://github.com/manufacture-dev/agreement-hub
```

Application locale:

```text
http://localhost:5173/
```

## Structure narrative

La vidéo suit trois mouvements.

### Mouvement 1 - Pourquoi Gas Town existe

Slides 1 à 5. On installe le problème:

- l'AI coding a évolué de l'assistance individuelle vers des systèmes de delivery;
- le single-agent ne suffit plus quand le travail devient distribué;
- Gas Town introduit un modèle d'organisation: Town, Mayor, Rigs, Beads, Convoys, Polecats, Witness, Refinery.

Il n'y a pas encore de démonstration active. La vidéo doit rester sur le deck, avec éventuellement un court plan de l'environnement prêt.

### Mouvement 2 - Lancer le système puis observer

Slides 6 à 13. C'est le coeur de la cinématique:

- Agreement Hub est montré comme baseline;
- le Mayor reçoit le mandat complet;
- Gas Town produit un plan;
- les beads et convoys matérialisent le travail;
- les Polecats exécutent;
- Witness, Refinery et Deacon rendent l'exécution supervisable.

Le deck explique le concept, le terminal prouve que le concept existe dans le système.

### Mouvement 3 - Prouver, généraliser, conclure

Slides 14 à 17. On quitte la fascination pour les agents et on revient au delivery:

- repository livré;
- Agreement Hub local;
- use cases présents ou explicitement différés;
- formules comme playbooks réutilisables;
- synthèse des cinq problèmes du single-agent;
- coût et questions.

La preuve finale n'est pas une belle sortie terminal. La preuve finale est l'état livré.

## Conducteur 45 minutes

| Temps | Slides | Séquence | Présentation slides | Démo | Total | Preuve / action à l'écran |
|---:|---:|---|---:|---:|---:|---|
| 0-2 min | 1-2 | Ouverture | 2 min | - | 2 min | Deck uniquement. Cadrer le sujet: organiser le delivery AI-native, pas seulement coder plus vite. |
| 2-6 min | 3-4 | Évolution AI coding | 4 min | - | 4 min | Deck uniquement. Installer le passage assistant individuel -> système de delivery. |
| 6-9 min | 5 | Modèle Gas Town | 3 min | - | 3 min | Deck uniquement. Introduire Town, Mayor, Rig, Beads, Convoys, Polecats, Witness, Refinery. |
| 9-16 min | 6 | Baseline + mandat Mayor | 1 min | 6 min | 7 min | Montrer Agreement Hub, lancer `gt mayor attach`, copier le prompt depuis le bouton du deck, le coller au Mayor, laisser le Mayor présenter le plan, puis donner `GO`. |
| 16-18 min | 7 | Pourquoi le single-agent casse | 2 min | - | 2 min | Deck pendant que Gas Town démarre. Revue rapide des cinq limites: contexte, séquentiel, coordination, merge, supervision. |
| 18-22 min | 8 | Gas Town organise le travail | 1 min | 3 min | 4 min | Observer le Mayor, `gt convoy list --all`, `bd list --all --flat`, `bd ready`, `gt refinery queue agreement_hub`. |
| 22-25 min | 9 | Organisation | 3 min | - | 3 min | Deck principalement. Option rapide: `gt status` si utile pour relier rôles et système réel. |
| 25-28 min | 10 | Beads | 1 min | 2 min | 3 min | Montrer `bd list --all --flat`, `bd ready`, `bd show <bead_id>`, et la queue Refinery si un merge existe. |
| 28-31 min | 11 | Convoys | 1 min | 2 min | 3 min | Montrer `gt convoy list --all` puis `gt convoy status <convoy_id>` sur les streams actifs ou terminés. |
| 31-35 min | 12 | Polecats | 1 min | 3 min | 4 min | Montrer `gt status`, beads actifs, convoys, branches ou merge queue. Observer le parallélisme choisi par Gas Town. |
| 35-38 min | 13 | Supervision | 2 min | 1 min | 3 min | Montrer Deacon, Witness, Refinery, `gt dolt status`, et lancer la patrol si le timing le permet. |
| 38-42 min | 14 | Vérification Agreement Hub | 1 min | 3 min | 4 min | Demander le recap final, inspecter git/beads/convoys, ouvrir Agreement Hub et vérifier les use cases livrés. |
| 42-43 min | 15 | Formulas | 1 min | - | 1 min | Deck. Mentionner `mol-idea-to-plan`; ouvrir le lien seulement s'il est déjà prêt. |
| 43-44 min | 16 | Synthèse | 1 min | - | 1 min | Deck uniquement. Reboucler les cinq problèmes single-agent avec les réponses Gas Town. |
| 44-45 min | 17 | Questions + coût + arrêt | - | 1 min | 1 min | Montrer `gt cost` si disponible, puis arrêter le lab avec `gt estop -r "lab done"` après la capture finale. |

## Préparation avant le talk

Cette partie peut être capturée rapidement au début de la vidéo ou réalisée hors caméra selon le rythme voulu.

### 1. Vérifier Taxiway et le lab

```bash
taxiway list
```

Si le lab doit être recréé:

```bash
taxiway up live-dilitrust \
  --type gastown \
  --set version=1.1.0 \
  --set beads-version=1.0.3 \
  --set model=claude-opus-4-8 \
  --repo https://github.com/manufacture-dev/agreement-hub.git
```

Note sur le repository:

Quand un repository est passé à `taxiway up --repo`, Taxiway utilise GitHub comme source initiale puis crée une copie bare locale qui devient le remote de travail du lab. Cela évite de polluer GitHub avec des forks ou branches de démo, réduit la dépendance aux opérations réseau après le provisionnement initial, et garde l'exécution isolée et jetable.

À montrer seulement si utile:

- création du lab;
- installation `gt`, `bd`, `dolt`, `claude`;
- fork du repository Agreement Hub;
- initialisation du Town;
- création du rig `agreement_hub`;
- démarrage Mayor, Deacon, Witness, Refinery, Crew.

Texte oral FR:

> Nous partons d'un repository Agreement Hub propre. Taxiway provisionne le lab Gas Town, attache le vrai code applicatif, et démarre les rôles opérationnels qui vont coordonner, exécuter, superviser et merger le travail.

Texte oral EN:

> We start from a clean Agreement Hub repository. Taxiway provisions the Gas Town lab, attaches the real codebase, and starts the operating roles that will coordinate, execute, supervise and merge work.

### 2. Vérifier la santé

```bash
taxiway doctor live-dilitrust
taxiway doctor live-dilitrust --fix
taxiway doctor live-dilitrust
```

Signal attendu:

- `0 failed`;
- warnings non bloquants acceptables;
- drift corrigé si nécessaire.

Texte oral FR:

> Avant de demander aux agents de travailler, nous vérifions l'environnement opérationnel. Le signal important est que le système est suffisamment sain pour lancer du delivery distribué.

Texte oral EN:

> Before asking agents to work, we verify the operating environment. The important signal is that the system is healthy enough to run distributed delivery.

### 3. Entrer dans Gas Town

```bash
taxiway shell live-dilitrust
gt status
```

### 4. Stabiliser le Town et le rig Agreement Hub

Cette étape reste manuelle tant que Taxiway ne couvre pas encore toute la préparation du rig, notamment la partie Docker sur `agreement_hub`.

```bash
gt status
gt doctor
gt doctor --fix
gt doctor --rig agreement_hub
gt doctor --rig agreement_hub --fix
gt doctor
gt doctor --fix
gt doctor --rig agreement_hub
```

À montrer:

- Town actif;
- Mayor et Deacon;
- rig `agreement_hub`;
- Witness et Refinery;
- Crew;
- polecats éventuels.
- doctor Town sans échec bloquant;
- doctor rig `agreement_hub` sans échec bloquant;
- corrections automatiques appliquées si nécessaire.

Texte oral FR:

> À ce stade, Gas Town est lancé. Le Town coordonne, le rig Agreement Hub est attaché au repository, et nous faisons les derniers contrôles Town et rig manuellement parce que cette partie n'est pas encore entièrement couverte par Taxiway.

Texte oral EN:

> At this point, Gas Town is running. The Town coordinates, the Agreement Hub rig is attached to the repository, and we run the remaining Town and rig checks manually because this part is not fully covered by Taxiway yet.

### 5. Vérifier les sessions agents

Avant de démarrer la scène 1, se connecter aux sessions agents et vérifier qu'elles se sont bien lancées. Cette vérification est particulièrement importante pour Boot et Deacon, car ils donnent le premier signal de santé du Town.

À vérifier:

- Boot est présent et répond;
- Deacon est lancé et peut donner l'état système;
- Mayor est attachable;
- Witness et Refinery sont lancés côté rig;
- aucune session attendue n'est absente, bloquée au démarrage ou en erreur visible.

Texte oral FR:

> Avant de démarrer la présentation, nous inspectons aussi directement les sessions agents live. Boot et Deacon donnent les premiers signaux de santé; s'ils ne démarrent pas proprement, le reste de la démo sera plus difficile à faire confiance.

Texte oral EN:

> Before starting the presentation, we also inspect the live agent sessions directly. Boot and Deacon are the first health signals; if they did not start cleanly, the rest of the demo will be harder to trust.

## Scène 1 - Slides 1-2: ouvrir sur le modèle

Objectif: éviter de présenter Gas Town comme un outil de plus.

Image:

- title slide;
- speaker slide.

Texte oral FR:

> Le sujet aujourd'hui n'est pas simplement de coder plus vite avec l'IA. La question est ce qui se passe quand des workers IA deviennent une partie du système de delivery logiciel. Comment organise-t-on le travail, la supervision, l'intégration et la preuve?

> Je suis coach Orga et Tech. J'interviens sur tout le flux de delivery, que ce soit sur les sujets d'orga ou de pratiques. Aujourd'hui, c'est surtout autour des pratiques AI-native.

Texte oral EN:

> The topic today is not simply coding faster with AI. The question is what happens when AI workers become part of the software delivery system. How do we organize work, supervision, integration and proof?

> I am an organization and tech coach. I work across the whole delivery flow, both on organization topics and engineering practices. Today, the focus is mostly AI-native practices.

À ne pas faire:

- ne pas lancer le terminal trop tôt;
- ne pas détailler la stack Agreement Hub;
- ne pas présenter Gas Town comme une démo CLI.

## Scène 2 - Slides 3-4: de l'assistant au système

Objectif: installer la progression des pratiques AI coding.

Image:

- slide des 8 stages;
- slide Steve Yegge / Vibe Coding / Gas Town / Beads.

Texte oral FR:

> Les premiers usages d'AI coding améliorent le flux individuel. Ensuite, les agents CLI augmentent le throughput. Mais dès qu'on a beaucoup d'agents et de vrais repositories, le problème n'est plus seulement la génération. Le problème devient la coordination.

Texte oral EN:

> Early AI coding improves individual flow. Then CLI agents increase throughput. But once we have many agents and real repositories, the problem is no longer only generation. The problem becomes coordination.

Transition FR:

> Gas Town apparaît au moment où piloter des agents à la main ne passe plus à l'échelle.

Transition EN:

> Gas Town appears at the moment where hand-managing agents stops scaling.

## Scène 3 - Slide 5: modèle mental Gas Town

Objectif: donner le vocabulaire avant le live.

Image:

- Town;
- Mayor;
- Rig;
- Beads;
- Convoys;
- Polecats;
- Witness;
- Refinery.

Texte oral FR:

> Pensez à Gas Town comme à un modèle opérationnel. Le Mayor coordonne. Les beads rendent le travail adressable. Les convoys suivent les streams de delivery. Les Polecats exécutent du travail borné. Witness et Refinery rendent l'exécution et l'intégration observables.

Texte oral EN:

> Think of Gas Town as an operating model. The Mayor coordinates. Beads make work addressable. Convoys track delivery streams. Polecats execute scoped work. Witness and Refinery make execution and integration observable.

Transition FR:

> Maintenant, il nous faut une vraie cible. Pas une fonction jouet. Une petite application CLM, mais réaliste.

Transition EN:

> Now we need a real target. Not a toy function. A small but realistic CLM application.

## Scène 4 - Slide 6: Agreement Hub baseline puis mandat Mayor

Temps cible: 7 minutes.

Objectif: montrer l'état initial, puis lancer l'exécution autonome.

### Plan écran

1. Ouvrir Agreement Hub:

```text
http://localhost:5173/
```

2. Montrer:

- liste des contrats;
- fiche contrat ou formulaire;
- état initial avant intervention Gas Town.

3. Basculer vers Gas Town.
4. Attacher le Mayor:

```bash
gt mayor attach
```

5. Coller le contenu de:

```text
le bouton "Copier le prompt" / "Copy prompt" du deck
```

6. Laisser le Mayor lire, inspecter et proposer son plan.
7. Donner `GO` seulement après le plan.

### Texte oral FR

> Voici le point de départ. Agreement Hub est une application réaliste de contract lifecycle management: frontend React/Vite, backend Express/TypeScript, base SQLite. Nous n'allons pas piloter un agent étape par étape. Nous allons donner à Gas Town l'intention produit, les règles de delivery, le contrat de supervision, puis le laisser organiser le travail.

Après le prompt:

> À partir de maintenant, la posture importante est la supervision. Je ne vais pas décider manuellement chaque worker, chaque branche ou chaque merge. Gas Town doit planifier, dispatcher, monitorer, récupérer et reporter.

### Texte oral EN

> This is the starting point. Agreement Hub is a realistic contract lifecycle application: React/Vite frontend, Express/TypeScript backend, SQLite database. We are not going to drive one agent step by step. We are going to give Gas Town the product intent, the delivery rules, the supervision contract, and then let it organize the work.

Après le prompt:

> From now on, the important posture is supervision. I will not manually decide every worker, every branch, or every merge. Gas Town must plan, dispatch, monitor, recover and report.

### Signal attendu

Le Mayor doit produire:

- use cases trouvés;
- décisions de scope et d'architecture;
- graphe de dépendances;
- beads proposés;
- convoys produits;
- ordre d'exécution et de merge;
- risques de conflit;
- plan mock/offline;
- plan de vérification.

### Commandes de contrôle rapide

```bash
gt convoy list --all
gt status
bd ready
bd list --all --flat
gt refinery queue agreement_hub
```

## Scène 5 - Slide 7: single-agent workflows break

Temps cible: 2 minutes.

Objectif: pendant que Gas Town planifie, expliquer pourquoi le modèle single-agent ne suffit pas.

Image:

- les cinq limites: contexte, séquentiel, coordination, merge, supervision.

Texte oral FR:

> Un agent unique peut être excellent localement et quand même échouer comme système de delivery. Il a un seul contexte, un seul fil d'exécution, une seule branche et une visibilité opérationnelle limitée. Le goulot d'étranglement se déplace de l'écriture du code vers la coordination du delivery.

Texte oral EN:

> A single agent can be excellent locally and still fail as a delivery system. It has one context, one thread of execution, one branch, and limited operational visibility. The bottleneck moves from writing code to coordinating delivery.

À l'écran:

- rester sur le deck;
- ne pas interrompre le Mayor sauf s'il demande une décision relevant du périmètre.

## Scène 6 - Slide 8: Gas Town organise le travail

Temps cible: 4 minutes.

Objectif: montrer la transformation intention -> objets de delivery.

### Plan écran

Revenir au terminal.

Commandes utiles:

```bash
gt mayor attach
gt convoy list --all
bd list --all --flat
bd ready
gt refinery queue agreement_hub
gt mail inbox
```

Si besoin, inspecter un bead de fondation:

```bash
bd show <phase0_bead_id>
```

### À montrer

- résumé du contexte par le Mayor;
- graphe de dépendances;
- distinction fondation / use cases;
- convoys créés;
- premiers beads ready ou bloqués;
- éventuelle merge queue.

### Texte oral FR

> Le Mayor n'agit pas comme un développeur ici. Il agit comme couche de coordination. Il lit le contexte, identifie les dépendances, crée les objets de delivery, et décide ce qui peut démarrer maintenant par rapport à ce qui doit attendre.

### Texte oral EN

> The Mayor is not acting as a coder here. It is acting as the coordination layer. It reads context, identifies dependencies, creates delivery objects, and decides what can run now versus what must wait.

### Si le système est silencieux

Utiliser seulement ce prompt court:

```text
Give me a state-of-your-eyes update now: what is active, what is merged, what is pending in Refinery, what is blocked, and whether you need a human decision.
```

## Scène 7 - Slide 9: organisation

Temps cible: 3 minutes.

Objectif: relier les rôles du schéma à ce qui vient d'être observé.

Image:

- Town;
- Overseer;
- Mayor;
- Deacon;
- Rig;
- Crew;
- Polecats;
- Witness;
- Refinery.

Option terminal:

```bash
gt status
```

Texte oral FR:

> La séparation importante est celle-ci: le Mayor coordonne le travail, les Polecats exécutent des tâches bornées, Witness observe l'exécution, et Refinery gère la convergence. C'est cette séparation qui empêche le parallélisme de devenir un chaos incontrôlé.

Texte oral EN:

> The important separation is this: the Mayor coordinates work, Polecats execute scoped tasks, Witness observes execution, and Refinery manages convergence. That separation is what prevents parallelism from becoming uncontrolled chaos.

## Scène 8 - Slide 10: Beads

Temps cible: 3 minutes.

Objectif: prouver que le plan est devenu un backlog exécutable.

### Plan écran

```bash
bd list --all --flat
bd ready
bd show <bead_id>
gt status
gt refinery queue agreement_hub
```

### À montrer

- beads de fondation;
- beads par use case;
- dépendances;
- ready vs blocked;
- owner ou hook actif;
- statut closed si un worker a déjà terminé;
- merge artifact si disponible.

### Texte oral FR

> Les beads sont le registre du travail. Ils rendent explicites les dépendances, l'ownership, la readiness et les blocages. `bd ready` n'est pas une instruction de dispatch manuel; c'est l'ensemble visible du travail qui peut démarrer sans risque maintenant.

### Texte oral EN

> Beads are the work ledger. They make dependencies, ownership, readiness and blocking explicit. `bd ready` is not a manual dispatch instruction; it is the visible set of work that can safely start now.

### Explication courte de `bd ready`

Si nécessaire:

```text
What does bd ready do?
```

Réponse attendue:

- montre les tâches ouvertes;
- exclut les tâches bloquées;
- dépend du graphe créé;
- sert à observer la readiness.

## Scène 9 - Slide 11: Convoys

Temps cible: 3 minutes.

Objectif: montrer que les use cases sont suivis comme des streams de delivery.

### Plan écran

```bash
gt convoy list --all
gt convoy status <convoy_id>
```

### À montrer

- convoy Fondation;
- convoy Clause Library;
- convoy Approval Workflow;
- convoy Clause Generator;
- convoy Risk Reviewer;
- convoy Search / Intelligence;
- beads suivis par chaque convoy;
- statut actif, terminé ou bloqué.

### Texte oral FR

> Un convoy est le stream de delivery. Il donne à l'organisation un point de suivi partagé pour du travail distribué. Le convoy n'est terminé que lorsque les beads produit qu'il suit sont mergés et vérifiés sur la delivery branch.

### Texte oral EN

> A convoy is the delivery stream. It gives the organization a shared handle for distributed work. The convoy is complete only when its tracked product beads are merged and verified on the delivery branch.

À rappeler:

- un convoy n'est pas une tâche d'implémentation;
- il ne doit pas contenir les patrols, notifications ou résidus de workflow;
- le delivery branch est la source de vérité.

## Scène 10 - Slide 12: Polecats

Temps cible: 4 minutes.

Objectif: faire apparaître le throughput réel.

### Plan écran

```bash
gt status
gt convoy list --all
bd list --all --flat
bd ready
gt refinery queue agreement_hub
gt mail inbox
```

### À montrer

- plusieurs Polecats actifs si le système a choisi le parallèle;
- assignment par bead;
- branches ou worktrees isolés;
- merge wisps ou queue Refinery;
- conflit éventuel préservé et nommé;
- décision humaine uniquement si nécessaire.

### Texte oral FR

> C'est ici que l'organisation compte. Le point intéressant n'est pas d'avoir beaucoup de terminaux ouverts. Le point intéressant est que Gas Town décide ce qui peut tourner en parallèle, ce qui doit attendre, ce qui peut merger, et ce qui doit être escaladé.

### Texte oral EN

> This is where the organization matters. The interesting part is not that many terminals are open. The interesting part is that Gas Town decides what can run in parallel, what must wait, what can merge, and what needs escalation.

### Si le parallèle n'apparaît pas

Ne pas forcer artificiellement.

Texte oral alternatif FR:

> Le throughput n'est pas seulement le nombre d'agents actifs. Parfois, la bonne décision système est de stabiliser le travail de fondation avant d'ouvrir davantage de branches. Le point important est que cette décision est visible.

Texte oral alternatif EN:

> Throughput is not just the number of active agents. Sometimes the right system decision is to stabilize foundation work before opening more branches. The point is that this decision is visible.

## Scène 11 - Slide 13: supervision

Temps cible: 3 minutes.

Objectif: montrer le contrôle opérationnel.

### Plan écran

Depuis Deacon ou une session système:

```text
Give me the current system status.
```

Puis si le temps le permet:

```text
Launch the patrol.
```

Commandes utiles:

```bash
gt status
gt witness status agreement_hub
gt refinery status agreement_hub
gt dolt status
```

### À montrer

- Deacon running;
- Witness running;
- Refinery running;
- no zombies;
- no orphaned processes;
- Dolt healthy;
- patrol completed si disponible.

### Texte oral FR

> La supervision est une partie de premier ordre du modèle. Deacon surveille la santé du Town, Witness surveille l'exécution, et Refinery surveille la convergence. L'exécution distribuée ne fonctionne que si le travail bloqué et la pression d'intégration sont visibles.

### Texte oral EN

> Supervision is a first-class part of the model. Deacon watches town health, Witness watches execution, and Refinery watches convergence. Distributed execution only works if stuck work and integration pressure are visible.

## Scène 12 - Slide 14: vérification Agreement Hub

Temps cible: 4 minutes.

Objectif: revenir au produit livré.

### Plan écran

1. Demander le recap final si la boucle est terminée:

```text
Give me a final delivery recap: bead, use case, status, polecat, merge wisp when available, shipped state, pending state, preserved branches, and total timeline.
```

2. Vérifier le repository:

```bash
git log --oneline -10
bd list --all --flat
gt convoy list --all
gt refinery queue agreement_hub
```

3. Lancer ou ouvrir Agreement Hub:

```bash
npm run dev
```

Puis:

```text
http://localhost:5173/
```

### À montrer

- état livré sur le delivery branch;
- use cases présents dans l'app;
- use cases explicitement différés si tout n'a pas livré;
- comparaison avec la baseline;
- backend/frontend checks si disponibles;
- branches préservées si conflit;
- workflow residue séparé du product work.

### Texte oral FR

> La preuve du delivery n'est pas un terminal vert. La preuve du delivery est l'état du repository et l'application. Les beads nous disent ce qui est fermé. L'application nous dit ce qui a changé pour l'utilisateur.

### Texte oral EN

> The delivery proof is not a green terminal. The delivery proof is the repository state and the application. Beads tell us what closed. The app tells us what changed for the user.

### Checkpoints produit

À cocher selon le résultat réel:

- Clause Generator;
- Risk Reviewer;
- Approval Workflow;
- Search & Intelligence;
- Clause Library;
- mock/offline demo mode.

Ne jamais annoncer livré un use case qui n'est pas vérifié sur le delivery branch.

## Scène 13 - Slide 15: formulas

Temps cible: 1 minute.

Objectif: passer du cas live au playbook réutilisable.

Image:

- slide `mol-idea-to-plan`;
- lien GitHub si déjà prêt.

Lien:

```text
https://github.com/gastownhall/gastown/blob/v1.1.0/internal/formula/formulas/mol-idea-to-plan.formula.toml
```

Texte oral FR:

> Une fois que le modèle opérationnel existe, les patterns répétés peuvent devenir des formulas. Une formula transforme une idée vague en étapes structurées, gates, revues parallèles, artifacts et finalement beads. C'est comme ça que l'orchestration devient répétable.

Texte oral EN:

> Once the operating model exists, repeated patterns can become formulas. A formula turns a vague idea into structured steps, gates, parallel reviews, artifacts and eventually beads. That is how orchestration becomes repeatable.

## Scène 14 - Slide 16: synthèse

Temps cible: 1 minute.

Objectif: refermer la boucle.

Image:

- les cinq problèmes single-agent;
- les cinq réponses Gas Town.

Texte oral FR:

> Nous sommes partis de cinq limites du delivery single-agent: saturation du contexte, exécution séquentielle, absence de couche de coordination, pression de merge, et absence de supervision opérationnelle. Gas Town répond avec les beads, les Polecats, le Mayor et les convoys, Refinery, Witness et Deacon.

Texte oral EN:

> We started with five limits of single-agent delivery: context saturation, sequential execution, no coordination layer, merge pressure, and no operational supervision. Gas Town answers with beads, Polecats, Mayor and convoys, Refinery, Witness and Deacon.

## Scène 15 - Slide 17: questions et coût

Temps cible: 1 minute.

Objectif: finir sur un signal opérationnel concret.

Commande:

```bash
gt cost
```

Arrêt du lab après la démo:

```bash
gt estop -r "lab done"
```

Texte oral FR:

> Le coût fait partie du modèle opérationnel. Si les agents IA deviennent une partie du delivery, nous avons besoin de visibilité sur le throughput, la supervision, l'intégration et la dépense.

Texte oral EN:

> Cost is part of the operating model. If AI agents become part of delivery, we need visibility on throughput, supervision, integration and spend.

Après les questions ou la capture finale FR:

> Nous arrêtons aussi explicitement le lab pour que l'environnement de démo ne continue pas à tourner en arrière-plan.

Après les questions ou la capture finale EN:

> We also stop the lab explicitly so the demo environment does not keep running in the background.

Si `gt cost` n'est pas disponible FR:

> Le même principe s'applique même si nous ne montrons pas la commande de coût en live: la dépense doit devenir un signal opérationnel, pas une surprise après la démo.

Si `gt cost` n'est pas disponible EN:

> The same principle applies even if we do not show the cost command live: spend must become an operational signal, not a surprise after the demo.

## Boucle d'observation pendant la présentation

Entre les scènes, le présentateur peut revenir au terminal uniquement pour observer.

État de ses yeux:

```text
Give me a state-of-your-eyes update now: what is active, what is merged, what is pending in Refinery, what is blocked, and whether you need a human decision.
```

Commandes fréquentes:

```bash
gt status
gt mayor attach
gt convoy list --all
bd list --all --flat
bd ready
gt mail inbox
gt refinery queue agreement_hub
```

Kit de suivi lab à garder sous le coude:

```bash
gt mayor attach
gt convoy list --all
bd list --all --flat
gt refinery queue agreement_hub
gt convoy status 1
gt convoy status 2
gt convoy status 3
gt convoy status 4
```

Utilisation:

- `gt mayor attach` pour reprendre le fil narratif du Mayor et demander un état si besoin;
- `gt convoy list --all` pour ne pas manquer les convoys terminés ou historiques;
- `bd list --all --flat` pour voir tous les beads sans perdre les fermés, bloqués ou résidus;
- `gt refinery queue agreement_hub` pour vérifier ce qui attend l'intégration;
- `gt convoy status <id>` pour inspecter un stream précis quand la liste indique un blocage ou une livraison.

Ce qu'il faut écouter:

- delivered branch commit;
- product convoys et beads suivis;
- active Polecats;
- submitted but not merged work;
- merge queue;
- blockers;
- recovery;
- workflow residue séparé du product work;
- décision nécessaire ou non.

## Gestion des cas réels

### Le Mayor demande trop de validations

Réponse:

```text
Continue autonomously using Gas Town's normal operating model. Do not wait for me to manually validate routine design, UI, architecture, naming, file ownership, sequencing, or implementation choices. Ask only for demo-scope, external dependency, data-loss, major cost/time, or unrecoverable conflict decisions.
```

### Le Mayor a oublié les updates

Réponse:

```text
Give me a state-of-your-eyes update now, then continue every minute.
```

### Un conflit apparaît

Ne pas masquer le conflit.

Texte oral FR:

> C'est exactement pour cela que le système a besoin de supervision et de Refinery. Le bon résultat n'est pas de faire comme si le travail parallèle mergeait toujours proprement. Le bon résultat est de préserver le travail utile, de marquer honnêtement les beads affectés, et de récupérer par rapport à la delivery branch.

Texte oral EN:

> This is exactly why the system needs supervision and Refinery. The right outcome is not to pretend parallel work always merges cleanly. The right outcome is to preserve useful work, mark the affected beads honestly, and recover against the delivery branch.

À vérifier:

- branche préservée;
- bead source rouvert ou bloqué;
- convoy non marqué complete;
- retry/rebase seulement si sûr;
- état final vérifié sur delivery branch.

### Un worker se bloque

Texte oral FR:

> Le travail bloqué est un état opérationnel, pas un échec à cacher. Witness et Deacon existent pour que le système puisse détecter, reporter et récupérer.

Texte oral EN:

> Stuck work is an operational state, not a failure to hide. Witness and Deacon exist so the system can detect, report and recover.

Prompt de reprise:

```text
Please verify the full system state, tell me why progress has stopped, and restart the work from the real current state.
```

À montrer:

```bash
gt status
gt witness status agreement_hub
gt mail inbox
```

### Tout n'est pas livré à temps

Ne pas surjouer.

Texte oral FR:

> L'état de delivery honnête compte plus que l'histoire de démo parfaite. Gas Town doit nous dire ce qui est shipped, ce qui est pending, ce qui est préservé, et quel risque reste.

Texte oral EN:

> The honest delivery state matters more than the perfect demo story. Gas Town should tell us what is shipped, what is pending, what is preserved, and what risk remains.

À montrer:

- shipped state;
- pending product work;
- workflow residue;
- preserved branches;
- verification evidence.

## Prompts courts

Prompt principal:

```text
Use the exact prompt copied from the deck button for the selected talk language.
```

GO:

```text
GO. Execute autonomously according to the plan and the delivery rules.
```

Update:

```text
Give me a state-of-your-eyes update now: what is active, what is merged, what is pending in Refinery, what is blocked, and whether you need a human decision.
```

Reprise si blocage:

```text
Please verify the full system state, tell me why progress has stopped, and restart the work from the real current state.
```

Recap final:

```text
Give me a final delivery recap: bead, use case, status, polecat, merge wisp when available, shipped state, pending state, preserved branches, and total timeline.
```

Arrêt du lab:

```bash
gt estop -r "lab done"
```

Supervision:

```text
Give me the current system status.
```

Patrol:

```text
Launch the patrol.
```

`bd ready`:

```text
What does bd ready do?
```

## Storyboard final à garder en tête

La cinématique doit tenir en une phrase:

Phrase FR:

> Nous partons d'une vraie application, nous donnons à Gas Town une intention produit, nous regardons le système la transformer en objets de delivery, nous supervisons l'exécution distribuée, puis nous vérifions le repository et l'application livrés.

Phrase EN:

> We start with a real app, give Gas Town product intent, watch the system turn it into delivery objects, supervise distributed execution, and verify the delivered repository and application.

Ordre des preuves:

1. baseline Agreement Hub;
2. mandat autonome Mayor;
3. plan et dépendances;
4. beads;
5. convoys;
6. polecats;
7. merge queue et recovery;
8. supervision;
9. app vérifiée;
10. formule;
11. synthèse;
12. coût.

Ce récit doit rester stable même si l'exécution réelle varie. Si Gas Town livre moins, plus, ou différemment que prévu, la vidéo doit montrer la vérité du système: ce qu'il a décidé, ce qu'il a livré, ce qu'il a bloqué, ce qu'il a récupéré, et ce qui reste à faire.
