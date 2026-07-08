# SACEM - Matinale DSI

Ce document décrit le scénario court pour `SACEM - Matinale DSI | Organiser le delivery logiciel AI-native avec Gastown`, prévu le 10 juillet 2026.

La session est un live interne SACEM, en français, avec Jean-Louis Rigau et Emmanuel Sciara. Le format total est de 45 minutes: 30 minutes de présentation et démonstration, puis 15 minutes de questions.

Le format reprend volontairement le live Dev With AI Live #4: même variante courte, même application de démonstration, même prompt `demo-15-min`, même logique d'observation par `LiveSignal`. La différence principale est le contexte: l'audience est une session SACEM - Matinale DSI interne, pas un live LinkedIn et pas une session en présentiel.

## Intention générale

La présentation doit faire passer un message simple:

> Quand les agents deviennent une partie du delivery logiciel, le sujet principal n'est plus seulement le prompt ou la vitesse de génération. Le sujet devient l'organisation: découpage, coordination, supervision, intégration et vérification.

Le talk doit rester concret. Le deck installe le vocabulaire, puis la démonstration montre comment Gastown transforme une intention produit en objets de delivery observables: beads, convoys, Polecats, Witness, Refinery et résultat vérifiable dans Agreement Hub.

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
- Langfuse peut être montré brièvement pour matérialiser échanges LLM et coût, sans devenir le sujet principal.

## Choix de scénario recommandé

Le scénario recommandé est le même que pour Dev With AI Live #4, avec un cadrage oral adapté à une audience DSI:

1. présenter Agreement Hub comme cible de delivery réaliste;
2. copier le prompt depuis le deck et le donner au Mayor;
3. obtenir un plan court;
4. recadrer si nécessaire à deux incréments maximum;
5. envoyer `GO`;
6. suivre beads, convoys, workers et merge queue dans le terminal;
7. vérifier le résultat livré dans Agreement Hub;
8. conclure sur ce que Gastown change dans l'organisation du delivery;
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
- détailler tous les rôles internes Gastown;
- faire une visite longue de Langfuse;
- expliquer chaque commande du terminal comme une formation outil;
- laisser la démonstration prendre les 15 minutes de questions.

## Conducteur 30 minutes

Le talk utilise la variante `short`. La slide `Formulas` n'est pas jouée. La synthèse `Ce que Gastown change` précède la slide de remerciement/questions.

| Temps | Slides | Séquence | Deck | Démo | Preuve à l'écran |
|---:|---:|---|---:|---:|---|
| 0-1 min | 1-2 | Ouverture + intervenants | 1 min | - | Titre `SACEM - Matinale DSI`, date, Jean-Louis et Emmanuel. |
| 1-5 min | 3-5 | Evolution de la pratique vers Gastown | 4 min | - | Les 8 étapes, Steve Yegge, Gastown comme système de delivery. |
| 5-10 min | 6 | Application de démo + prompt | 1 min | 4 min | Agreement Hub, copie du prompt, `gt mayor attach`, plan Mayor. |
| 10-11 min | 7 | Pourquoi le single-agent casse | 1 min | - | Installer les limites: contexte, séquentialité, coordination, merge, supervision. |
| 11-14 min | 8 | Gastown organise le travail | 1 min | 2 min | Plan Mayor, recadrage à deux incréments, `GO`, premiers beads/convoys. |
| 14-16 min | 9 | Organisation Gastown | 1 min | 1 min | `gt status`: town, rig, crew, Mayor, Witness, Refinery. |
| 16-18 min | 10 | Beads | 1 min | 1 min | `bd list --all --flat`, `bd ready`, ready/blocked. |
| 18-20 min | 11 | Convoys | 1 min | 1 min | `gt convoy list --all`, `gt convoy status`. |
| 20-22 min | 12 | Polecats | 1 min | 1 min | Workers, branches, progression parallèle. |
| 22-24 min | 13 | Supervision Gastown | 1 min | 1 min | Deacon, Witness, Refinery, queue de merge. |
| 24-28 min | 14 | Vérification Agreement Hub | 1 min | 3 min | App livrée: recherche/filtre et revue de risques si disponibles. |
| 28-29 min | 15 | Synthèse | 1 min | - | Ce que Gastown change pour le delivery. |
| 29-30 min | 16 | Passage aux questions | 1 min | - | Slide `Merci`, ouverture Q/R. |

## Préparation avant le live

Le live doit démarrer avec un lab déjà prêt. Ne pas créer l'environnement devant l'audience.

Créer le lab:

```bash
taxiway up live-sacem-matinale-dsi \
  --type gastown \
  --set version=1.1.0 \
  --set beads-version=1.0.3 \
  --set model=claude-opus-4-8 \
  --repo https://github.com/manufacture-dev/agreement-hub.git
```

Vérifier et corriger l'environnement:

```bash
taxiway doctor live-sacem-matinale-dsi
taxiway doctor live-sacem-matinale-dsi --fix
taxiway doctor live-sacem-matinale-dsi
```

Entrer dans le lab:

```bash
taxiway shell live-sacem-matinale-dsi
gt status
```

Signal attendu:

- Mayor présent;
- Deacon présent;
- Witness et Refinery présents sur `agreement_hub`;
- Crew disponible;
- Agreement Hub attaché comme repository de travail.

Vérifier Agreement Hub:

```text
http://localhost:5173/
```

Vérifier Langfuse si disponible:

```text
http://localhost:3000/
```

Langfuse reste un repère annexe: il peut servir à montrer rapidement les échanges LLM et le coût, mais il ne doit pas détourner le talk du modèle Gastown.

## Phrases d'ouverture

Texte oral possible:

> Bonjour à toutes et tous. Aujourd'hui, on va parler de delivery logiciel AI-native. Pas seulement d'un assistant qui aide un développeur dans son IDE, mais de ce qui se passe quand plusieurs agents deviennent une partie du système de delivery.

> La question centrale est: comment organiser, superviser et vérifier ce travail quand il devient distribué?

Transition vers l'application:

> Pour rendre ça concret, on va travailler sur Agreement Hub, une application de contract lifecycle management. Le but n'est pas de tout livrer en 30 minutes. Le but est de montrer comment une intention produit devient un delivery observable.

## Règles de rythme

Le deck reste le fil conducteur. Les bascules terminal ou application se font quand la slide affiche un `LiveSignal`.

Quand le Mayor propose un plan trop large, recadrer explicitement:

```text
Réduis le périmètre pour tenir une démo de 30 minutes. Je veux deux incréments indépendants maximum, démontrables dans l'application, avec un mode mock/offline si une fonctionnalité IA est nécessaire.
```

Quand le plan est acceptable:

```text
GO
```

Commandes live principales:

```bash
gt status
bd list --all --flat
bd ready
gt convoy list --all
gt convoy status <convoy_id>
gt refinery queue agreement_hub
```

## Questions attendues

Préparer des réponses courtes sur:

- coût d'un delivery agentique;
- gouvernance et contrôle des modèles;
- limites du mode mock/offline;
- intégration avec les pratiques existantes de revue et CI;
- différence entre assistance individuelle et delivery organisé;
- supervision, traçabilité et reprise après blocage.

## Vérification du talk

Commandes locales:

```bash
npm run talk:list
npm run build -- sacem-matinale-dsi
npm run dev -- sacem-matinale-dsi --port 3030
```

URL locale attendue:

```text
http://localhost:3030/
```
