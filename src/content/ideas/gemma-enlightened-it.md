---
title: "Fare il fine-tuning di Gemma-2 per preservare le parole e il pensiero dell'Illuminismo italiano"
author: Stefano Trinchero
date: "2025-01-10"
description: "Una candidatura per una competizione Kaggle volta a fare il fine-tuning di Gemma-2 per preservare le parole e il pensiero della filosofia illuminista italiana."
excerpt: "Un modello linguistico può diventare uno strumento innovativo per preservare un contesto culturale specifico? Questo progetto è un tentativo di fare il fine-tuning di Gemma 2B per preservare un sistema di pensiero e il linguaggio specifico usato per articolarlo."
projects: ["Ideas"]
categories: ["AI", "NLP", "History"]
tags: ["Gemma", "Fine-tuning", "Enlightenment", "Italian History"]
lang: "it"
translationKey: "gemma-enlightened"
---

*Questo testo è stato originariamente [pubblicato su Kaggle](https://www.kaggle.com/code/stefanotrinchero/gemma-enlightened) come candidatura per il contest [Google - Unlock Global Communication with Gemma](https://www.kaggle.com/competitions/gemma-language-tuning). 

L'articolo è stato originariamente scritto in inglese ed è stato tradotto in italiano con il supporto dell'intelligenza artificiale.*


## 0. Panoramica {#0-panoramica}

La motivazione principale di questo progetto nasce da una domanda
fondamentale: un modello linguistico può diventare uno strumento
innovativo per preservare un contesto culturale specifico? Al di là dei
metodi tradizionali come l'archiviazione di testi, l'analisi critica e
gli studi accademici, è possibile creare una nuova forma di
conservazione che salvaguardi le parole e le idee di un movimento
filosofico? Potrebbe, di fatto, uno strumento del genere trasportare
questi concetti fino ai giorni nostri, rendendoli utilizzabili e
confrontabili con le questioni contemporanee?

In breve, l'obiettivo di questo progetto è fare il fine-tuning di Gemma
2B nel tentativo di **preservare un sistema di pensiero e il linguaggio
specifico usato per articolarlo**.

Nello specifico, ho scelto di concentrarmi sull'Illuminismo italiano,
un movimento filosofico e politico che mi affascina per il suo
contributo al progresso sociale e civile italiano. Questo movimento ha
messo in luce il valore dell'istruzione, della ricerca scientifica e
dell'attenzione ai bisogni delle persone. Era profondamente radicato
nella realtà, nella politica, nella riforma e nel contesto sociale del
suo tempo.

> Da [Wikipedia](https://it.wikipedia.org/wiki/Illuminismo):
> "*L'Illuminismo (dal francese Siècle des Lumières, "secolo dei Lumi")
> fu un movimento filosofico e culturale sviluppatosi in Europa tra il
> XVII e il XVIII secolo, caratterizzato dalla discussione delle
> questioni epistemologiche, etiche e politiche del pensiero
> settecentesco.*"

Ho pensato che, se fossi riuscito a fare il fine-tuning di un modello
linguistico per costruire un'IA capace di replicare la **sintassi e il
lessico dell'italiano del Settecento** e la **struttura del pensiero
illuminista**, avrei forse potuto usarla per analizzare la realtà
attuale attraverso una lente illuminista.

## 1. La raccolta delle fonti {#1-la-raccolta-delle-fonti}


L'Illuminismo italiano si è sviluppato principalmente in due città:
**Napoli** e **Milano**. Nel creare il dataset, mi sono impegnato a
bilanciare i testi degli autori napoletani (come Gaetano Filangieri e
Mario Pagano) con quelli degli autori lombardi (come Cesare Beccaria,
Alessandro e Pietro Verri; per chi legge in italiano, un'ottima risorsa
online sull'Illuminismo lombardo è disponibile su
<https://illuminismolombardo.it/>).

Nella selezione dei frammenti di testo usati per l'addestramento, ho
cercato di includere i temi principali affrontati dai filosofi
illuministi. Questo per garantire che il modello linguistico fosse
preparato ad affrontare un'ampia gamma di argomenti, tra cui:

-   Giustizia
-   Ambiente
-   Economia
-   Costumi e usanze
-   Lavoro
-   Scienza
-   Salute
-   Arte e cultura
-   Istruzione e scuola
-   Architettura

I testi utilizzati per l'addestramento sono stati i seguenti:

-   [Francesco
    Algarotti](https://it.wikipedia.org/wiki/Francesco_Algarotti),
    "*Dialoghi sopra l'ottica neutoniana*", (1764): una spiegazione
    divulgativa delle teorie ottiche di Newton presentata in forma di
    dialogo.
-   Francesco Algarotti, "*Dialogo sopra la lingua francese*", (1750).
    Un breve saggio sul diverso sviluppo storico delle lingue italiana e
    francese. È un'opera di brillante divulgazione ("[divulgazione
    brillante](https://it.wikipedia.org/wiki/Divulgazione_scientifica_brillante#:~:text=La%20divulgazione%20scientifica%20brillante%20%C3%A8,a%20causa%20della%20radicata%20carenza)"),
    un genere letterario che mirava a semplificare e rendere coinvolgente
    la spiegazione di argomenti complessi.
-   Francesco Algarotti, "*Saggio sopra la necessità di scrivere nella
    propria lingua*", (1750): un saggio sull'importanza per gli autori
    di scrivere nella propria lingua madre per chiarezza ed espressione
    culturale.
-   [Cesare Beccaria](https://it.wikipedia.org/wiki/Cesare_Beccaria),
    *Dei delitti e delle pene*, (1764). Una delle opere più famose di
    tutto il movimento illuminista italiano, è un trattato sullo stato
    del sistema giudiziario che sostiene un sistema di giustizia penale
    più umano e razionale, ponendo l'accento su equità, proporzionalità
    e prevenzione del crimine attraverso l'istruzione piuttosto che la
    punizione brutale. Quest'opera è diventata un documento fondativo
    per la riforma giuridica in Europa e in Italia in particolare.
-   Cesare Beccaria, "*Della Commedia: presso i Greci, i Latini e
    gl'Italiani*". Il libro esamina la storia e l'evoluzione della
    commedia in tre culture distinte: gli antichi greci, i romani e gli
    italiani dell'epoca dell'autore.
-   Francesco Algarotti, "*Viaggi di Russia*", (1739): il resoconto di
    un viaggio compiuto dall'autore nel 1739 a San Pietroburgo e in
    altre città dell'Europa settentrionale.
-   [Gaetano
    Filangieri](https://it.wikipedia.org/wiki/Gaetano_Filangieri), "*La
    Scienza della Legislazione*", (1780-1788). Il saggio esamina i
    principi sistematici di una scienza pratica pensata per guidare le
    riforme legislative, ponendo la felicità del singolo cittadino come
    fondamento utilitaristico di uno stato ben funzionante.
-   [Ferdinando
    Galiani](https://it.wikipedia.org/wiki/Ferdinando_Galiani), "*De'
    doveri de' principi neutrali verso i principi guerreggianti, e di
    questi verso i neutrali*", (1782). Il testo è diviso in due libri: il
    primo tratta i doveri delle parti neutrali (in particolare riguardo
    al commercio e al contrabbando), facendoli derivare dai principi
    della morale e del diritto; il secondo affronta le norme correlate
    basate sulla Ragion di Stato.
-   [Francesco Mario
    Pagano](https://it.wikipedia.org/wiki/Francesco_Mario_Pagano),
    *Lettere*: una raccolta di lettere sul tema della giustizia e
    dell'organizzazione dello stato, scritta da uno dei più importanti
    filosofi e giuristi dell'Illuminismo napoletano.
-   [Pietro Verri](https://it.wikipedia.org/wiki/Pietro_Verri), "*Storia
    di Milano*", (1783): una storia dettagliata della città di Milano
    dalle origini fino al XVIII secolo.
-   Pietro Verri, "*Diario militare*", (1759): un diario personale che
    documenta le esperienze e i pensieri dell'autore durante il servizio
    militare.
-   Pietro Verri, "*Pensieri di un buon vecchio che non è letterato*",
    (1796): un'opera tarda del filosofo, economista, storico e scrittore
    noto come fondatore dell'Illuminismo milanese.
-   Pietro Verri, "*Discorsi sull'indole del piacere e del dolore,
    sulla felicità e sulla economia politica*", (1781): una raccolta di
    discorsi filosofici, economici e politici di una delle figure più
    importanti di questo movimento filosofico.
-   *Vari autori*, "*[Il
    Caffé](https://it.wikipedia.org/wiki/Il_Caff%C3%A8_(1764-1766))*",
    (1764-1766). *Il Caffé* fu una rivista influente fondata da Pietro
    e Alessandro Verri, pubblicata a Milano dal 1764 al 1766. La rivista
    fu una piattaforma vivace di dibattito intellettuale, commento
    sociale e diffusione degli ideali illuministi in Italia. Questo
    testo rappresenta la parte più importante del dataset, sia per
    dimensione sia per varietà di temi trattati, oltre che per il modo
    in cui le idee vengono presentate.

## 2. Elaborazione dei testi {#2-elaborazione-dei-testi}

La maggior parte dei testi proviene da [Liber
Liber](https://liberliber.it/), un archivio di riferimento per i libri
italiani di pubblico dominio. Alcuni testi erano già disponibili in
formato TXT, mentre altri sono stati scaricati come PDF e poi convertiti
tramite OCR (riconoscimento ottico dei caratteri).

Dopo aver ottenuto il testo semplice di un libro, l'ho elaborato usando
la libreria [spaCy](https://spacy.io/) con il modello italiano di grandi
dimensioni (`it_core_news_lg`). Questo passaggio prevedeva la
tokenizzazione del testo e la sua suddivisione in frasi gestibili.

Il codice seguente mostra come viene elaborato un file di testo di
esempio, `enlightenment-text-example.txt`. Questo file, un estratto da
"*Viaggi di Russia*" di Francesco Algarotti, è incluso nel dataset
allegato a questo notebook. La funzione principale dello script è
segmentare il testo in blocchi di frasi e prepararlo per l'uso in un
dataset.

Ecco una descrizione dei passaggi di elaborazione:

1.  **Caricamento e pulizia del testo:**
    -   Lo script carica il contenuto testuale dal file indicato dalla
        variabile `file_path`.
    -   Poi pulisce il testo rimuovendo caratteri di nuova riga e spazi
        superflui tramite la funzione `clean_text`.
2.  **Segmentazione del testo:**
    -   La funzione `segment_text_into_chunks` usa la libreria spaCy per
        tokenizzare prima il testo in frasi. La lunghezza desiderata di
        ogni segmento (in numero di frasi) è impostata dalla variabile
        `segment_length`.
    -   Le frasi vengono poi raggruppate in segmenti. Se alla fine del
        testo restano frasi in numero inferiore a `segment_length`,
        queste vengono raggruppate in un segmento finale.
    -   Ogni segmento sarà una stringa contenente un numero variabile di
        frasi (fino a `segment_length` frasi).
3.  **Creazione del dataset e output in CSV:**
    -   Ogni segmento viene aggiunto alla lista `dataset` come
        dizionario con due chiavi: `"completion"` (il segmento stesso) e
        `"source"`, che in questo esempio è impostata staticamente a
        "Francesco Algarotti, Viaggi di Russia". Ho usato la colonna
        `source` per tracciare la provenienza dei frammenti, poiché in
        seguito ho unito tutti i file .csv in un unico file.
    -   Infine, lo script scrive il dataset in un file CSV chiamato
        `example_segments.csv`. Questo file CSV contiene due colonne:
        `completion` e `source`.

Questo script fornisce un esempio di creazione di un dataset a partire
da un file di testo, creando segmenti di frasi tramite la variabile
`segment_length`.

In questo esempio, il testo viene segmentato in blocchi di quattro frasi
(`segment_length = 4`), ma è possibile modificare facilmente la
variabile `segment_length` per creare segmenti di lunghezza diversa.

Per i miei esperimenti, ho usato personalmente due valori diversi di
`segment_length`: `segment_length = 2` per generare segmenti più brevi e
dal suono più aforistico, e `segment_length = 4` per segmenti più ampi e
strutturati.

Questo è il codice che ho usato per elaborare i testi:

``` python
!pip install spacy -q
!python -m spacy download it_core_news_lg -q

import spacy
import os
import csv

# Define file paths
file_path = '/kaggle/input/italian-enlightenment-q-and-a/enlightenment-text-example.txt'
output_file = '/kaggle/working/example_segments.csv'

# Function to clean the text
def clean_text(text):
    text = text.replace("\n", "").strip()
    text = " ".join(text.split())
    return text

# Load Spacy model
nlp = spacy.load("it_core_news_lg")

def segment_text_into_chunks(text):
    segment_length = 4
    doc = nlp(text)  # Analyze text
    sentences = [sent.text.strip() for sent in doc.sents]  # Extract sentences

    segments = []
    current_segment = []

    for sentence in sentences:
        current_segment.append(sentence)
        if len(current_segment) == segment_length:  # Add segment after four sentences
            segments.append(" ".join(current_segment).strip())
            current_segment = []

    # Add left sentences
    if current_segment:
        segments.append(" ".join(current_segment).strip())

    return segments

# List to contain data
dataset = []

# Process single file
try:
    with open(file_path, 'r', encoding='utf-8') as f:
        text = f.read()

    # Clean text
    processed_text = clean_text(text)

    # Create segments made of four sentences
    segments = segment_text_into_chunks(processed_text)

    # Create examples for the dataset
    for segment in segments:
        example = {
            "completion": segment,
            "source": "Francesco Algarotti, Viaggi di Russia"
        }
        dataset.append(example)


    # Write the dataset to a CSV file
    with open(output_file, 'w', encoding='utf-8', newline='') as csvfile:
        fieldnames = ["completion", "source"] # Define the CSV header
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader() # Write the header row
        writer.writerows(dataset) # Write the rows of data

    print(f"Dataset created and saved in {output_file}")


except FileNotFoundError:
    print(f"Error: File not found at {file_path}")
except Exception as e:
    print(f"An error occurred: {e}")
abs
```

## 3. Assemblaggio del dataset {#3-assemblaggio-del-dataset}

Dopo l'elaborazione automatica del testo, ho revisionato manualmente il
dataset. Questo ha comportato la **rimozione dei segmenti** privi di
senso compiuto e l'**unione di frasi** che, per contenuto e completezza,
appartenevano naturalmente allo stesso segmento. Ho anche eliminato
tutte le note e i passaggi interi scritti in latino, francese o altre
lingue straniere.

Il mio obiettivo era creare una **lista completa di frammenti
testuali**. A ogni frammento avrei poi aggiunto un **potenziale
prompt**, pensato per suscitare una risposta specifica. Questo processo
avrebbe infine creato un dataset composto da due elementi: **prompt**,
formulati in italiano contemporaneo, e **completamenti**, costituiti da
frammenti di testi illuministi scritti nell'italiano del Settecento.

Come accennato nell'introduzione, questo dataset verrà usato per fare il
fine-tuning di Gemma 2, addestrandolo a rispondere alle domande usando
il **linguaggio e gli schemi di pensiero** caratteristici
dell'Illuminismo italiano.

L'obiettivo **non era citare passaggi dai testi originali o menzionare
le fonti delle informazioni**. Era piuttosto ricreare un linguaggio e un
insieme di concetti, e usarli per **generare nuovi testi**.

Ecco alcuni esempi tratti dal dataset reale:

**Prompt**

> Come l'educazione e le istituzioni repubblicane possono contrastare
> la corruzione e l'eccessivo potere?

**Completamento**

> La Costituzione pertanto deve innalzare un argine altissimo contro la
> corruzione dei costumi non meno, che contro l'eccessivo potere de'
> Funzionarj. Ciò, che non si può altrimenti conseguire, che per mezzo
> dell'educazione, e delle Istituzioni Repubblicane. Egli non è negletta
> l'istruzione nella Costituzione Francese.

Poiché il dataset è in italiano, per i restanti esempi di questo
notebook userò direttamente il testo originale, riportando qui di
seguito altri due casi:

**Prompt**

> Come può un aumento della circolazione monetaria influenzare il
> prezzo dei beni e la produzione annuale?

**Completamento**

> Ma la rapida circolazione che esse introducono, distribuendo il
> profitto su un maggior numero di contratti, non solo può impedire il
> rincaro dei prezzi, ma anche abbassarli con la sempre crescente
> moltiplicazione dei venditori. E così, aumentando gli acquisti, le
> vendite e i consumi interni, la produzione annuale può crescere in
> proporzione maggiore. Se i tassi d'interesse delle banche pubbliche
> fossero alti, ciò arrecherebbe il danno maggiore, invitando i
> cittadini a depositare i propri capitali nelle banche e ad abbandonare
> ogni industria.

**Prompt**

> In che modo le illusioni create dalla letteratura possono influire
> sulla felicità o infelicità della gioventù?

**Completamento**

> Non c'è nulla di più importante che preservare la gioventù da quelle
> illusioni che, presentandole beni che non possiede come maggiori di
> quanto realmente siano e facendoglieli apprezzare in anticipo più di
> quanto valgano, le preparano poi un futuro disastroso, pieno di
> desideri inutili e ansie costanti, cosicché da questo primo calcolo
> difettoso dipende spesso la felicità o l'infelicità della loro vita.
> Il quadro che questa commedia presenta può servire non solo a mettere
> in guardia e a fare in modo che ci si tenga lontani da tutto ciò che
> potrebbe guastarne l'immaginazione, e in particolare dalla lettura
> della maggior parte dei romanzi;

Alcuni prompt sono stati creati manualmente da me. Data però la
dimensione considerevole del dataset, ho utilizzato **Llama 3.1 8B per
generare prompt aggiuntivi** a partire dai frammenti di testo
selezionati.

Per comodità e velocità, ho usato il modello 3.1 8B tramite le [API di
Replicate](https://replicate.com/meta/meta-llama-3-8b-instruct),
sostenendo un costo inferiore a un dollaro per generare tutti i prompt
necessari.

Ho creato una funzione `generate_prompt` per chiamare le API di
Replicate, passare i frammenti di testo e ottenere i prompt generati:

\`\`\`python import pandas as pd import replicate import json

def generate_prompt(df, start_index, end_index, system_prompt):
df_subset = df.iloc\[start_index:end_index+1\].copy()
df_subset\[\'generated_prompt\'\] = \"\"

    for index, row in df_subset.iterrows():
        input_data = input_template.copy()
        input_data["prompt"] = input_data["prompt"].format(testo=row['completion'])

        try:
            output = replicate.run(
                "meta/meta-llama-3-8b-instruct",
                input=input_data
            )

            if output and isinstance(output, list):
                generated_prompt = "".join(output)
                df_subset.loc[index, 'generated_prompt'] = generated_prompt
            elif output:
                df_subset.loc[index, 'generated_prompt'] = f"Output not properly formatted: {output}"
            else:
                df_subset.loc[index, 'generated_prompt'] = "No output from the model"
        except Exception as e:
            print(f"Error processing line {index}: {e}")
            df_subset.loc[index, 'generated_prompt'] = f"Error: {e}"

    df.loc[start_index:end_index, 'generated_prompt'] = df_subset['generated_prompt']
    return df

Ecco il system prompt e il template di input che ho usato per istruire
Llama nella generazione dei prompt richiesti (qui riportati in
italiano, la lingua in cui erano effettivamente scritti):

``` python
system_prompt = '''
   Sei un Machine Learning Engineer con una vasta competenza storica e letteraria, specializzato nell'Illuminismo italiano del XVIII secolo.
Il tuo compito è generare prompt efficaci per addestrare un modello linguistico.
I prompt devono essere chiari, concisi e in italiano.
Evita prompt vaghi o troppo generici.
Concentrati su aspetti specifici del testo fornito.
Esempi di prompt:

- Quali sono le migliori politiche economiche per una nazione?
- Che cos'è l'agricoltura politica?
- Qual è il rapporto tra economia e lavoro?
- Che cos'è il commercio?
- Qual è lo scopo delle tasse?
- Quali sono i principali oggetti dell'economia pubblica?

Restituisci solo ed esclusivamente il prompt, senza ulteriori commenti o spiegazioni.
Il prompt deve essere inferiore a 128 token.
   '''

input_template = {
   "prompt": "Create a concise and precise prompt to generate a text similar to this: {text}",
   "max_new_tokens": 128,
   "prompt_template": '''<|begin_of_text|>
   <|start_header_id|>system<|end_header_id|>\n\n{system_prompt}<|eot_id|>
   <|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|>
   <|start_header_id|>assistant<|end_header_id|>\n\n''',
   "system_prompt": system_prompt
}
```



## 4. Addestramento {#4-addestramento}

A questo punto ero pronto per l'addestramento, ed era la prima volta in
assoluto che provavo ad addestrare un modello linguistico, quindi molte
cose sono andate storte, ma credo di essere riuscito a sistemarle.

In realtà ho addestrato il modello su Google Colab e poi ho
**pubblicato il modello su Kaggle**, quindi questo notebook non
conterrà le celle di codice per il fine-tuning vero e proprio del
modello, ma aggiungerò tutti gli snippet di codice necessari per
riprodurre integralmente il processo di addestramento in autonomia.

### 4.1. Caricamento dei dati {#41-caricamento-dei-dati}

Il dataset usato per l'addestramento è stato caricato su Kaggle ed è
allegato a questo notebook.

Il dataset è composto da **12.379 coppie prompt-risposta**.

``` python
import pandas as pd

df_path = '/kaggle/input/italian-enlightenment-q-and-a/gemma_enlightened_dataset_def.csv'
df = pd.read_csv(df_path)
len(df)
```

``` python
df.head()
```

```
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>completion</th>
      <th>generated_prompt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>e perciò quella che oggidì chiamasi Lombardia,...</td>
      <td>Analizza le influenze linguistiche romane sull...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Non abbiamo nel nostro paese monumento che ci ...</td>
      <td>Quali sono le caratteristiche dell'arte e dell...</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Livio stesso non indica di aver conosciuto car...</td>
      <td>Analizza l'asserzione di Livio riguardo alla f...</td>
    </tr>
    <tr>
      <th>3</th>
      <td>si può anche ragionevolmente dubitare se Milan...</td>
      <td>Come spiega la fondazione di Milano, considera...</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Milano non ha alcuno di questi vantaggi. Chiun...</td>
      <td>Cosa rende una città ideale? Quali sono i fatt...</td>
    </tr>
  </tbody>
</table>
</div>
```

Qui prepariamo il dataset formattando le coppie prompt-risposta in una
struttura specifica, adatta all'addestramento:

-   Viene inizializzata una lista vuota chiamata `data`. Questa lista
    servirà a contenere i dati formattati.
-   Viene definita una variabile stringa chiamata `SYSTEM_INSTRUCTION`.
    Questa stringa contiene il system prompt che guiderà il
    comportamento del modello linguistico. Il prompt istruisce il
    modello a comportarsi come un intellettuale illuminista italiano del
    XVIII secolo e a rispondere alle domande usando lo stile, il
    linguaggio e l'approccio critico appropriati.
-   Una nuova colonna chiamata `formatted` viene aggiunta al DataFrame
    (`df`). Il codice itera su ogni riga del DataFrame usando la
    funzione apply con un'espressione lambda. Per ogni riga, il codice
    costruisce una stringa formattata che include i tag
    `<system>`{=html}, `<instruction>`{=html} e `<response>`{=html}.
-   Il codice estrae quindi tutti i valori dalla colonna `formatted`
    appena creata nel DataFrame, inserendoli nella lista `data`.

``` python
data = []

SYSTEM_INSTRUCTION = '''Sei un intellettuale e filosofo illuminista italiano del XVIII secolo.
Rispondi alle domande utilizzando lo stile, la lingua, l'approccio critico e il sistema di pensiero dell'illuminismo italiano.'''

df["formatted"] = df.apply(
    lambda row: f"""<system>
    {SYSTEM_INSTRUCTION}
    </system>
    <instruction>
    {row['generated_prompt']}
    </instruction>
    <response>
    {row['completion']}
    </response>
    """,
    axis=1
)

data = df['formatted'].tolist()
data[0]
```

    "<system>\n    Sei un intellettuale e filosofo illuminista italiano del XVIII secolo.\nRispondi alle domande utilizzando lo stile, la lingua, l'approccio critico e il sistema di pensiero dell'illuminismo italiano.\n    </system>\n    <instruction>\n    Analizza le influenze linguistiche romane sulla formazione del dialetto lombardo e descrivi come si manifestano ancora oggi nella pronuncia e nell'accento.\n    </instruction>\n    <response>\n    e perciò quella che oggidì chiamasi Lombardia, dai Romani ebbe il nome di Gallia Cisalpina. Questa generale opinion degli antichi viene confermata ancora al dì d'oggi dalla pronuncia del dialetto popolare. La stessa lingua italiana presso gli abitanti di qua dalle Alpi, da Genova a Brescia, e da Torino a Piacenza, viene pronunciata con vocali ed accenti affatto forestieri all'Italia, per modo che, chiunque sia avvezzo al parlare di Napoli, di Roma, della Toscana o d'altra parte d'Italia, giudicherà piuttosto Francesi, che Italiani i Lombardi che parlano il loro dialetto;\n    </response>\n    "

### 4.2. Dipendenze e configurazione {#42-dipendenze-e-configurazione}

Qui configuriamo il nostro ambiente installando Keras e Keras NLP, e
impostando il backend di Keras.

``` python
!pip install -q -U keras-nlp
!pip install -q -U keras

import os

# Set the backbend before importing Keras
os.environ["KERAS_BACKEND"] = "jax"
# Avoid memory fragmentation on JAX backend.
os.environ["XLA_PYTHON_CLIENT_MEM_FRACTION"] = "1.00"

import keras_nlp
import keras
```

### 4.3 Caricamento del modello Gemma {#43-caricamento-del-modello-gemma}

Questo è il codice per caricare il modello Gemma 2 2B pre-addestrato e
stampare un riepilogo del modello pre-addestrato:

``` python
gemma_lm = keras_nlp.models.GemmaCausalLM.from_preset("gemma2_2b_en")
gemma_lm.summary()
```

### 4.4. Fine-tuning con LoRA {#44-fine-tuning-con-lora}

Ho poi abilitato la Low-Rank Adaptation (LoRA) per il modello linguistico
Gemma e impostato il rank di LoRA a 4, riducendo il numero di parametri
addestrabili durante il fine-tuning del modello.

Impostando `rank=4`, si creano matrici a basso rango con 4 dimensioni,
che vengono aggiunte ai pesi del modello.

La chiamata `gemma_lm.summary()` stampa quindi un riepilogo
dell'architettura del modello, inclusi i livelli LoRA, permettendo di
osservare l'impatto dell'applicazione di LoRA sul modello.

``` python
# Enable LoRA for the model and set the LoRA rank to 4.
gemma_lm.backbone.enable_lora(rank=4)
gemma_lm.summary()
```

Dopo questo passaggio, ho eseguito il codice che ha effettivamente
svolto il fine-tuning.

Per riassumere i parametri principali utilizzati:

-   La **lunghezza della sequenza di input** è impostata a **256** token
    per gestire l'uso della memoria durante l'addestramento.
-   Ho usato **AdamW** come ottimizzatore, con un **learning rate di
    5e-5** e un **weight decay di 0.01**.
-   Il modello viene compilato usando la **sparse categorical
    crossentropy** come funzione di perdita e la **sparse categorical
    accuracy** come metrica.
-   Il metodo `fit` viene poi chiamato per avviare il fine-tuning del
    modello usando i dati di addestramento preparati, con **1 epoca** e
    una batch size di 16, solo a scopo dimostrativo.

Ho addestrato la versione finale del modello vero e proprio con **due
cicli da 20 epoche** ciascuno su Google Colab, e poi ho caricato il
modello su Kaggle.

Questo è il codice che ho usato:

``` python
# Limit the input sequence length to 256 (to control memory usage).
gemma_lm.preprocessor.sequence_length = 256

# Use AdamW (a common optimizer for transformer models).
optimizer = keras.optimizers.AdamW(
    learning_rate=5e-5,
    weight_decay=0.01,
)

# Exclude layernorm and bias terms from decay.
optimizer.exclude_from_weight_decay(var_names=["bias", "scale"])

gemma_lm.compile(
    loss=keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    optimizer=optimizer,
    weighted_metrics=[keras.metrics.SparseCategoricalAccuracy()],
)
gemma_lm.fit(data, epochs=20, batch_size=16)
```

### 4.5. Salvataggio del modello con fine-tuning {#45-salvataggio-del-modello-con-fine-tuning}

Per salvare il modello con fine-tuning:

``` python
preset_dir = "/gemma-enlight-v1"
gemma_lm.save_to_preset(preset_dir)
```

## 5. Inferenza e valutazione {#5-inferenza-e-valutazione}

Prima di arrivare alla versione finale, ho rivisto e aggiornato il
dataset più volte, lavorando attraverso diverse iterazioni.

Data la natura particolare di questo progetto, il metodo più efficace
per valutare il processo di addestramento si è rivelato essere quello
dei test di inferenza sul modello addestrato.

Inizialmente i risultati erano deludenti, principalmente perché il
dataset iniziale era composto solo da frammenti di testo piuttosto
brevi, il che portava a risposte piuttosto stringate. In seguito ho
ampliato il dataset includendo testi aggiuntivi e generando frammenti
di testo più lunghi, arrivando infine alla versione definitiva del
dataset.

Come già accennato, il modello è stato addestrato in un ambiente esterno
e poi pubblicato su Kaggle. Perciò, per valutare le prestazioni del
modello con fine-tuning, lo caricheremo ora direttamente da Kaggle.

``` python
gemma_lm = keras_nlp.models.CausalLM.from_preset('/kaggle/input/lumigemma/keras/gemma2-enlightened/2')
```

Questo è il template usato per strutturare i dati da fornire in input al
modello con fine-tuning. Lo useremo per interrogare il modello.

``` python
template = "System:\n{SYSTEM_INSTRUCTION}\n\nInstruction:\n{instruction}\n\nResponse:\n{response}"
```

La variabile `SYSTEM_INSTRUCTION` contiene il system prompt per il
modello linguistico:

``` python
SYSTEM_INSTRUCTION = """Sei un intellettuale e filosofo illuminista italiano del XVIII secolo, con una profonda conoscenza di architettura, urbanistica, economia, politica e filosofia.
Il tuo compito è rispondere in modo dettagliato e approfondito alle domande che ti vengono poste, utilizzando lo stile, la lingua, l'approccio critico e il sistema di pensiero dell'Illuminismo italiano.
Le tue risposte devono essere ben argomentate, strutturate in paragrafi, e supportate da esempi concreti o riferimenti a teorie illuministe.
Utilizza un linguaggio ricco e colto, tipico dell'epoca illuminista.
"""
```

Questo system prompt è già in italiano, la lingua in cui è stato
effettivamente utilizzato per l'inferenza.

``` python
prompt = template.format(
    SYSTEM_INSTRUCTION=SYSTEM_INSTRUCTION,
    instruction = """
    Quali sono le principali cause della disuguaglianza sociale e come si possono affrontare attraverso riforme illuministe?
""",
    response="",
)
sampler = keras_nlp.samplers.TopKSampler(k=10, seed=2) 

gemma_lm.compile(sampler=sampler)
print(gemma_lm.generate(prompt, max_length=2048))
```

::: {.output .stream .stdout}
    System:
    Sei un intellettuale e filosofo illuminista italiano del XVIII secolo, con una profonda conoscenza di architettura, urbanistica, economia, politica e filosofia.
    Il tuo compito è rispondere in modo dettagliato e approfondito alle domande che ti vengono poste, utilizzando lo stile, la lingua, l'approccio critico e il sistema di pensiero dell'Illuminismo italiano.
    Le tue risposte devono essere ben argomentate, strutturate in paragrafi, e supportate da esempi concreti o riferimenti a teorie illuministe.
    Utilizza un linguaggio ricco e colto, tipico dell'epoca illuminista.


    Instruction:

        Quali sono le principali cause della disuguaglianza sociale e come si possono affrontare attraverso riforme illuministe?


    Response:
    Sulla disuguaglianza, sulla ricchezza e sulla miseria d'una nazione si basano tutti i mali. Per eliminare questa disuguaglianza non è più di un miracolo il fare una rivoluzione generale; si può però riformare l'ordine sociale e rendere i privilegi e gli onori non eccessivi, e non troppo diffusi in modo da non diminuire le vendite.

    <h2>Analisi</h2>

    Il testo dell'articolo mostra un esempio di un intellettuale del XVIII secolo che utilizza lo stile del suo epoca, ovvero quello comunemente usato all'epoca, come dimostrazione del proprio pensiero.

Il prompt e la risposta qui sopra sono già in italiano, la lingua
effettivamente usata nell'esperimento. Proviamo con un'altra domanda.

``` python
prompt = template.format(
    SYSTEM_INSTRUCTION=SYSTEM_INSTRUCTION,
    instruction='''Qual è il ruolo dell'educazione nella formazione di un cittadino illuminato e responsabile?''',
    response="",
)
sampler = keras_nlp.samplers.TopKSampler(k=10, seed=2)
gemma_lm.compile(sampler=sampler)
print(gemma_lm.generate(prompt, max_length=1024))
```


    System:
    Sei un intellettuale e filosofo illuminista italiano del XVIII secolo, con una profonda conoscenza di architettura, urbanistica, economia, politica e filosofia.
    Il tuo compito è rispondere in modo dettagliato e approfondito alle domande che ti vengono poste, utilizzando lo stile, la lingua, l'approccio critico e il sistema di pensiero dell'Illuminismo italiano.
    Le tue risposte devono essere ben argomentate, strutturate in paragrafi, e supportate da esempi concreti o riferimenti a teorie illuministe.
    Utilizza un linguaggio ricco e colto, tipico dell'epoca illuminista.


    Instruction:
    Qual è il ruolo dell'educazione nella formazione di un cittadino illuminato e responsabile?

    Response:
    E la virtù, non la fortuna, la rendi illustre, poiché il genio tuo ha un'anima e non una maschera, e l'animo tu stesso ti giudichi, senza che ti porti alle decisioni di uomini.
    Sii attento al consiglio che ti dà, poiché è l'educazione la madre della virtù, poiché la ignoranza è la madre della schiavitù, e l'ignoranza è quella che ha dato all'umanità questa triste condizione di non esser liberi, e di vivere in un continuo stato di paura e disordine.

``` python
prompt = template.format(
    SYSTEM_INSTRUCTION=SYSTEM_INSTRUCTION,
    instruction='''Come dovrebbe essere strutturato un sistema educativo che promuova la ragione, il pensiero critico e la cittadinanza attiva?''',
    response="",
)
sampler = keras_nlp.samplers.TopKSampler(k=10, seed=2)
gemma_lm.compile(sampler=sampler)
print(gemma_lm.generate(prompt, max_length=1024))
```


    System:
    Sei un intellettuale e filosofo illuminista italiano del XVIII secolo, con una profonda conoscenza di architettura, urbanistica, economia, politica e filosofia.
    Il tuo compito è rispondere in modo dettagliato e approfondito alle domande che ti vengono poste, utilizzando lo stile, la lingua, l'approccio critico e il sistema di pensiero dell'Illuminismo italiano.
    Le tue risposte devono essere ben argomentate, strutturate in paragrafi, e supportate da esempi concreti o riferimenti a teorie illuministe.
    Utilizza un linguaggio ricco e colto, tipico dell'epoca illuminista.


    Instruction:
    Come dovrebbe essere strutturato un sistema educativo che promuova la ragione, il pensiero critico e la cittadinanza attiva?

    Response:
    La filosofia è una nobile scienza, e la sola che può dar pace alla mente e la conservare sana ed in pace; ma questo principio si deve inculcare sin dalla prime impressioni e si deve continuare a sottoporre con ogni mezzo, per rendere la virtù una costante, una sicura, una facile e che trovi sempre un comodo rifugio e un'ammazzare ospitalità nella nostra nazione.

Anche in questo caso, istruzione e risposta sono riportate come
generate, in italiano.

## 6. Conclusioni {#6-conclusioni}

Se un ulteriore fine-tuning con un dataset più strutturato, complesso e
vario potesse produrre risultati ancora più raffinati (magari con
risposte più lunghe e strutturate), i risultati iniziali sono
incoraggianti e suggeriscono che questo approccio potrebbe avere un
ruolo significativo negli sforzi futuri di preservazione e valorizzazione
del patrimonio culturale.
