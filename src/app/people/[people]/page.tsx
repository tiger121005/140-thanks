'use client'

import TitleFirst from "@/components/TitleFirst";
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
        </div>
    )
}