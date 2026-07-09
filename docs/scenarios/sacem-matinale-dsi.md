# SACEM - Matinale DSI

Ce document décrit le scénario court pour `SACEM - Matinale DSI | Organiser le delivery logiciel AI-native avec Gas Town`, prévu le 10 juillet 2026.

La session est un live interne SACEM, en français, avec Jean-Louis Rigau et Emmanuel Sciara. Le format total est de 45 minutes: 30 minutes de présentation et démonstration, puis 15 minutes de questions. La présentation doit donc se terminer à 30 minutes par l'ouverture de la séquence Q/R.

Le format reprend volontairement le live Dev With AI Live #4: même variante courte, même application de démonstration, même prompt `demo-15-min`, même logique d'observation par `LiveSignal`. La différence principale est le contexte: l'audience est une session SACEM - Matinale DSI interne, pas un live LinkedIn et pas une session en présentiel.

## Intention générale

La présentation doit faire passer un message simple:

> Quand les agents deviennent une partie du delivery logiciel, le sujet principal n'est plus seulement le prompt ou la vitesse de génération. Le sujet devient l'organisation: découpage, coordination, supervision, intégration et vérification.

Le talk doit rester concret. Le deck installe le vocabulaire, puis la démonstration montre comment Gas Town transforme une intention produit en objets de delivery observables: beads, convoys, Polecats, Witness, Refinery et résultat vérifiable dans Agreement Hub.

La démonstration doit prouver deux choses en peu de temps:

- Gas Town transforme une intention produit en travail distribué: beads, convoy, Polecats, review, Witness, Refinery, merge queue;
- une démo courte doit choisir des incréments indépendants et démontrables, pas chercher à couvrir tous les use cases Agreement Hub.

## Règle de rythme

Le deck reste le fil conducteur. Les slides qui n'ont pas d'encadré violet `LiveSignal` se présentent comme des slides: elles posent le vocabulaire, le problème et le modèle mental.

Les bascules vers le terminal ou Agreement Hub se font quand la slide affiche un `LiveSignal`. À ce moment-là, la slide annonce ce qu'il faut observer, puis l'écran live donne la preuve.

Langfuse est un outil du lab, pas une partie de Gas Town. On le vérifie avant le talk et on le montre très vite en fin de live pour matérialiser les échanges LLM et le coût, sans analyser les traces.

Exception pratique: la slide 6 sert à copier le prompt et à le donner au Mayor. C'est le lancement du système, pas encore une séquence d'observation détaillée. L'observation live commence vraiment à la première slide `LiveSignal`.

Les slides montrent parfois le modèle complet avec tous les use cases Agreement Hub. Pour ce live de 30 minutes, il faut le dire clairement:

> La slide montre le modèle complet. En live, je réduis volontairement le périmètre: on ne cherche pas à livrer tous les use cases, on veut deux incréments démontrables et une exécution observable.

## Cadre de la présentation

- le talk est en français;
- l'événement affiché dans le deck est `SACEM - Matinale DSI`;
- la date affichée est le 10 juillet 2026;
- le format est 30 minutes de présentation et live demo, puis 15 minutes de questions;
- le deck utilise la variante `short`;
- le prompt utilisé par le bouton de copie est `demo-15-min`;
- le contexte est un live interne SACEM;
- l'application cible reste Agreement Hub;
- la démo doit livrer au maximum deux incréments démontrables;
- Langfuse est démarré avant la session pour montrer brièvement les traces et le coût en fin de live, sans devenir le sujet principal;
- le terminal sert à montrer les objets de delivery Gas Town;
- Agreement Hub sert à prouver les incréments livrés.

## Choix de scénario recommandé

Le scénario recommandé est le même que pour Dev With AI Live #4, avec un cadrage oral adapté à une audience DSI:

1. présenter Agreement Hub comme cible de delivery réaliste;
2. copier le prompt depuis le deck et le donner au Mayor;
3. obtenir un plan court;
4. recadrer si nécessaire à deux incréments maximum;
5. envoyer `GO`;
6. suivre beads, convoys, workers et merge queue dans le terminal;
7. vérifier le résultat livré dans Agreement Hub;
8. conclure sur ce que Gas Town change dans l'organisation du delivery;
9. garder 15 minutes pour questions et discussion.

Le périmètre live recommandé reste:

- `Contract Search & Filter`;
- `AI Risk Reviewer (mock/offline)`.

Pourquoi ce choix:

- les deux incréments sont compréhensibles par une audience DSI;
- ils sont visibles rapidement dans l'application;
- ils montrent du delivery produit, pas seulement du code généré;
- ils limitent le risque de timing;
- ils suffisent à montrer le parallélisme, la coordination et la supervision.

À éviter pendant cette session:

- chercher à livrer tous les use cases Agreement Hub;
- détailler tous les rôles internes Gas Town;
- faire une visite longue de Langfuse;
- expliquer chaque commande du terminal comme une formation outil;
- laisser la démonstration prendre les 15 minutes de questions.

## Conducteur 30 minutes

Le talk utilise la variante `short`: la slide `Formulas` n'est pas jouée. La synthèse `Ce que Gas Town change` est donc la slide 15, puis la slide de remerciement/questions termine le deck.

| Temps | Slides | Qui | Séquence | Deck | Démo | Preuve à l'écran |
|---:|---:|---|---|---:|---:|---|
| 0-1 min | 1-2 | Jean-Louis puis Emmanuel | Ouverture + intervenants | 1 min | - | Jean-Louis ouvre, puis Emmanuel se présente. |
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
| 29-30 min | 16 | Les deux | Ouverture Q/R + coût | 1 min | - | Slide de remerciement/questions. Montrer très rapidement le coût dans Langfuse, puis ouvrir les 15 minutes de questions. |

## Préparation avant le talk

Le live doit démarrer avec un lab déjà prêt. Ne pas créer l'environnement devant l'audience.

Initialiser le runtime Taxiway et vérifier l'état global:

```bash
taxiway init
taxiway status
```

Ouvrir Langfuse avant la session pour vérifier les traces et le coût:

```bash
taxiway observe open
```

Si l'URL ou les credentials sont nécessaires:

```bash
taxiway access
```

Créer et démarrer le lab Gas Town:

```bash
taxiway up live-sacem-matinale-dsi \
  --type gastown \
  --set version=1.1.0 \
  --set beads-version=1.0.3 \
  --set model=claude-opus-4-8 \
  --repo https://github.com/manufacture-dev/agreement-hub.git
```

Si une phase échoue ou doit être rejouée, reprendre explicitement au bon endroit plutôt que recréer le lab:

```bash
taxiway up live-sacem-matinale-dsi --from gateway
taxiway up live-sacem-matinale-dsi --from workspace \
  --repo https://github.com/manufacture-dev/agreement-hub.git
```

Vérifier que le lab et le shell sont disponibles:

```bash
taxiway list live-sacem-matinale-dsi
taxiway shell live-sacem-matinale-dsi --check
```

Diagnostiquer et corriger l'environnement si nécessaire:

```bash
taxiway doctor live-sacem-matinale-dsi
taxiway doctor live-sacem-matinale-dsi --fix
```

Lancer l'enregistrement:

```bash
taxiway record start live-sacem-matinale-dsi --name sacem-matinale-dsi
```

Entrer dans le lab:

```bash
taxiway shell live-sacem-matinale-dsi
```

Vérifier Gas Town depuis le lab:

```bash
gt doctor
```

Si `gt doctor` remonte `claude-settings: Found 1 agent(s) missing settings.json`, restaurer les agents:

```bash
gt up --restore
```

Si `gt doctor` ne remonte que des warnings de maintenance, les corriger avant le live:

```bash
gt doctor --fix
gt doctor --fix hooks-sync
```

Si une session Deacon affiche un patrol ou un hook en attente, ne pas exécuter ses commandes depuis le shell principal. Revenir dans la session Deacon et laisser Deacon exécuter son hook.

Vérifier explicitement l'état de Deacon:

```bash
gt deacon status
```

Si Deacon ne se lance pas correctement ou si son statut indique `Health: stale`, le redémarrer avant le live:

```bash
gt deacon restart
gt deacon status
```

Vérifier l'état de départ:

```bash
gt status
```

Depuis le shell du lab, utiliser `gt mayor attach` pour rejoindre la session Mayor, puis `Ctrl-b d` pour revenir au shell sans arrêter la session.

Signal attendu:

- Mayor présent;
- Deacon présent;
- Witness et Refinery présents sur `agreement_hub`;
- Crew disponible;
- Agreement Hub attaché comme repository de travail.

Texte oral:

> On part d'un lab Gas Town déjà provisionné pour cette session live. Agreement Hub est attaché comme repository de travail, Gas Town est démarré, et le Mayor est disponible. Le premier geste visible ne sera pas de créer l'environnement: ce sera de copier le prompt depuis la slide et de le donner au Mayor.

Vérifier Agreement Hub:

```text
http://localhost:5173/
```

À montrer rapidement:

- liste des contrats;
- fiche contrat;
- absence initiale des incréments attendus si le lab est relancé proprement.

Texte oral:

> Agreement Hub est volontairement une application simple mais réaliste. Elle est suffisante pour montrer du delivery produit: une liste, des fiches, des workflows, et des use cases IA possibles.

Vérifier Langfuse:

```bash
taxiway observe open
```

À vérifier:

- organisation `taxiway`;
- projet Langfuse `live-sacem-matinale-dsi`;
- traces récentes visibles;
- coût visible dans les métriques projet ou les traces.

Texte oral:

> Langfuse ne fait pas partie de Gas Town. C'est un outil du lab qui nous permet de voir rapidement les échanges LLM et le coût. On ne va pas analyser toutes les traces; c'est juste un repère utile pendant la démo.

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

> Pour cette Matinale DSI, on va se concentrer sur ce dernier passage: du coding assisté vers un delivery agentique organisé.

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

Pont prévu vers les 15 minutes de questions:

1. ouvrir Langfuse;
2. montrer le coût global du projet `live-sacem-matinale-dsi`;
3. ne pas analyser les traces;
4. ouvrir la séquence Q/R.

Garder ouvert selon le type de question:

- deck pour les questions conceptuelles;
- Langfuse pour les questions sur les échanges LLM ou le coût du lab;
- terminal pour les questions Gas Town;
- Agreement Hub pour les questions produit.

Texte oral:

> Merci. On arrive à la fin des 30 minutes de présentation. Je montre très rapidement le coût du run dans Langfuse, sans rentrer dans l'analyse des traces, et on va pouvoir passer aux questions.

## Boucle d'observation pendant la démo

Commandes hôte utiles avant ou après le live:

```bash
taxiway status
taxiway access
```

Commandes terminal à garder sous le coude dans le lab:

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

```bash
taxiway observe open
```

Utilisation:

- montrer rapidement que les échanges LLM sont tracés;
- montrer le coût global;
- éviter l'analyse détaillée des sessions et des traces.

Après la session, une fois le rapport final récupéré, arrêter Gas Town pour ne pas laisser le lab tourner inutilement:

```bash
gt estop
```

Puis arrêter l'enregistrement côté Taxiway:

```bash
taxiway record stop live-sacem-matinale-dsi --name sacem-matinale-dsi
```

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
