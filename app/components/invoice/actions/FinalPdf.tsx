"use client";

// ShadCn
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Components
import { BaseButton, SendPdfToEmailModal, Subheading } from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";
import { useInvoiceContext } from "@/contexts/InvoiceContext";

// Icons
import {
    BookmarkIcon,
    DownloadCloudIcon,
    Eye,
    Mail,
    MoveLeft,
    Printer,
} from "lucide-react";

export default function FinalPdf() {
    const { _t } = useTranslationContext();
    const {
        pdfUrl,
        removeFinalPdf,
        previewPdfInTab,
        downloadPdf,
        printPdf,
        saveInvoice,
        sendPdfToMail,
    } = useInvoiceContext();

    return (
        <>
            <Subheading>{_t("actions.finalPdf.heading")}</Subheading>
            <div className="flex items-center mb-3">
                <BaseButton
                    variant={"ghost"}
                    size="sm"
                    onClick={removeFinalPdf}
                >
                    <MoveLeft className="w-5 h-5" />
                    {_t("actions.finalPdf.backToPreview")}
                </BaseButton>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 my-1">
                <BaseButton
                    tooltipLabel={_t("actions.finalPdf.previewTooltip")}
                    onClick={previewPdfInTab}
                    size="sm"
                    variant={"outline"}
                >
                    <Eye className="w-5 h-5" />
                    {_t("actions.finalPdf.preview")}
                </BaseButton>
                <BaseButton
                    tooltipLabel={_t("actions.finalPdf.downloadTooltip")}
                    onClick={downloadPdf}
                    size="sm"
                    variant={"outline"}
                >
                    <DownloadCloudIcon className="w-5 h-5" />
                    {_t("actions.finalPdf.download")}
                </BaseButton>

                <BaseButton
                    tooltipLabel={_t("actions.finalPdf.printTooltip")}
                    onClick={printPdf}
                    size="sm"
                    variant={"outline"}
                >
                    <Printer className="w-5 h-5" />
                    {_t("actions.finalPdf.print")}
                </BaseButton>

                <BaseButton
                    tooltipLabel={_t("actions.finalPdf.saveTooltip")}
                    onClick={saveInvoice}
                    size="sm"
                    variant={"outline"}
                >
                    <BookmarkIcon className="w-5 h-5" />
                    {_t("actions.finalPdf.save")}
                </BaseButton>

                <SendPdfToEmailModal sendPdfToMail={sendPdfToMail}>
                    <BaseButton
                        tooltipLabel={_t("actions.finalPdf.sendToMailTooltip")}
                        size="sm"
                        variant={"outline"}
                    >
                        <Mail className="w-5 h-5" />
                        {_t("actions.finalPdf.sendToMail")}
                    </BaseButton>
                </SendPdfToEmailModal>
            </div>
            <AspectRatio ratio={1 / 1.4}>
                <iframe
                    className="h-full w-full rounded-xl"
                    src={`${pdfUrl}#toolbar=0`}
                />
            </AspectRatio>
        </>
    );
}
