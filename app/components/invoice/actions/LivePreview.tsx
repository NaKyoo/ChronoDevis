"use client";

import React, { useEffect, useRef, useState } from "react";

// Components
import { DynamicInvoiceTemplate } from "@/app/components";

// Types
import { InvoiceType } from "@/types";

type LivePreviewProps = {
    data: InvoiceType;
};

export default function LivePreview({ data }: LivePreviewProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(0.7);

    useEffect(() => {
        const calculateScale = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const containerHeight = containerRef.current.offsetHeight || 600;

                // A4 dimensions at 96 DPI: 794px x 1123px (Ratio ~1.414)
                const contentWidth = 794;
                const contentHeight = 1123;

                const scaleW = containerWidth / contentWidth;
                const scaleH = containerHeight / contentHeight;

                // Aggressive zoom logic: Prioritize width for legibility
                // We now use a higher multipliers and a higher max scale to "zoom more"
                let targetScale;
                if (containerWidth < 1024) {
                    // even more aggressive on smaller PC windows/tablets
                    targetScale = Math.max(scaleW * 1.1, 0.75);
                } else {
                    // On larger screens, still zoom in more
                    targetScale = Math.min(scaleW * 1.05, 1.3);
                }
                
                setScale(targetScale);
            }
        };

        const resizeObserver = new ResizeObserver(calculateScale);

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
            calculateScale();
        }

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div className="flex flex-col gap-2 h-full min-h-[35rem] xl:min-h-[45rem]">
            <div
                ref={containerRef}
                className="relative w-full border dark:border-gray-600 rounded-xl overflow-y-auto bg-gray-50/50 dark:bg-gray-900/50 grow h-[calc(100vh-15rem)] min-h-[40rem]"
            >
                <div
                    className="absolute top-4 left-1/2 flex justify-center origin-top transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-50%) scale(${scale})`,
                        width: "100%", // Fluid width
                        maxWidth: "794px", // But cap it at standard A4 width
                    }}
                >
                    <div className="w-full bg-white shadow-2xl ring-1 ring-gray-950/5">
                        <DynamicInvoiceTemplate {...data} />
                    </div>
                </div>
            </div>
        </div>
    );
}
