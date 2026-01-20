

export default function Header({ title }: { title: string }) {
    const headerStyle: string = "bg-orange-500 text-center py-4";

    return (
        <header className={headerStyle}>
            <h1 className="font-bold text-3xl">{title}</h1>
        </header>
    );
}