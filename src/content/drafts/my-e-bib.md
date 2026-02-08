---
title: "Un catalogo per i miei e-book"
author: Stefano Trinchero
date: "2026-02-02"
description: "Ho deciso: voglio un posto per catalogare e cercare i miei ebook."
excerpt: "Compro troppi e-book. Spesso finisco per non leggerli"
projects: ["Ideas"]
categories: ["Books", "Databases"]
tags: ["Typescript", "Embedding", "Postgres", "Pg-vector"]
lang: "it"
---

Due cose mi piacciono tantissimo: i libri e i database. E allora com'è possibile che io sia arrivato alla mia età senza avere un catalogo di tutti i miei libri? Passo la vita a fare archivi e cataloghi per gli altri e non ho mai pensato di organizzare la mia biblioteca personale: assurdo, ma forse anche abbastanza tipico. 

Allora mi sono deciso e ho impiegato qualche mattina per realizzare [questo progetto di cui sono moderatamente soddisfatto](https://trnq.eu/projects/biblioteque/). 

Il mio principale problema è che compro tantissimi ebook, ho pochissimo tempo per leggere e finisco per dimenticarmi dei libri che ho comprato, perdendomi la possibilità di leggere il libro giusto al momento giusto.   


Devo dire la verità, non sono molto soddisfatto degli embedding multilingua. A un certo punto ho anche pensato di rifare tutti gli embedding utilizzando un altro modello, ma dopo essermi consultato con Antigravity ho rinunciato. 

<blockquote class="blockquote-accent">
**IMPORTANT**

Database Migration: This change requires updating the embedding column in the database from 384 dimensions to 896 dimensions. This will invalidate all current embeddings. Memory Usage: The new model is larger (~560MB for the INT8 version) compared to the current one (~100MB). This might increase the memory footprint of the backend. Re-embedding: All books (current and future) will need to have their embeddings re-calculated.
</blockquote>

## TECNICAMENTE

Spiegazione tecnica dell'implementazione

### IDEE

- Non mi soddisfano gli embedding
- Voglio poter fare il login per editare le schede mentre le consulto
- documentare facendo