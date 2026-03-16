"use client";

import React, { useState } from "react";

// ShadCn
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Components
import { BaseButton } from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

// Helpers
import { isValidEmail } from "@/lib/helpers";

type SendPdfToEmailModalProps = {
    sendPdfToMail: (email: string) => Promise<void>;
    children: React.ReactNode;
};

const SendPdfToEmailModal = ({
    sendPdfToMail,
    children,
}: SendPdfToEmailModalProps) => {
    const { _t } = useTranslationContext();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const errorMessage = _t("modals.sendPdfModal.errorInvalidEmail");

    const handleSendPdf = () => {
        setLoading(true);

        if (isValidEmail(email)) {
            sendPdfToMail(email).finally(() => {
                setError("");
                setLoading(false);
                setEmail("");
                setOpen(false);
            });
        } else {
            setLoading(false);
            setError(errorMessage);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{_t("modals.sendPdfModal.title")}</DialogTitle>
                    <DialogDescription>
                        {_t("modals.sendPdfModal.description")}
                    </DialogDescription>
                </DialogHeader>
                <Label>{_t("modals.sendPdfModal.emailLabel")}</Label>
                <Input
                    type="email"
                    placeholder={_t("modals.sendPdfModal.emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></Input>

                {!loading && error && (
                    <small style={{ color: "red" }}>{error}</small>
                )}

                <BaseButton
                    tooltipLabel={_t("modals.sendPdfModal.sendTooltip")}
                    loading={loading}
                    loadingText={_t("modals.sendPdfModal.sendLoading")}
                    onClick={handleSendPdf}
                >
                    {_t("modals.sendPdfModal.sendButton")}
                </BaseButton>
            </DialogContent>
        </Dialog>
    );
};

export default SendPdfToEmailModal;
