'use client'

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { HamburgerMenuPC, HamburgerMenuSP } from "./hamburger/HamburgerMenu";
import { usePathname } from 'next/navigation'


export default function Header() {
    const [isOpen, setOpen] = useState(false);
    const isPC = useMediaQuery('(min-width: 900px)');

    const pathname = usePathname()

    // ページ移動を検知
    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <div className="relative">
            <div className='bg-primary w-full h-[50px] fixed' />
            <div className="flex justify-end fixed w-full">
                <div>
                    {/* ボタンとハンバーガーの背景 */}
                    <motion.div
                        style={{
                            marginTop: 0,
                            marginRight: 0,
                            position: "relative",
                            whiteSpace: "nowrap",
                            background: "#fff",
                            zIndex: 40,
                        }}
                        animate={isOpen ? "open" : "closed"}
                        variants={{
                            open: {
                                width: "100vw",
                                height: "100vh",
                                borderRadius: 0,
                                top: 0,
                                right: 0,
                                padding: "0",
                                background: "#F2B1AE"
                            },
                            closed: {
                                width: "65px",
                                height: "65px",
                                borderRadius: "50%",
                                padding: "0",
                                background: "#E0749400",
                            }
                        }}
                    >
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-end"
                        }}>
                            <motion.button
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    fontSize: 10,
                                    background: "transparent",
                                    border: "none",
                                    appearance: "none",
                                    padding: "12px",
                                    cursor: "pointer"
                                }}
                                onClick={() => setOpen((v) => !v)}
                            >
                                <motion.svg
                                    width="23"
                                    height="23"
                                    viewBox="0 0 23 23"
                                    style={{ width: 32, height: 32 }}
                                >
                                    {/* ↓アイコン */}
                                    <motion.path
                                        fill="transparent"
                                        strokeWidth="3"
                                        stroke="white"
                                        strokeLinecap="round"
                                        variants={{
                                            closed: { d: "M 2 2.5 L 20 2.5" },
                                            open: { d: "M 3 16.5 L 17 2.5" }
                                        }}
                                    />
                                    <motion.path
                                        fill="transparent"
                                        strokeWidth="3"
                                        stroke="white"
                                        strokeLinecap="round"
                                        d="M 2 9.423 L 20 9.423"
                                        variants={{
                                            closed: { opacity: 1 },
                                            open: { opacity: 0 }
                                        }}
                                        transition={{ duration: 0.1 }}
                                    />
                                    <motion.path
                                        fill="transparent"
                                        strokeWidth="3"
                                        stroke="white"
                                        strokeLinecap="round"
                                        variants={{
                                            closed: { d: "M 2 16.346 L 20 16.346" },
                                            open: { d: "M 3 2.5 L 17 16.346" }
                                        }}
                                    />
                                </motion.svg>
                            </motion.button>
                        </div>


                        <AnimatePresence>
                            {isOpen && (
                                
                                <motion.div initial={{ translateY: -50, opacity: 0 }}
                                    animate={{ translateY: 0, opacity: 1 }}
                                    exit={{ translateY: -50, opacity: 0, transition: { delay: 0, duration: 0.1 } }}
                                    transition={{ delay: 0.25 }}>
                                    <div className="relative  overflow-y-scroll h-screen">
                                        {isPC ? <HamburgerMenuPC /> : <HamburgerMenuSP />}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
            <Link href='/' className="pl-[15px] py-[6px] fixed z-40">
                <Image src='/assets/svg/logo-white.svg' alt='logo' width={40} height={40} className="absolute" />
                <AnimatePresence>
                    <motion.div
                        animate={ isOpen ? "open" : "closed" }
                        variants={{
                            open: { opacity: 1, transition: { delay: 0.2 } },
                            closed: { opacity: 0}
                        }}>
                        <Image src="/assets/svg/logo.svg" alt='logo' width={40} height={40} className="relative drop-shadow-[1px_1px_#FFFFFF]" />
                        </motion.div>
                </AnimatePresence>
                
            </Link>
            
            
        </div>
    );
}
