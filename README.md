# Bygg/installation etc
Enkel frontend till Cygni-Mashup-RxJs.

Utvecklad i angular 2 som låter dig välja mellan att visa info om antingen
Nirvana eller Neil Young.

Har en minimal serverdel som servrar frontenddelen med statiskt material. En proxy skickar "Mashup"-förfrågningar  vidare
till cygni-mashup-rxjs som måste vara i gång och lyssna på port 3001.

Kör
```bash
npm install
npm start
npm run webpack
```

Öppna sedan appen i browsern via localhost:3000

