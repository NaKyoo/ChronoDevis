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
                
                // Prioritize width filling but don't exceed height
                // Allow scaling up to 1.1x on large screens
                const targetScale = Math.min(scaleW * 0.98, scaleH * 0.98, 1.1); 
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
                className="relative w-full border dark:border-gray-600 rounded-xl overflow-hidden bg-gray-50/50 dark:bg-gray-900/50 grow h-[calc(100vh-15rem)] min-h-[40rem]"
            >
                <div 
                    className="absolute top-4 left-1/2 flex justify-center origin-top transition-transform duration-300 ease-in-out"
                    style={{ 
                        transform: `translateX(-50%) scale(${scale})`,
                        width: "794px",
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
