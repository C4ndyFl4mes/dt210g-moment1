

export default function Main() {
    const mainStyle = {
        flex: 1,
        backgroundColor: "#222222",
        color: "white",
        margin: "0 auto",
        padding: "1rem",
        width: "1200px",
        maxWidth: "95vw"
    };

    return (
        <main style={mainStyle} className="container">
            <h2 className="text-2xl">Currently Watching</h2>
        </main>
    );
}