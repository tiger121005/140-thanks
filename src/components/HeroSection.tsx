'use client'

import Image from "next/image"
import { useMediaQuery } from "@mui/material"

export default function HeroSection() {
    const isPC = useMediaQuery('(min-width: 900px)')
    return (
        <div className="relative">
            <div className="bg-primary w-screen h-[46px] absolute" />
            <div className="absolute w-full h-[6vw] mt-[46px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 132.92">
                    <path id="パス_2" data-name="パス 2" d="M1920,104.213s-77.878,66.132-235.838,55.112-209.431-44.271-399.889-41.417c-279.1,6.737-327,60.719-621.817,64.875S.04,94.547.04,94.547-.049,116.223.04,50H1920Z" transform="translate(0 -50)" fill="#e07494" />
                </svg>

            </div>


            <div className="flex flex-col justify-center items-center h-screen w-screen absolute z-10">
                {isPC ? <Image src="/assets/svg/title-logo.svg" alt="" width={710} height={162} className="object-contain" /> : <Image src="/assets/svg/title-logo-vertical.svg" alt="" width={204} height={228} className="object-contain" />}
                {!isPC && <DatePlace />}
            </div>
            <div className="absolute mt-[60vh] left-auto right-24 z-10">
                {isPC && <DatePlace />}
            </div>


            <div className="w-[100vw] h-[20px] absolute mt-[70vh]">
                <svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="138.044" viewBox="0 0 2157.758 138.044">
                    <path id="パス_3" data-name="パス 3" d="M-2155.992,906.514c428.544-13.5,370.434-94.554,648.323-116.542s461.544,86.492,713.229,104.441,306.523,40.68,466.479,0S-202.978,761.373-7.42,826.7" transform="translate(2160.116 -783.12)" fill="none" stroke="#8fcff0" strokeLinecap="round" strokeWidth="8" />
                </svg>
            </div>
        </div>
    )
}

function DatePlace() {
    return (
        <div className="bg-white shadow-[2px_2px_#e07594] lg:shadow-[4px_4px_#e07594] px-6 py-2 rounded-full lg:rounded-3xl mt-10">
            <Image src="/assets/svg/from.svg" alt="" width={1000} height={1000} className="object-contain w-[174px] lg:w-[300px]" />
        </div>
    )
}
