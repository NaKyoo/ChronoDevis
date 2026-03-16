"use client";

// Components
import { LanguageSelector, ThemeSwitcher } from "@/app/components";

const FloatingControls = () => {
    return (
        <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-[100] flex items-center gap-1 sm:gap-2 p-1 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-full border border-slate-200 dark:border-slate-700 shadow-lg transition-all hover:bg-white dark:hover:bg-slate-900">
            <LanguageSelector />
            <ThemeSwitcher />
        </div>
    );
};

export default FloatingControls;
