import type { ReactElement } from "react";


export default function Header({ title, banner }: { title: string, banner: string }): ReactElement {
    const headerStyle: string = "bg-orange-500 text-center py-4";

    return (
        <>
            <header className={headerStyle}>
                <h1 className="font-bold text-3xl">{title}</h1>
            </header>
            <img src={banner} width="4000" height="1200" className="w-300 max-w-screen md:max-w-[95vw] mx-auto mt-10 md:rounded-t-2xl" alt="Banner with a bunch of So I'm a Spider, So What? novels." />
        </>
    );
}