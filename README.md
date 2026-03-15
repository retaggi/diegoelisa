# Wedding Page

Pagina statica per il matrimonio di Diego Retaggi ed Elisa Pietroni.

## File principali

- `index.html`: struttura del contenuto
- `styles.css`: grafica e responsive
- `script.js`: pulsante per copiare l'IBAN

## Personalizzazioni rapide

1. Sostituisci l'IBAN in `index.html`.
2. Sostituisci le due immagini remote in `index.html` con una vostra foto oppure con immagini di Ancona/Portonovo.
3. Se vuoi, genera un QR code che punti all'URL finale della pagina.

## Pubblicazione gratuita

### GitHub Pages

1. Crea un repository GitHub e carica questi file.
2. Vai in `Settings > Pages`.
3. In `Build and deployment`, scegli `Deploy from a branch`.
4. Seleziona il branch `main` e la cartella `/ (root)`.
5. GitHub pubblicherà la pagina su un URL del tipo `https://tuo-account.github.io/nome-repo/`.

### Netlify Drop

1. Vai su `https://app.netlify.com/drop`.
2. Trascina l'intera cartella del progetto.
3. Otterrai subito un link pubblico gratuito.

## Prova da smartphone con WSL

Se vuoi aprire la pagina sul telefono mentre il progetto gira in `WSL2`, puoi usare gli script inclusi:

```bash
cd /workspace/wedding
./serve-phone.sh
```

Lo script:

- avvia il server statico in WSL
- configura automaticamente il proxy su Windows
- apre la porta nel firewall
- stampa l'URL da aprire sul telefono

Windows potrebbe chiederti conferma amministratore con un prompt UAC.

Per fermare tutto:

```bash
./stop-phone.sh
```
