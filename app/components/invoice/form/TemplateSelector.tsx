"use client";

import Image from "next/image";

// RHF
import { useFormContext } from "react-hook-form";

// ShadCn
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

// Components
import {
    BaseButton,
    InvoiceTemplate1,
    InvoiceTemplate2,
} from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

// Template images
import template1 from "@/public/assets/img/invoice-1-example.png";
import template2 from "@/public/assets/img/invoice-2-example.png";

// Icons
import { Check } from "lucide-react";

// Types
import { InvoiceType } from "@/types";

const TemplateSelector = () => {
    const { _t } = useTranslationContext();
    const { watch, setValue } = useFormContext<InvoiceType>();
    const formValues = watch();
    const templates = [
        {
            id: 1,
            name: _t("form.steps.invoiceDetails.templates.template1.name"),
            description: _t("form.steps.invoiceDetails.templates.template1.description"),
            img: template1,
            component: <InvoiceTemplate1 {...formValues} />,
        },
        {
            id: 2,
            name: _t("form.steps.invoiceDetails.templates.template2.name"),
            description: _t("form.steps.invoiceDetails.templates.template2.description"),
            img: template2,
            component: <InvoiceTemplate2 {...formValues} />,
        },
    ];
    return (
        <>
            <div>
                <Label>{_t("form.steps.invoiceDetails.templateSelector.label")}</Label>

                <div>
                    <Card>
                        <CardHeader>
                            {_t("form.steps.invoiceDetails.templateSelector.title")}
                            <CardDescription>
                                {_t("form.steps.invoiceDetails.templateSelector.description")}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="">
                            <div className="flex overflow-x-auto">
                                {templates.map((template, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col flex-shrink-0 mr-4 gap-y-3"
                                    >
                                        <p>{template.name}</p>

                                        <div className="relative">
                                            {formValues.details.pdfTemplate ===
                                                template.id && (
                                                <div className="shadow-lg absolute right-2 top-2 rounded-full bg-blue-300 dark:bg-blue-600">
                                                    <Check />
                                                </div>
                                            )}
                                            <Image
                                                src={template.img}
                                                alt={template.name}
                                                width={300}
                                                height={700}
                                                placeholder="blur"
                                                className="cursor-pointer rounded-lg border-2 hover:border-blue-600"
                                                onClick={() =>
                                                    setValue(
                                                        "details.pdfTemplate",
                                                        template.id
                                                    )
                                                }
                                            />
                                            {/* {template.component} */}
                                        </div>

                                        <BaseButton
                                            onClick={() =>
                                                setValue(
                                                    "details.pdfTemplate",
                                                    template.id
                                                )
                                            }
                                        >
                                            {_t("form.steps.invoiceDetails.templateSelector.selectButton")}
                                        </BaseButton>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default TemplateSelector;
