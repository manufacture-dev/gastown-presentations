# Agile En Seine & IA 2026

Ce document cadre la présentation-atelier Gas Town prévue pour Agile En Seine & IA 2026. L'événement officiel se déroule les 22 et 23 septembre 2026 au Palais des Congrès d'Issy-les-Moulineaux. Le programme place l'atelier Gas Town le 22 septembre, premier jour de l'événement.

La session dure 1 h 45, se déroule en français et accueille environ 20 participants répartis en 10 binômes. Elle combine la présentation complète de Gas Town, du live coding réalisé par le présentateur et un atelier guidé dans lequel chaque binôme reproduit les étapes dans son propre lab Taxiway.

## État initial du deck

Le talk utilise la variante `workshop`, dérivée de la variante `full` de DiliTrust TechDay, avec le prompt `all-use-cases`, mais en français. Cette variante conserve toutes les slides du deck complet et déplace `Application de démo` après `Supervision`, juste avant `Vérification`.

La cible éditoriale du futur deck workshop est la suivante:

1. conserver toutes les slides de la présentation complète en français;
2. déplacer `Application de démo` après les slides conceptuelles: cette slide ouvre l'atelier;
3. insérer les nouvelles slides opérationnelles entre `Application de démo` et `Vérification`;
4. placer `Vérification` à la fin de l'atelier;
5. conserver `Ce que Gas Town change` comme synthèse;
6. terminer avec `Merci` et les dernières questions.

Le deck workshop détaillé, ses commandes copiables et ses checkpoints seront ajoutés dans une évolution ultérieure. La variante `full` reste inchangée pour les présentations existantes.

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

| Temps | Durée | Séquence | Résultat attendu |
|---:|---:|---|---|
| 0:00-0:04 | 4 min | Accueil, constitution des binômes et règles de fonctionnement | Dix binômes numérotés, rôles conducteur et navigateur compris |
| 0:04-0:21 | 17 min | Présentation Gas Town complète et condensée | Modèle mental commun avant de manipuler |
| 0:21-0:36 | 15 min | Setup Taxiway, live coding et checkpoint 1 | Lab accessible, Gas Town sain, Agreement Hub ouvert |
| 0:36-0:51 | 15 min | Premier incrément guidé et checkpoint 2 | Mandat transmis au Mayor, plan compris, bead et worker identifiés |
| 0:51-1:11 | 20 min | Deux incréments en parallèle et checkpoint 3 | Deux flux observables dans des contextes isolés |
| 1:11-1:24 | 13 min | Stabilisation, intégration et checkpoint 4 | Résultat livré, en intégration ou blocage précisément identifié |
| 1:24-1:42 | 18 min | Synthèse collective intégrée aux questions-réponses | Apprentissages reliés aux concepts du talk, questions traitées |
| 1:42-1:45 | 3 min | Conclusion et marge | Message final et absorption d'un léger retard |

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

## Signal de progression

À chaque checkpoint, les binômes utilisent un signal simple:

- **vert**: résultat attendu atteint;
- **jaune**: commande en cours ou résultat incertain;
- **rouge**: aide nécessaire.

Le présentateur montre d'abord son propre résultat à l'écran, puis demande le signal de la salle. On avance lorsque tous les binômes sont au vert ou déjà accompagnés. Il n'y a ni tour de table ni projection obligatoire des écrans participants.

## Checkpoint 1 - Environnement opérationnel

Le binôme doit avoir:

- un lab Taxiway accessible;
- un diagnostic sans erreur bloquante;
- un statut Gas Town lisible;
- Agreement Hub ouvert dans le navigateur.

Exploration facultative: identifier le Mayor, le Witness et la Refinery dans l'état du système.

## Checkpoint 2 - Premier incrément lancé

Le binôme doit avoir:

- transmis le premier besoin au Mayor;
- lu et, si nécessaire, recadré le plan proposé;
- donné son accord pour l'exécution;
- identifié le bead et le worker associés.

Le premier incrément doit rester simple, visible et démontrable. Le scénario recommandé est `Contract Search & Filter`, déjà compris dans le prompt `all-use-cases`.

Exploration facultative: retrouver le worktree et observer le statut détaillé du bead.

Après ce checkpoint, conducteur et navigateur inversent leurs rôles.

## Checkpoint 3 - Parallélisme visible

Le binôme lance deux incréments indépendants. Le périmètre recommandé combine:

- `Contract Search & Filter` si l'incrément doit être complété ou approfondi;
- `AI Risk Reviewer` avec un comportement mock/offline.

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

Le créneau de setup sert à provisionner et vérifier les labs, pas à installer toute la chaîne depuis zéro. Les participants doivent arriver avec Taxiway et ses prérequis installés et authentifiés.

Avant l'atelier, vérifier:

- la disponibilité d'un lab par binôme;
- l'accès au repository Agreement Hub;
- la route publique de cette présentation;
- le fonctionnement des boutons de copie dans le deck web;
- l'accès local à Agreement Hub;
- le mécanisme de signal vert, jaune ou rouge;
- la présence du second facilitateur.

Le QR code de la première slide devra pointer vers la route publique du talk:

```text
https://manufacture.dev/gastown-presentations/agile-en-seine-2026/#/1
```
