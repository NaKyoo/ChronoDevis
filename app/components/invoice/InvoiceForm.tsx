"use client";

import { useMemo } from "react";

// RHF
import { useFormContext, useWatch } from "react-hook-form";

// ShadCn
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// React Wizard
import { Wizard } from "react-use-wizard";

// Components
import {
    WizardStep,
    BillFromSection,
    BillToSection,
    InvoiceDetails,
    Items,
    PaymentInformation,
    InvoiceSummary,
} from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

const InvoiceForm = () => {
    const { _t } = useTranslationContext();

    const { control } = useFormContext();

    // Get invoice number variable
    const invoiceNumber = useWatch({
        name: "details.invoiceNumber",
        control,
    });

    const invoiceNumberLabel = useMemo(() => {
        if (invoiceNumber) {
            return `#${invoiceNumber}`;
        } else {
            return _t("form.newInvBadge");
        }
    }, [invoiceNumber]);

    return (
        <div className="w-full">
            <Card>
                <CardHeader className="py-2 px-4">
                    <div className="flex gap-3">
                        <CardTitle className="flex items-center gap-3">
                            <span className="uppercase text-lg">
                                {_t("form.title")}
                            </span>
                        </CardTitle>
                        <Badge variant="secondary" className="w-fit h-6">
                            <p style={{ fontSize: "12px" }}>
                                {invoiceNumberLabel}
                            </p>
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="p-4">
                    <div className="space-y-4">
                        <Wizard>
                            <WizardStep>
                                <div className="flex flex-wrap gap-4">
                                    <BillFromSection />
                                    <BillToSection />
                                </div>
                            </WizardStep>
                            <WizardStep>
                                <div className="flex flex-wrap gap-4">
                                    <InvoiceDetails />
                                </div>
                            </WizardStep>
                            <WizardStep>
                                <Items />
                            </WizardStep>
                            <WizardStep>
                                <PaymentInformation />
                            </WizardStep>
                            <WizardStep>
                                <InvoiceSummary />
                            </WizardStep>
                        </Wizard>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default InvoiceForm;
