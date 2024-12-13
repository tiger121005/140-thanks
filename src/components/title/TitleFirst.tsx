import { ReactNode } from "react";
import Image from "next/image";

type TitleFirstProps = {
    children: ReactNode;
    fontS?: boolean;
    fontSS?: boolean;
}

export default function TitleFirst({ children, fontS = false, fontSS = false, }: TitleFirstProps) {
    return (
        <div className="h-[160px] z-10 lg:mb-[1vw] overflow-hidden">
            <div className="relative -left-16 -top-44">
                <Image src="/assets/svg/titleFirstBG.svg" width="100" height="100" alt="" className="absolute w-auto h-96 min-w-[380px]" />
                <h1 className={
                    `absolute w-96 min-w-[300px] max-w-[80vw] h-36 top-[10.75rem] left-10 flex justify-center items-center font-body font-bold text-center text-white break-words
                    ${fontS ? 'text-2xl' : 'text-3xl'}
                    ${fontSS ? 'text-xl' : ''}
                `}>{children}</h1>
            </div>
        </div>
    )
}