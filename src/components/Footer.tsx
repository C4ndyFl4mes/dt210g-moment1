import type { ReactElement } from "react";

/**
 * Footer komponenten.
 * @param { theMaker } - vem som gjorde sidan.
 * @returns komponent.
 */
export default function Footer({ theMaker }: { theMaker: string }): ReactElement {
    const footerStyle: string = "bg-orange-500 text-center py-4"; // Tailwind klasser i en konstant.

    return (
        <footer className={footerStyle}>
            <p>by <span className="font-bold">{ theMaker }</span> and all covers from MyAnimeList</p>
        </footer>
    );
}