import React from "react";

type SubheadingProps = {
    children: React.ReactNode;
};

export default function Subheading({ children }: SubheadingProps) {
    return <h4 className="text-lg font-semibold">{children}</h4>;
}
