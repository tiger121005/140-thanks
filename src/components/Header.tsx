'use client'

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'


export default function Header() {
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname()

    // ページ移動を検知
    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <div className="relative">
            <div className='bg-primary w-full h-[50px] fixed' />

            <Link href='/' className="pl-[15px] py-[6px] fixed z-40">
                <Image src='/assets/svg/logo-white.svg' alt='logo' width={40} height={40} className="absolute" />
                <AnimatePresence>
                    <motion.div
                        animate={isOpen ? "open" : "closed"}
                        variants={{
                            open: { opacity: 1, transition: { delay: 0.2 } },
                            closed: { opacity: 0 }
                        }}>
                        <Image src="/assets/svg/logo.svg" alt='logo' width={40} height={40} className="relative drop-shadow-[1px_1px_#FFFFFF]" />
                    </motion.div>
                </AnimatePresence>
            </Link>
        </div>
    );
}
