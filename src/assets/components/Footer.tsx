

export default function Footer({ theMaker }: { theMaker: string }) {
    const footerStyle: string = "bg-orange-500 text-center py-4";
    return (
        <footer className={footerStyle}>
            <p>av { theMaker }</p>
        </footer>
    );
}