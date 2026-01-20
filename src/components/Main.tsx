import type { ReactElement } from "react";
import type { Anime } from "../interfaces/anime";
import { getCurrentlyWatchingAnime } from "../utils/animelist";
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
        marginBottom: "2rem",
        width: "1200px"
    };

    // Hämtar anime.
    const currentlyWatching: Array<Anime> = getCurrentlyWatchingAnime();

    return (
        <main style={mainStyle} className="container max-w-screen md:rounded-b-2xl md:max-w-[95vw] p-1 md:p-4 pb-12">
            <h2 className="text-2xl mb-5">Currently Watching</h2>
            <div className="flex justify-evenly flex-wrap gap-x-2 gap-y-2 md:gap-x-8 md:gap-y-4">
                {currentlyWatching.map((anime, index) => <Card anime={anime} key={index} />)}
            </div>
        </main>
    );
}