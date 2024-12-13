import { ReactNode } from "react";

type TitleThirdProps = {
    children: ReactNode;
}

export default function TitleThird({ children }: TitleThirdProps) {
    return (
        <div className="w-full px-[12vw] relative right-[1.65rem]">
            <div className="relative h-16">
                <div className="absolute w-12 h-12 rounded-full bg-secondary-100"/>
                <h3 className="absolute text-text font-medium lg:text-lg sm:text-xl lg:leading-9 sm:leading-9 top-4 left-6 whitespace-nowrap"> {children} </h3>
            </div>
        </div>
    );
}