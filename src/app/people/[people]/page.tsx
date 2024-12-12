'use client'

import TitleFirst from "@/components/TitleFirst";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
    const pathname = usePathname().replace('/people/', '')
    const [people, setPeople] = useState<string>("")
    useEffect(() => {
        if (pathname === 'iroha') {
            setPeople("いろはさん")
        } else if (pathname === 'sho') {
            setPeople("しょうさん")
        } else if (pathname === 'yudai') {
            setPeople("ゆうだいさん")
        } else if (pathname === 'miyu') {
            setPeople("みゆうさん")
        }
    }, [pathname])
    return (
        <div>
            <TitleFirst>{people}</TitleFirst>
            <div className="h-10" />
            <Icon name={pathname} />
        </div>
    )
}

function Icon({name}: {name: string}) {
    return (
        <div className="flex justify-center">
            <Image src={`/assets/images/people/${name}.png`} alt="" width={200} height={200} className="rounded-full object-cover max-w-[35vw]" />
        </div>
    )
}