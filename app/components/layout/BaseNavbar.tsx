"use client";

// Components
import { LanguageSelector, ThemeSwitcher } from "@/app/components";


const BaseNavbar = () => {
    return (
        <header className="lg:container z-[99] pt-4 pb-2">
            <nav className="flex justify-center sm:justify-end items-center gap-4 px-4">
                <LanguageSelector />
                <ThemeSwitcher />
            </nav>
        </header>
    );

};

export default BaseNavbar;
