# Dev With AI Live #4

Ce document décrit le scénario court pour Dev With AI Live #4, prévu le 12 juin 2026.

La démonstration est optimisée pour 30 minutes: peu de théorie, une navigation terminal resserrée, deux incréments produit maximum, et un focus fort sur les concepts Gas Town.

Tout le talk est en français. Les phrases ci-dessous sont donc uniquement en français.

## Intention générale

La démonstration doit prouver deux choses en peu de temps:

- Gas Town transforme une intention produit en travail distribué: beads, convoy, Polecats, review, Witness, Refinery, merge queue;
- une démo courte doit choisir des incréments indépendants et démontrables, pas chercher à couvrir tous les use cases Agreement Hub.

À côté de Gas Town, le lab expose aussi Langfuse. On l'utilise comme repère annexe pour visualiser rapidement les échanges LLM et le coût, sans en faire une partie du modèle Gas Town.

Le point narratif principal n'est plus seulement "plusieurs agents codent en parallèle". Le point principal est:

> Quand les agents deviennent une partie du delivery, il faut surtout une couche d'organisation: découpage, coordination, exécution, supervision et intégration.

## Règle de rythme

Le deck reste le fil conducteur. Les slides qui n'ont pas d'encadré violet `LiveSignal` se présentent comme des slides: elles posent le vocabulaire, le problème et le modèle mental.

Les bascules vers le terminal ou Agreement Hub se font quand la slide affiche un `LiveSignal`. À ce moment-là, la slide annonce ce qu'il faut observer, puis l'écran live donne la preuve.

Langfuse est un outil du lab, pas une partie de Gas Town. On le vérifie avant le talk et on peut le montrer très vite en fin de live pour matérialiser les échanges LLM et le coût, mais le fil de la présentation doit rester sur les concepts Gas Town.

Exception pratique: la slide 6 sert à copier le prompt et à le donner au Mayor. C'est le lancement du système, pas encore une séquence d'observation détaillée. L'observation live commence vraiment à la première slide `LiveSignal`.

Les slides montrent parfois le modèle complet avec tous les use cases Agreement Hub. Pour ce live de 30 minutes, il faut le dire clairement:

> La slide montre le modèle complet. En live, je réduis volontairement le périmètre: on ne cherche pas à livrer tous les use cases, on veut deux incréments démontrables et une exécution observable.

## Cadre de la présentation

- la démo dure 30 minutes;
- le prompt est `demo-15-min`;
- le périmètre produit doit rester limité à 2 incréments;
- Langfuse reste un outil d'observation du lab, montré brièvement;
- le coût peut être montré dans Langfuse, sans analyser toutes les traces ou sessions;
- le terminal sert à montrer les objets de delivery Gas Town;
- Agreement Hub sert à prouver les incréments livrés.

## Choix de scénario recommandé

Le meilleur scénario de 30 minutes est:

1. montrer Agreement Hub comme point de départ;
2. lancer le Mayor avec le prompt `demo-15-min`;
3. obtenir un plan court;
4. donner `GO`;
5. montrer deux incréments en parallèle:
   - `Contract Search & Filter`;
   - `AI Risk Reviewer (mock/offline)`;
6. suivre beads, convoy et merge queue dans le terminal;
7. jeter un coup d'oeil rapide à Langfuse pour les échanges et le coût;
8. conclure sur le produit livré et les concepts Gas Town.

Pourquoi ce choix:

- les deux incréments sont visibles rapidement dans l'application;
- ils ont peu de dépendances entre eux;
- ils montrent le parallélisme sans surcharger l'audience;
- le Risk Reviewer permet de parler du mode mock/offline;
- la recherche est compréhensible instantanément par tout le monde;
- Langfuse permet un aperçu rapide de l'activité LLM et du coût du lab.

À éviter pour cette durée:

- Approval Workflow;
- Clause Library;
- vraie intégration LLM dans Agreement Hub;
- recherche backend/SQL;
- finition UI;
- nettoyage des worktrees après la preuve finale;
- trop de détails sur Deacon/Witness/Refinery patrols.

## Conducteur 30 minutes

Le talk utilise la variante `short`: la slide `Formulas` n'est pas jouée. La synthèse `Ce que Gas Town change` est donc la slide 15, puis la slide de remerciement/questions termine le deck.

| Temps | Slides | Qui | Séquence | Deck | Démo | Preuve à l'écran |
|---:|---:|---|---|---:|---:|---|
| 0-1 min | 1-2 | Jean-Louis puis Emmanuel | Ouverture + intervenants | 1 min | - | Jean-Louis ouvre et se présente, puis passe la main à Emmanuel qui se présente. |
| 1-5 min | 3-5 | Emmanuel, puis Jean-Louis au takeaway | Évolution de la pratique vers Gas Town | 4 min | - | Emmanuel présente les 8 étapes, Steve Yegge, puis Gas Town. Jean-Louis reprend au takeaway et fait le lien vers la démo. |
| 5-10 min | 6 | Jean-Louis | Application de démo + prompt | 1 min | 4 min | Montrer l'app, copier le prompt depuis le deck, `gt mayor attach`, coller au Mayor, laisser le plan arriver. |
| 10-11 min | 7 | Emmanuel | Pourquoi le single-agent casse | 1 min | - | Deck pendant que le Mayor inspecte. Installer les cinq limites sans développer. |
| 11-14 min | 8 | Emmanuel, puis Jean-Louis au `LiveSignal` | Gas Town organise le travail | 1 min | 2 min | Emmanuel présente le modèle. Jean-Louis reprend au `LiveSignal`: plan Mayor, recadrage à 2 incréments, `GO`, premiers beads/convoy. |
| 14-16 min | 9 | Jean-Louis | `LiveSignal`: organisation | 1 min | 1 min | `gt status`. Rig, crew, Mayor, Witness, Refinery. |
| 16-18 min | 10 | Jean-Louis | `LiveSignal`: beads | 1 min | 1 min | `bd list --all --flat`, `bd ready`. Expliquer que tous les use cases du slide ne seront pas livrés. |
| 18-20 min | 11 | Jean-Louis | `LiveSignal`: convoys | 1 min | 1 min | `gt convoy list --all`, `gt convoy status`. Progression des deux incréments. |
| 20-22 min | 12 | Jean-Louis | `LiveSignal`: Polecats | 1 min | 1 min | `gt status`, branches/workers. Parallélisme limité, pas tour de terminaux. |
| 22-24 min | 13 | Emmanuel, puis Jean-Louis au `LiveSignal` | Supervision Gas Town | 1 min | 1 min | Emmanuel présente la supervision. Jean-Louis reprend au `LiveSignal`: Deacon, Witness, Refinery et convergence côté terminal. |
| 24-28 min | 14 | Jean-Louis | Vérification Agreement Hub | 1 min | 3 min | App. Montrer uniquement les incréments réellement livrés, avec assez de temps pour vérifier devant le public. |
| 28-29 min | 15 | Emmanuel + Jean-Louis | Synthèse `Ce que Gas Town change` | 1 min | - | Emmanuel prend chaque problème, Jean-Louis donne la réponse Gas Town. |
| 29-30 min | 16 | Les deux | Questions + coût | 1 min | - | Slide de remerciement/questions. Montrer très rapidement le coût dans Langfuse si le rythme le permet, sans analyser les traces. |

## Préparation avant le talk

### 1. Créer et préparer le nouveau lab

Le lab utilisé en live est un nouveau lab, créé avant la présentation.

Le live ne doit donc pas commencer par la création du lab. Il commence avec un lab déjà prêt, Agreement Hub attaché, Gas Town démarré, et le Mayor disponible.

Commandes de création à exécuter avant le talk:

```bash
taxiway up live-dev-with-ai-4 \
  --type gastown \
  --set version=1.1.0 \
  --set beads-version=1.0.3 \
  --set model=claude-opus-4-8 \
  --repo https://github.com/manufacture-dev/agreement-hub.git
```

Puis vérifier et corriger l'environnement:

```bash
taxiway doctor live-dev-with-ai-4
taxiway doctor live-dev-with-ai-4 --fix
taxiway doctor live-dev-with-ai-4
```

Entrer dans le lab:

```bash
taxiway shell live-dev-with-ai-4
gt status
```

Signal attendu:

- Mayor présent;
- Deacon présent;
- Witness et Refinery présents sur `agreement_hub`;
- Crew disponible.

Commandes de vérification juste avant de passer à l'antenne:

```bash
taxiway list
taxiway shell live-dev-with-ai-4
gt status
```

Texte oral:

> On part d'un lab Gas Town déjà provisionné pour cette session live. Agreement Hub est attaché comme repository de travail, Gas Town est démarré, et le Mayor est disponible. Le premier geste visible ne sera pas de créer l'environnement: ce sera de copier le prompt depuis la slide et de le donner au Mayor.

### 2. Vérifier Langfuse rapidement

Ouvrir:

```text
http://localhost:3000/
```

À vérifier:

- organisation `taxiway`;
- projet Langfuse `live-dev-with-ai-4`;
- traces récentes visibles;
- coût visible dans les métriques projet ou les traces.

Texte oral:

> Langfuse ne fait pas partie de Gas Town. C'est un outil du lab qui nous permet de voir rapidement les échanges LLM et le coût. On ne va pas analyser toutes les traces; c'est juste un repère utile pendant la démo.

### 3. Vérifier Agreement Hub

Ouvrir l'application cible si elle est disponible:

```text
http://localhost:5173/
```

À montrer rapidement:

- liste des contrats;
- fiche contrat;
- absence initiale des incréments attendus si le lab est relancé proprement.

Texte oral:

> Agreement Hub est volontairement une application simple mais réaliste. Elle est suffisante pour montrer du delivery produit: une liste, des fiches, des workflows, et des use cases IA possibles.

## Scène 1 - Slide 1: ouverture

Temps cible: 30 secondes.

Présentateur: Jean-Louis.

Texte oral:

> Bonjour à toutes et tous. Aujourd'hui, on ne va pas parler uniquement d'un agent qui aide un développeur. On va parler de ce qui se passe quand les agents deviennent une partie du système de delivery.

> La question centrale, c'est: comment on organise, supervise et mesure ce travail quand il devient distribué?

À garder:

- deck uniquement;
- pas de terminal;
- ne pas annoncer encore les détails des use cases.

## Scène 2 - Slide 2: intervenants

Temps cible: 30 secondes.

Présentateurs: Jean-Louis puis Emmanuel.

Pitch court Jean-Louis:

> Je suis Jean-Louis Rigau, j'accompagne les équipes engineering dans leur transformation AI-native, notamment sur les workflows de delivery et les systèmes multi-agents.

Passage de main:

> Emmanuel, je te laisse te présenter.

Transition:

> On va commencer par la progression des pratiques de développement avec l'IA, parce que Gas Town arrive assez naturellement à la fin de cette progression.

## Scène 3 - Slide 3: les 8 étapes du développement IA

Temps cible: 2 minutes.

Présentateur: Emmanuel.

Texte oral:

> Cette slide raconte une évolution de pratique. Au début, l'IA améliore le flux individuel: un assistant dans l'IDE, quelques générations, un peu d'autocomplétion intelligente.

> Ensuite, on élargit la place de l'agent: il modifie plus de fichiers, il lance des commandes, il prend plus d'initiatives. Puis on passe au CLI, et là on commence à penser en tâches déléguées plutôt qu'en simples suggestions.

> Le moment intéressant, c'est quand on multiplie les agents. On gagne du débit, mais on crée un nouveau problème: qui coordonne? qui sait ce qui est prêt? qui surveille l'intégration? C'est là que la pratique individuelle devient un sujet d'organisation.

Transition:

> Pour ce live, on va se concentrer sur ce dernier passage: du coding assisté vers un delivery agentique organisé.

## Scène 4 - Slide 4: Steve Yegge, Vibe Coding, Gas Town, Beads

Temps cible: 1 minute.

Présentateur: Emmanuel.

Texte oral:

> Steve Yegge a très bien formalisé cette bascule: l'IA coding ne s'arrête pas à "écrire du code plus vite". Elle oblige à repenser la façon dont on fait produire du logiciel par des agents.

> Gas Town et Beads s'inscrivent dans cette logique: Gas Town organise les rôles et le delivery, Beads rend le travail adressable, traçable, et compatible avec Git.

À éviter:

- ne pas faire une biographie;
- ne pas détailler tous les concepts Gas Town maintenant.

## Scène 5 - Slide 5: Gas Town comme système de delivery urbanisé

Temps cible: 1 minute.

Présentateur: Emmanuel jusqu'au contenu principal, puis Jean-Louis reprend au takeaway.

Texte oral:

> L'image importante ici, c'est la ville. Une ville n'est pas seulement une collection de travailleurs. Elle a des rôles, des lieux, des règles, des flux et des mécanismes de supervision.

> Gas Town applique cette idée au delivery agentique. La Town coordonne, le Mayor transforme l'intention en travail, les Rigs sont les repositories où le travail s'exécute.

Reprise Jean-Louis au takeaway:

> Le takeaway est important: on ne va pas piloter chaque agent à la main. On va donner une intention, puis observer comment le système la transforme en delivery. Et pour rendre ça concret, on va le faire sur une application de démo réelle.

## Scène 6 - Slide 6: application de démo

Temps cible: 5 minutes.

Présentateur: Jean-Louis.

Plan écran:

1. Présenter la slide Agreement Hub.
2. Ouvrir rapidement l'application si elle est prête.
3. Revenir au deck.
4. Cliquer sur le bouton de copie du prompt.
5. Basculer terminal.
6. Attacher le Mayor:

```bash
gt mayor attach
```

7. Coller le prompt au Mayor.

Texte oral:

> La cible de delivery, c'est Agreement Hub: une application de contract lifecycle management suffisamment réaliste pour avoir plusieurs use cases, mais assez compacte pour tenir dans un live.

> Le deck et les docs contiennent plusieurs use cases possibles. Mais aujourd'hui, on est sur une démo de 30 minutes. On ne va pas chercher à tout livrer. Le mandat demandé au Mayor est volontairement contraint: deux incréments maximum, démontrables vite, avec un mode mock/offline si nécessaire.

> À partir d'ici, je copie le prompt depuis la slide, je le donne au Mayor, et je laisse Gas Town préparer son plan.

Pendant que le Mayor inspecte:

- revenir sur le deck;
- passer à la slide 7;
- ne pas attendre silencieusement le terminal.

## Scène 7 - Slide 7: pourquoi les workflows single-agent cassent

Temps cible: 1 minute.

Présentateur: Emmanuel.

Texte oral:

> Cette slide explique pourquoi on a besoin d'autre chose qu'un agent unique. Un agent peut être très bon localement, mais le delivery réel a d'autres contraintes: dépendances, statut, responsabilités, merge, supervision.

> Les cinq limites sont importantes: saturation du contexte, exécution séquentielle, pas de mécanisme de coordination, pression sur le merge, pas de supervision opérationnelle.

> Le point n'est pas que le single-agent est inutile. Le point est qu'il ne suffit plus quand on veut faire travailler plusieurs agents sur un même produit.

Transition vers la première démo:

> À partir de la slide suivante, les encadrés violets `LiveSignal` indiquent ce qu'on doit vérifier dans le système réel.

## Scène 8 - Slide 8: Gas Town organise le travail, pas les prompts

Temps cible: 3 minutes.

Présentateurs: Emmanuel pour la slide, puis Jean-Louis à partir du `LiveSignal`.

Texte oral Emmanuel:

> Ici, l'idée est que Gas Town ne cherche pas à écrire un prompt parfait. Il ajoute une couche d'organisation entre l'intention humaine et le delivery observable.

> Le Mayor planifie, les beads rendent le travail adressable, les convoys suivent les flux, Witness et Refinery gardent l'exécution observable, et les Polecats font le travail.

Passage de main:

> Jean-Louis, on peut regarder ce que ce `LiveSignal` donne dans le système réel.

LiveSignal: le Mayor transforme une demande en beads, convoys, affectations et statuts visibles.

Action live:

1. Lire le plan Mayor.
2. Si le plan est trop large, réduire:

```text
Réduis le périmètre pour tenir une démo de 30 minutes. Je veux deux incréments indépendants maximum, démontrables dans l'application, avec un mode mock/offline si une fonctionnalité IA est nécessaire.
```

3. Quand le plan est acceptable, envoyer:

```text
GO
```

4. Montrer les premiers objets:

```bash
bd list --all --flat
gt convoy list --all
```

Texte oral Jean-Louis:

> Ici, on voit le passage important: je ne donne pas une liste de fichiers à modifier. Je donne une intention. Gas Town doit la transformer en objets de delivery: beads, convoys, affectations, statuts.

> La slide présente le modèle général. Dans cette session, je limite volontairement le périmètre. Si le système propose cinq use cases, je le recadre. L'objectif du live n'est pas d'être exhaustif, c'est d'être observable et vérifiable.

Signal attendu:

```text
Incrément A: Contract Search & Filter
Incrément B: AI Risk Reviewer (mock/offline)
```

## Scène 9 - Slide 9: l'organisation

Temps cible: 2 minutes.

Présentateur: Jean-Louis.

LiveSignal: identifier le rig, le crew persistant et les workers jetables attachés au repository.

Action live:

```bash
gt status
```

À montrer:

- le rig `agreement_hub`;
- Mayor et Deacon côté Town;
- Witness et Refinery côté rig;
- Crew disponible;
- Polecats quand ils apparaissent.

Texte oral:

> Cette slide sert à lire l'organisation du système. La Town coordonne, le rig représente le repository, les workers persistants maintiennent l'environnement, et les Polecats sont les workers jetables qui exécutent des beads.

> Dans une démo courte, je ne détaille pas tous les rôles. Je veux surtout montrer qu'on a séparé coordination, exécution, supervision et intégration.

## Scène 10 - Slide 10: Beads

Temps cible: 2 minutes.

Présentateur: Jean-Louis.

LiveSignal: création des beads, statut ready/blocked, graphe de dépendances et hook courant.

Action live:

```bash
bd list --all --flat
bd ready
```

Texte oral:

> Le schéma montre tous les use cases possibles et leurs dépendances. C'est le modèle complet: fondations, revue de risques, recherche, workflow d'approbation, bibliothèque de clauses, génération de clauses.

> Mais le live ne doit pas suivre ce graphe complet. En 30 minutes, je veux voir seulement les beads qui correspondent aux deux incréments retenus. C'est précisément l'intérêt des beads: rendre le périmètre visible au lieu de garder une grande intention floue.

> Si un bead est ready, il peut partir. S'il est blocked, la raison doit être visible. Le système ne promet pas que tout est simple; il rend l'état inspectable.

À ne pas faire:

- ne pas expliquer chaque use case du slide;
- ne pas promettre de livrer tous les use cases;
- ne pas ouvrir `bd show` sur trop de beads.

## Scène 11 - Slide 11: Convoys

Temps cible: 2 minutes.

Présentateur: Jean-Louis.

LiveSignal: création des convoys, statut des convoys et notification de livraison.

Action live:

```bash
gt convoy list --all
gt convoy status <convoy_id>
```

Texte oral:

> Les convoys donnent un nom et un statut à un flux de delivery. Dans le modèle complet, chaque use case peut devenir un flux. Aujourd'hui, le flux est beaucoup plus court: on suit les deux incréments choisis.

> Ce qui m'intéresse ici, c'est la progression: est-ce que le travail est dispatché? est-ce qu'il avance? est-ce qu'il attend une intégration? est-ce qu'il est terminé?

## Scène 12 - Slide 12: Polecats

Temps cible: 2 minutes.

Présentateur: Jean-Louis.

LiveSignal: plusieurs Polecats, branches, commits et statuts de delivery en parallèle.

Action live:

```bash
gt status
bd list --all --flat
```

Texte oral:

> Les Polecats sont le moment où le parallélisme devient concret. Chaque worker reçoit un bead borné, travaille dans son contexte et dans sa branche, puis revient dans le flux de delivery.

> Sur la slide, on voit plusieurs workers et plusieurs use cases. En live, on garde le parallélisme minimal: deux incréments, idéalement deux workers. C'est suffisant pour montrer l'organisation sans perdre le timing.

Si une merge queue est visible:

> La merge queue est le moment où le travail cesse d'être seulement "fait dans une branche". Il devient candidat à l'intégration.

## Scène 13 - Slide 13: supervision Gas Town

Temps cible: 2 minutes.

Présentateurs: Emmanuel pour la slide supervision, puis Jean-Louis à partir du `LiveSignal`.

Texte oral Emmanuel:

> Quand on distribue l'exécution, la supervision devient une partie du système. Ici, on a plusieurs couches: le Deacon pour la santé de la town, le Witness pour surveiller le rig et les Polecats, et la Refinery pour gérer la convergence du delivery.

> Le message de cette slide, c'est que le parallélisme n'est acceptable que s'il reste supervisé.

Passage de main:

> Jean-Louis, tu peux reprendre sur le `LiveSignal` et montrer ce qu'on observe.

LiveSignal: santé du Deacon, statut du Witness, reprise des Polecats, Refinery queue et convergence du delivery.

Action live terminal:

```bash
gt status
gt refinery queue agreement_hub
```

Texte oral Jean-Louis:

> Cette slide parle de supervision opérationnelle côté Gas Town: Deacon, Witness, Refinery. C'est ce qui empêche le parallélisme de devenir juste du chaos.

> Ici, je reste sur les briques internes: la santé de la town, le statut du rig, ce que surveille le Witness, et ce qui attend en Refinery.

> Le point de cette slide, c'est la supervision Gas Town: reprise, queue de merge et convergence du delivery.

À ne pas faire:

- ne pas ouvrir Langfuse sur cette slide;
- ne pas partir dans une explication des traces LLM;
- ne pas transformer cette slide en démo d'observabilité externe.

## Scène 14 - Slide 14: vérification Agreement Hub

Temps cible: 4 minutes.

Présentateur: Jean-Louis.

Action live:

1. Revenir à Agreement Hub.
2. Montrer uniquement les incréments réellement livrés.
3. Si nécessaire, montrer la preuve terminal:

```bash
git log --oneline -5
bd list --all --flat
gt convoy status <convoy_id>
gt refinery queue agreement_hub
```

Texte oral:

> Cette slide liste plusieurs use cases, parce que le produit complet peut aller jusque-là. Pour le live, je ne coche mentalement que ce qui a été livré par le run.

> Si le run a livré la recherche, je montre la recherche. S'il a livré la revue de risques, je montre la revue de risques. Si un autre incrément a été choisi par le Mayor mais reste dans le périmètre court, je montre celui-là. La règle est simple: je ne prétends pas qu'un use case est livré tant qu'il n'est pas visible dans l'application.

Pour `Contract Search & Filter`:

- barre de recherche;
- filtre par statut;
- compteur de résultats;
- table filtrée en direct.

Pour `AI Risk Reviewer mock/offline`:

- fiche contrat;
- action d'analyse;
- constats, sévérité, recommandation;
- préciser que le comportement est mock/offline pour tenir le live.

## Scène 15 - Slide 15: synthèse

Temps cible: 1 minute.

Présentateurs: Emmanuel lit chaque problème, Jean-Louis donne la réponse Gas Town.

Rythme:

1. Emmanuel annonce le problème.
2. Jean-Louis donne la réponse Gas Town.
3. Passer à la ligne suivante sans développer.

Texte oral:

> Emmanuel: Premier problème, la saturation du contexte.

> Jean-Louis: Réponse Gas Town: structurer le travail en beads, artefacts et passages de relais explicites.

> Emmanuel: Deuxième problème, l'exécution séquentielle.

> Jean-Louis: Réponse Gas Town: utiliser les Polecats pour exécuter le travail indépendant en parallèle.

> Emmanuel: Troisième problème, l'absence de coordination.

> Jean-Louis: Réponse Gas Town: Mayor, Crew et convoys rendent les responsabilités et la progression visibles.

> Emmanuel: Quatrième problème, la pression sur le merge.

> Jean-Louis: Réponse Gas Town: la Refinery gère la convergence au lieu de laisser l'intégration au hasard.

> Emmanuel: Cinquième problème, l'absence de supervision opérationnelle.

> Jean-Louis: Réponse Gas Town: Witness et Deacon rendent l'exécution observable, et la Refinery rend l'intégration pilotable.

> La conclusion, ce n'est pas que l'agent écrit du code plus vite. C'est que le delivery agentique devient un système à organiser et à mesurer.

## Scène 16 - Slide 16: questions

Temps cible: 1 minute.

Présentateurs: les deux.

Enrichissement possible, sans recentrer la slide:

1. ouvrir Langfuse;
2. montrer le coût global du projet `live-dev-with-ai-4`;
3. ne pas analyser les traces;
4. revenir aux questions.

Garder ouvert selon le type de question:

- deck pour les questions conceptuelles;
- Langfuse pour les questions sur les échanges LLM ou le coût du lab;
- terminal pour les questions Gas Town;
- Agreement Hub pour les questions produit.

Texte oral:

> Merci. On garde la slide de questions ouverte. Si le rythme le permet, je peux aussi montrer très rapidement le coût du run dans Langfuse, sans rentrer dans l'analyse des traces.

## Boucle d'observation pendant la démo

Commandes terminal à garder sous le coude:

```bash
gt status
gt mayor attach
bd list --all --flat
bd ready
gt convoy list --all
gt convoy status <convoy_id>
gt refinery queue agreement_hub
gt mail inbox
```

Prompt court au Mayor si le système devient silencieux:

```text
Donne-moi ta vue d'ensemble maintenant: ce qui est actif, ce qui est mergé, ce qui attend en Refinery, ce qui est bloqué, et si tu as besoin d'une décision humaine.
```

Langfuse à garder ouvert en arrière-plan:

```text
http://localhost:3000/
```

Utilisation:

- montrer rapidement que les échanges LLM sont tracés;
- montrer le coût global si la question arrive;
- éviter l'analyse détaillée des sessions et des traces.

## Gestion des cas réels

Cette partie doit rester courte. Elle ne couvre que les incidents plausibles côté Gas Town pendant le live.

### Le delivery avance moins vite que prévu

À faire:

- revenir au Mayor;
- demander une vue d'ensemble;
- montrer l'état réel plutôt que d'attendre.

```text
Donne-moi ta vue d'ensemble maintenant: ce qui est actif, ce qui est mergé, ce qui attend en Refinery, ce qui est bloqué, et si tu as besoin d'une décision humaine.
```

Texte oral:

> C'est aussi ça qu'on veut montrer: Gas Town ne sert pas seulement quand tout va vite. Il sert à rendre l'état du delivery lisible.

### La merge queue bloque

Texte oral:

> C'est un cas intéressant pour la démo. Le delivery distribué ne promet pas que tout merge toujours immédiatement. Il rend la pression d'intégration visible.

À montrer:

```bash
gt refinery queue agreement_hub
bd list --all --flat
gt mayor attach
```

### Un seul incrément est livré à temps

Texte oral:

> Si un seul incrément est livré, on le montre honnêtement. La démo ne consiste pas à prétendre que tout est terminé; elle consiste à montrer comment le système découpe, exécute, supervise et intègre le travail.

À montrer:

- l'incrément livré dans Agreement Hub;
- le bead terminé;
- l'autre bead en cours, bloqué ou en attente d'intégration.

## Résultat attendu idéal

À la fin, le public doit avoir vu:

- Agreement Hub avant/après;
- un prompt de mandat au Mayor;
- un plan court avec 2 incréments;
- un `GO`;
- 2 beads produit;
- 1 convoy;
- 2 Polecats;
- une merge queue Refinery;
- un convoy terminé;
- une preuve produit dans l'application;
- un aperçu Langfuse des échanges et du coût, sans analyse détaillée.

Phrase de conclusion:

> Ce que je veux que vous reteniez, c'est que l'AI-native delivery n'est pas seulement une question de génération de code. C'est une question d'organisation, de coordination, de supervision et d'intégration.
