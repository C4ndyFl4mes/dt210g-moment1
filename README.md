# Moment 1 React Introduktion

## Länk till webbplatsen
Jag vet att banner bilden har lite förstor filstorlek, men det tar iaf typ ett par sekunder.
[Netlify](https://dt210-moment1-anime.netlify.app/)

## Beskrivning
Projektet består av en sida som listar animes.

## Komponenter
Det finns fyra komponenter utöver App-komponenten: Header, Main, Footer och Card.

Header har två props: titel och banner, båda av typen sträng.

Main har inga props, men hämtar anime listan från utils/animelist.ts där en funktion som skickar iväg anime listan finns. Det gjordes en funktion i en egen fil så att den stora arrayen inte låg i Main komponenten. Main loopar igenom listan med map och renderar Card för varje anime.

Footer har en prop som anger vem som gjorde webbplatsen.

Card har en prop av typen Anime. Anime är ett interface som definierar en anime enligt följande:
```ts
export interface Anime {
    title: string;
    epsWatched: number;
    isAiring: boolean;
    image: string;
}
```

## Styling
Flera olika styling metoder användes: Tailwind, en tillhörande CSS fil för komponent och objekt med styling egenskaper.
