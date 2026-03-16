"use client";

import { useParams } from "next/navigation";

// Next Intl
import { useRouter } from "@/i18n/navigation"; // This useRouter is wrapped with next/navigation useRouter

// ShadCn
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Variables
import { LOCALES } from "@/lib/variables";

import { useTranslationContext } from "@/contexts/TranslationContext";

const LanguageSelector = () => {
    const { _t } = useTranslationContext();
    const router = useRouter();
    const params = useParams();

    const handleLanguageChange = (lang: string) => {
        router.push("/", { locale: lang });
    };
    return (
        <Select
            value={params.locale!.toLocaleString()}
            onValueChange={(lang) => handleLanguageChange(lang)}
        >
            <SelectTrigger
                className="w-full sm:w-[10rem] relative"
                aria-label="Languages"
            >
                <Badge className="absolute -top-3 -right-2 font-normal scale-[0.65] whitespace-nowrap px-1.5 py-0 select-none pointer-events-none border-blue-200 dark:border-blue-900 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    BETA
                </Badge>

                <SelectValue placeholder={_t("languageSelector.placeholder")} />
            </SelectTrigger>
            <SelectContent
                style={{
                    overflowY: "hidden",
                    height: "min-content",
                }}
            >
                <SelectGroup>
                    <SelectLabel>{_t("languageSelector.label")}</SelectLabel>

                    {LOCALES.map((locale) => (
                        <SelectItem key={locale.code} value={locale.code}>
                            {locale.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default LanguageSelector;
