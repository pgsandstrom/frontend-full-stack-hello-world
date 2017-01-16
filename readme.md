# The ultimate frontend 

## Introduktion

Vi rekommenderar att använda nvm för att hantera sina node-installationer.
Installera nvm och kör följande för att installera node:
```
nvm install v6.9.2
nvm use v6.9.2
nvm alias default v6.9.2
```

För att installera alla dependencies till projektet, kör följande från projektroten:

```
npm install
npm install webpack -g
npm install webpack-dev-server -g
```

Det ska nu gå att bygga projektet, testa att göra enklaste möjliga bygge med följande:
```
webpack
```

För att kontinuerligt bygga under utveckling. Detta sätter även upp en server på localhost:8080 samt en iframe:ad version med status-rapportering på localhost:8080/webpack-dev-server/
```
npm run dev
```

Detta kan kräva att du stänger av "safe write" i din IDE/editor för att fungera felfritt.
[Läs detta](https://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write)!

För att köra alla tester:
```
npm run test
```

För att bygga för produktion:
```
npm run prod
```

## Code style och formattering

Vi använder oss av eslint med Airbnbs presets. Vi försöker ha så få undantag som möjligt. Detta gör att vi har en enhetlig stil över hela projektet och blir varnade om många möjliga buggar. Se alltid till att granska alla varningar innan en commit blir pushad. Alla varningar måste inte fixas, men då ska man ha ett argument för varför de ska finnas kvar.

Det är upp till varje utvecklare att se till att man ser varningarna som eslint genererar. Effektivast är att använda en IDE som kan använda sig av .eslintrc-filerna i projektet.

## CSS

Vi använder oss av SCSS. Vi försöker gruppera properties enligt följande:
```
Positioning
Display and Box Model
Other
```
[Se exempel här](https://github.com/necolas/idiomatic-css#declaration-order). Tomma rader mellan grupperingar är inget krav, man bedömmer själv när det behövs för översikten.

## Redux

Vi använder Redux för viss data. För att avgöra vad som ska läggas i Redux, använd [detta](https://github.com/reactjs/redux/issues/1287) som riktlinje.
Våra Redux-actions görs enligt [denna design](https://github.com/acdlite/flux-standard-action).

## Språk (engelska vs svenska)

Vi använder engelska i vår kod, men domännamn översätter vi inte. Dvs får vi ett värde från backenden som heter "BeräknadKlar" så kallar vi inte variabeln för "calculatedDone", utan den kommer heta "beräknadKlar". Anledningen är enkel: Översättningar kan göras på många olika sätt och det kommer snabbt bli svårt att vara konsekvent med översättningarna. Sen blir det en extra mental ansträngning att komma ihåg översättningen för varje domännamn.

## Git

Vi följer i stort [dessa regler](http://chris.beams.io/posts/git-commit/). Det viktigaste för trevlig läsning av git-loggen är att vi använder verbmodus vi använder. När du skriver ett git-meddelande, tänk bara att det påbörjas med meningen "If applied, this commit will". Dvs skriv "Fix a crash in module X" istället för "Fixed a crash in module X".

Vi är inga git-fascister, så har man bara städat bland kommenterar så är det helt okej att skriva "Cleanup" som commit-meddelande. Däremot när man ändrar funktionalitet så ska man vara hyfsat tydlig med vad som ändrats.

## Testning

Vi använder oss av mocha, chai och enzyme som vår test-stack. Tester körs antingen genom kommandot "npm run test" eller genom att köra .manualRunner.js som en mocha-fil genom din IDE. Se filen .manualRunner.js för närmare instruktioner.

När man testar manuellt så är React Developer Tools väldigt bra. Finns till[chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) och [firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).
