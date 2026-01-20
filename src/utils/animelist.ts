import type { Anime } from "../interfaces/anime";

// En funktion för att hämta alla anime, pga det var så många så det var bättre ha i en annan fil.
export function getCurrentlyWatchingAnime(): Array<Anime> {
    return [
        {
            title: "Roll Over and Die",
            epsWatched: 2,
            isAiring: true,
            image: "https://cdn.myanimelist.net/images/anime/1360/153435.jpg"
        },
        {
            title: "You Can't Be In a Rom-Com with Your Childhood Friends!",
            epsWatched: 3,
            isAiring: true,
            image: "https://cdn.myanimelist.net/images/anime/1729/153502.jpg"
        },
        {
            title: "Li'l Miss Vampire Can't Suck Right",
            epsWatched: 6,
            isAiring: false,
            image: "https://cdn.myanimelist.net/images/anime/1888/151887.jpg"
        },
        {
            title: "Kunon the Sorcerer Can See",
            epsWatched: 4,
            isAiring: true,
            image: "https://cdn.myanimelist.net/images/anime/1704/154459.jpg"
        },
        {
            title: "Noble Reincarnation: Born Blessed, So I'll Obtain Ultimate Power",
            epsWatched: 3,
            isAiring: true,
            image: "https://cdn.myanimelist.net/images/anime/1629/153722.jpg"
        },
        {
            title: "Kaya-chan Isn't Scary",
            epsWatched: 2,
            isAiring: true,
            image: "https://cdn.myanimelist.net/images/anime/1194/153705.jpg"
        },
        {
            title: "Scum of the Brave",
            epsWatched: 1,
            isAiring: true,
            image: "https://cdn.myanimelist.net/images/anime/1821/154043.jpg"
        },
        {
            title: "Reincarnated as a Dragon Hatchling",
            epsWatched: 2,
            isAiring: true,
            image: "https://cdn.myanimelist.net/images/anime/1031/154235.jpg"
        },
        {
            title: "Hell Mode: The Hardcore Gamer Dominates in Another World with Garbage Balancing",
            epsWatched: 2,
            isAiring: true,
            image: "https://cdn.myanimelist.net/images/anime/1151/152479.jpg"
        },
        {
            title: "Easygoing Territory Defense by the Optimistic Lord: Production Magic Turns a Nameless Village into the Strongest Fortified City",
            epsWatched: 2,
            isAiring: true,
            image: "https://cdn.myanimelist.net/images/anime/1264/153908.jpg"
        },
        {
            title: "An Adventurer's Daily Grind at Age 29",
            epsWatched: 2,
            isAiring: true,
            image: "https://cdn.myanimelist.net/images/anime/1765/154087.jpg"
        },
        {
            title: "Jack-of-All-Trades, Party of None",
            epsWatched: 3,
            isAiring: true,
            image: "https://cdn.myanimelist.net/images/anime/1486/153135.jpg"
        }
    ];
}