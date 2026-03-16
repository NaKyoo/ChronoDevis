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
                className="w-[10rem] relative"
                aria-label="Languages"
            >
                <Badge className="absolute -top-3 right-0 font-normal">
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
