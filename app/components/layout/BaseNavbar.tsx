"use client";

import { useMemo } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Assets
import Logo from "@/public/assets/img/chronodevis-logo-premium.png";

// ShadCn
import { Card } from "@/components/ui/card";

// Components
import { DevDebug, LanguageSelector, ThemeSwitcher } from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

const BaseNavbar = () => {
    return (
        <header className="lg:container z-[99] py-2">
            <nav className="flex justify-end items-center gap-2 px-4">
                <LanguageSelector />
                <ThemeSwitcher />
            </nav>
        </header>
    );
};

export default BaseNavbar;
