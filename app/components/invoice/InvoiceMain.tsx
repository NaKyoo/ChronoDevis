"use client";

// RHF
import { useFormContext } from "react-hook-form";

// ShadCn
import { Form } from "@/components/ui/form";

// Components
import { InvoiceActions, InvoiceForm } from "@/app/components";

// Context
import { useInvoiceContext } from "@/contexts/InvoiceContext";

// Types
import { InvoiceType } from "@/types";

const InvoiceMain = () => {
    const { handleSubmit } = useFormContext<InvoiceType>();

    // Get the needed values from invoice context
    const { onFormSubmit } = useInvoiceContext();

    return (
        <>
            <Form {...useFormContext<InvoiceType>()}>
                <form
                    onSubmit={handleSubmit(onFormSubmit, (err) => {
                        console.log(err);
                    })}
                    className="flex flex-col grow"
                >
                    <div className="flex flex-col xl:flex-row 2xl:gap-8 gap-4 items-stretch grow">
                        <div className="flex-1 min-w-0 flex flex-col">
                            <InvoiceForm />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col">
                            <InvoiceActions />
                        </div>
                    </div>
                </form>
            </Form>
        </>
    );
};

export default InvoiceMain;
