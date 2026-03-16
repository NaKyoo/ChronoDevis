// Components
import { DynamicInvoiceTemplate, Subheading } from "@/app/components";

// Types
import { InvoiceType } from "@/types";

type LivePreviewProps = {
    data: InvoiceType;
};

export default function LivePreview({ data }: LivePreviewProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="relative w-full border dark:border-gray-600 rounded-xl overflow-hidden bg-gray-50/50 dark:bg-gray-900/50">
                <div className="flex justify-center items-start w-full origin-top scale-[0.6] sm:scale-[0.7] md:scale-[0.8] xl:scale-[0.55] 2xl:scale-[0.7] transition-transform duration-300 ease-in-out h-[45rem]">
                    <div className="w-full h-full">
                        <DynamicInvoiceTemplate {...data} />
                    </div>
                </div>
            </div>
        </div>
    );
}
