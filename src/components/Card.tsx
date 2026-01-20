import type { ReactElement } from "react";
import type { Anime } from "../interfaces/anime";
import './Card.css';

/**
 * Card komponent för att visa en anime.
 * @param { anime } - ett objekt med anime information som titel, antal avsnitt sett, om nya avsnitt kommer och bild url till MyAnimeList.
 * @returns komponent.
 */
export default function Card({ anime }: {anime: Anime} ): ReactElement {
    return (
        <article className="card">
            <img src={anime.image} alt={"Anime cover from Mal for: " + anime.title} width="225" height="333" />
            <h3>{ anime.title }</h3>
            <p>Watched: <span>{anime.epsWatched}</span> {anime.epsWatched === 1 ? "episode" : "episodes"}</p>
            <small>Status: <span>{anime.isAiring ? "Currently Airing" : "Finnished"}</span></small>
        </article>
    );
}