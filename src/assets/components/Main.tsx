import type { ReactElement } from "react";
import type { Anime } from "../../interfaces/anime";
import { getCurrentlyWatchingAnime } from "../../utils/animelist";
import Card from "./Card";

/**
 * Main komponenten.
 * @returns komponent.
 */
export default function Main(): ReactElement {

    // CSS regler för main elementet.
    const mainStyle = {
        flex: 1,
        backgroundColor: "#222222",
        color: "white",
        margin: "0 auto",
        padding: "1rem",
        width: "1200px",
        maxWidth: "95vw"
    };

    // Hämtar anime.
    const currentlyWatching: Array<Anime> = getCurrentlyWatchingAnime();

    return (
        <main style={mainStyle} className="container">
            <h2 className="text-2xl">Currently Watching</h2>
            <div className="flex justify-evenly flex-wrap gap-x-8 gap-y-4">
                {currentlyWatching.map((anime, index) => <Card anime={anime} key={index} />)}
            </div>
        </main>
    );
}