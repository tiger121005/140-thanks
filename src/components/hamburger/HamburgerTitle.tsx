import { ReactNode } from "react";

type HamburgerTitleProps = {
    children: ReactNode;
};

export default function HamburgerTitle({ children }: HamburgerTitleProps) {
    return (
        <div>
            <h1 className="sm:text-2xl lg:text-xl font-body font-medium text-white">{children}</h1>
            {/* <div className={`bg-white h-[2px] w-${width}`} /> */}
        </div>
    );
}