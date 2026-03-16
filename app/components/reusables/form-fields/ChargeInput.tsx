"use client";

import React from "react";

// RHF
import { useFormContext } from "react-hook-form";

// ShadCn
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Components
import { BaseButton } from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

// Icons
import { Percent, RefreshCw } from "lucide-react";

// Types
import { NameType } from "@/types";

type ChargeInputProps = {
    label: string;
    name: NameType;
    switchAmountType: (
        type: string,
        setType: React.Dispatch<React.SetStateAction<string>>
    ) => void;
    type: string;
    setType: React.Dispatch<React.SetStateAction<string>>;
    currency: string;
};

const ChargeInput = ({
    label,
    name,
    switchAmountType,
    type,
    setType,
    currency,
}: ChargeInputProps) => {
    const { _t } = useTranslationContext();
    const { control } = useFormContext();

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-sm font-medium text-muted-foreground">
                <div className="text-left">{label}:</div>



                <div className="flex items-center gap-1">
                    <BaseButton
                        variant="ghost"
                        size="icon"
                        onClick={() => switchAmountType(type, setType)}
                        tooltipLabel={_t("actions.reset")}
                    >
                        <RefreshCw />
                    </BaseButton>

                    <FormField
                        control={control}
                        name={name}
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex justify-between items-center text-sm">
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className="w-full sm:w-[7rem]"
                                            placeholder={label}
                                            type="number"
                                            min="0"
                                            max="1000000"
                                            step="0.01"
                                        />

                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {type == "percentage" ? <Percent /> : <div>{currency}</div>}
                </div>
            </div>
        </>
    );
};

export default ChargeInput;
