'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '@mui/material';
import TitleIndex from './title/TitleIndex';

const pickupData: PickupType[] = [
    { title: "ラスト部門会議", img: "/assets/images/pickup/last.jpg", href: "/theme" },
    { title: "新規合流", img: "/assets/images/pickup/start.jpg", href: "/feature" },
    { title: "片付け日", img: "/assets/images/pickup/fes.jpg", href: "/interview" },
    { title: "スシロー", img: "/assets/images/pickup/sushi.jpg", href: "/vision" },
    { title: "バーベキュー", img: "/assets/images/pickup/bbq.jpg", href: "/vision" },
    { title: "初部門ご飯", img: "/assets/images/pickup/niku.jpg", href: "/vision" },
]
function shuffleArray(array: PickupType[]): PickupType[] {
    return array.sort(() => Math.random() - 0.5);
}

export default function Pickup() {
    const isPC = useMediaQuery('(min-width: 600px)');
    const [shuffledData, setShuffledData] = useState<PickupType[]>(pickupData)
    useEffect(() => {
        setShuffledData(shuffleArray([...pickupData]))
    }, [])

    if (isPC) {
        return (
            <div className='mb-14'>
                <TitleIndex subTitle="特集">Pick Up</TitleIndex>
                <PickupPC data={shuffledData} />
            </div>
        )
    } else {
        return (
            <div className='mb-14'>
                <TitleIndex subTitle="特集">Pick Up</TitleIndex>
                <PickupSP data={shuffledData} />
            </div>
        )
    }
}

type PickupProps = {
    data: PickupType[];
}

function PickupPC({ data }: PickupProps) {
    const [state, setState] = useState(0)
    const [resetCounter, setResetCounter] = useState(0);

    const [first, setFirst] = useState<PickupType>(data[0])
    const [second, setSecond] = useState<PickupType>(data[1])
    const [third, setThird] = useState<PickupType>(data[2])
    const [fourth, setFourth] = useState<PickupType>(data[3])
    const [leftIndex, setLeftIndex] = useState(0)
    const [rightIndex, setRightIndex] = useState(2)

    const [firstX, setFirstX] = useState("7vw")
    const [secondX, setSecondX] = useState("34vw")
    const [thirdX, setThirdX] = useState("73vw")
    const [fourthX, setFourthX] = useState("-20vw")

    const [isFirstShow, setIsFirstShow] = useState(true)
    const [isSecondShow, setIsSecondShow] = useState(true)
    const [isThirdShow, setIsThirdShow] = useState(true)
    const [isFourthShow, setIsFourthShow] = useState(false)

    const [direction, setDirection] = useState("")

    const [isDisabled, setIsDisabled] = useState(false)

    const right = "73vw"
    const left = "7vw"
    const center = "34vw"
    const rightHidden = "100vw"
    const leftHidden = "-20vw"

    function toLeft() {
        setDirection("right")
        controllDisabled()
        changeLeftData()
        rightAnimation()
    }

    function toRight() {
        setDirection("left")
        controllDisabled()
        changeRightData()
        leftAnimation()
    }

    function controllDisabled() {
        setIsDisabled(true)
        setTimeout(() => {
            setIsDisabled(false)
        }, 310)
    }

    function changeLeftData() {
        let leftDataIndex = 0
        if (rightIndex === 0) {
            setRightIndex(data.length - 1)
        } else {
            setRightIndex(rightIndex - 1)
        }

        if (leftIndex === 0) {
            leftDataIndex = data.length - 1
            setLeftIndex(data.length - 1)
        } else {
            leftDataIndex = leftIndex - 1
            setLeftIndex(leftIndex - 1)
        }

        if (state === 0) {
            setFourth(data[leftDataIndex])
            setState(3)
        } else if (state === 1) {
            setFirst(data[leftDataIndex])
            setState(state - 1)
        } else if (state === 2) {
            setSecond(data[leftDataIndex])
            setState(state - 1)
        } else if (state === 3) {
            setThird(data[leftDataIndex])
            setState(state - 1)
        }
    }

    function changeRightData() {
        let rightDataIndex = 0
        if (leftIndex === data.length - 1) {
            setLeftIndex(0)
        } else {
            setLeftIndex(leftIndex + 1)
        }

        if (rightIndex === data.length - 1) {
            rightDataIndex = 0
            setRightIndex(rightDataIndex)
        } else {
            rightDataIndex = rightIndex + 1
            setRightIndex(rightDataIndex)
        }

        if (state === 3) {
            setThird(data[rightDataIndex])
            setState(0)
        } else if (state === 0) {
            setFourth(data[rightDataIndex])
            setState(state + 1)
        } else if (state === 1) {
            setFirst(data[rightDataIndex])
            setState(state + 1)
        } else if (state === 2) {
            setSecond(data[rightDataIndex])
            setState(state + 1)
        }
    }

    function leftAnimation() {
        if (state === 0) {
            setFirstX(leftHidden)
            setSecondX(left)
            setThirdX(center)
            setFourthX(right)
            setIsFourthShow(true)
            setIsFirstShow(false)

        } else if (state === 1) {
            setFirstX(right)
            setSecondX(leftHidden)
            setThirdX(left)
            setFourthX(center)
            setIsFirstShow(true)
            setIsSecondShow(false)
        } else if (state === 2) {
            setFirstX(center)
            setSecondX(right)
            setThirdX(leftHidden)
            setFourthX(left)
            setIsSecondShow(true)
            setIsThirdShow(false)
        } else if (state === 3) {
            setFirstX(left)
            setSecondX(center)
            setThirdX(right)
            setFourthX(leftHidden)
            setIsThirdShow(true)
            setIsFourthShow(false)
        } else {
            console.error("state", "else", state)
        }
    }

    function rightAnimation() {
        if (state === 0) {
            setFirstX(center)
            setSecondX(right)
            setThirdX(rightHidden)
            setFourthX(left)
            setIsFourthShow(true)
            setIsThirdShow(false)
        } else if (state === 1) {
            setFirstX(left)
            setSecondX(center)
            setThirdX(right)
            setFourthX(rightHidden)
            setIsFirstShow(true)
            setIsFourthShow(false)
        } else if (state === 2) {
            setFirstX(rightHidden)
            setSecondX(left)
            setThirdX(center)
            setFourthX(right)
            setIsSecondShow(true)
            setIsFirstShow(false)
        } else if (state === 3) {
            setFirstX(right)
            setSecondX(rightHidden)
            setThirdX(left)
            setFourthX(center)
            setIsThirdShow(true)
            setIsSecondShow(false)
        } else {
            console.log("state", "else", state)
        }
    }

    const firstVariants = {
        init: (direction: string) => {
            if (direction === "") {
                return {
                    x: left
                }
            } else {
                return {
                    x: direction === "left" ? rightHidden : leftHidden
                }
            }
        },
        show: {
            x: firstX,
        },
        exit: (direction: string) => {
            return {
                x: direction === "left" ? leftHidden : rightHidden
            }
        }
    };
    const secondVariants = {
        init: (direction: string) => {
            if (direction === "") {
                return {
                    x: center
                }
            } else {
                return {
                    x: direction === "left" ? rightHidden : leftHidden
                }
            }
        },
        show: {
            x: secondX,
        },
        exit: (direction: string) => {
            return {
                x: direction === "left" ? leftHidden : rightHidden
            }
        }
    };
    const thirdVariants = {
        init: (direction: string) => {
            if (direction === "") {
                return {
                    x: right
                }
            } else {
                return {
                    x: direction === "left" ? rightHidden : leftHidden
                }
            }
        },
        show: {
            x: thirdX,
        },
        exit: (direction: string) => {
            return {
                x: direction === "left" ? leftHidden : rightHidden
            }
        }
    };
    const fourthVariants = {
        init: (direction: string) => {
            return {
                x: direction === "left" ? rightHidden : leftHidden
            }
        },
        show: {
            x: fourthX,
        },
        exit: (direction: string) => {
            return {
                x: direction === "left" ? leftHidden : rightHidden
            }
        }
    };

    const handleClick = (direction: string) => {
        if (direction === "left") {
            toLeft()
        } else {
            toRight()
        }
        setResetCounter(prev => prev + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            toRight()
        }, 4000)
        return () => clearInterval(interval)
    }, [resetCounter])

    return (
        <div className='h-[35vw] w-[100vw] overflow-hidden relative'>
            <div className='absolute w-[100vw]'>
                <AnimatePresence custom={direction}>
                    {isFirstShow && (
                        <motion.div key={"first"} variants={firstVariants} custom={direction} initial="init" animate="show" exit="exit" transition={{ duration: 0.3 }} >
                            <PickupItemPC data={first} state={state} index={0} direction={direction} />
                        </motion.div>
                    )}
                    {isSecondShow && (
                        <motion.div key={"second"} variants={secondVariants} custom={direction} initial="init" animate="show" exit="exit" transition={{ duration: 0.3 }} >
                            <PickupItemPC data={second} state={state} index={1} direction={direction} />
                        </motion.div>
                    )}
                    {isThirdShow && (
                        <motion.div key={"third"} variants={thirdVariants} custom={direction} initial="init" animate="show" exit="exit" transition={{ duration: 0.3 }} >
                            <PickupItemPC data={third} state={state} index={2} direction={direction} />
                        </motion.div>
                    )}
                    {isFourthShow && (
                        <motion.div key={"fourth"} variants={fourthVariants} custom={direction} initial="init" animate="show" exit="exit" transition={{ duration: 0.3 }} >
                            <PickupItemPC data={fourth} state={state} index={3} direction={direction} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className='flex justify-around w-full mt-[10vw] absolute z-20 pointer-events-none'>
                <button onClick={() => handleClick("left")} disabled={isDisabled} className='w-20 h-20 pointer-events-auto'>
                    <PickupButton direction="left" />
                </button>
                <button onClick={() => handleClick("right")} disabled={isDisabled} className='w-20 h-20 pointer-events-auto'>
                    <PickupButton direction="right" />
                </button>
            </div>
        </div>
    )
}

type PickupItemProps = {
    data: PickupType;
    state: number;
    index: number;
    direction: string;
}

function PickupItemPC({ data, state, index, direction }: PickupItemProps) {
    const bigWidth = "33vw"
    const bigHeight = "25vw"
    const smallWidth = "21vw"
    const smallHeight = "16vw"
    function isCenter(): boolean {
        if (state === 3) {
            return index === 0
        } else {
            return state + 1 === index
        }
    }

    function isExitCenter(): boolean {
        if (direction === "left") {
            return index === state
        } else {
            if (state <= 1) {
                return index === state + 2
            } else {
                return index === state - 2
            }
        }
    }

    function imageCss(): string {
        let css = "bg-background object-cover border-[6px] border-primary w-full h-full bg-white"
        if (isCenter()) {
            css += " rounded-[3vw]"
        } else {
            css += " rounded-[2vw]"
        }
        return css
    }

    function textCss(): string {
        const css = "text-text mt-2"
        if (isCenter()) {
            return css + " text-2xl"
        } else {
            return css + " text-xl"
        }
    }

    const variants = {
        initial: () => {
            if (direction === "") {
                if (index === 1) {
                    return {
                        width: bigWidth,
                        height: bigHeight,
                    }
                } else {
                    return {
                        width: smallWidth,
                        height: smallHeight,
                    }
                }
            } else {
                return {
                    width: isExitCenter() ? bigWidth : smallWidth,
                    height: isExitCenter() ? bigHeight : smallHeight,
                }
            }
        },
        animate: () => {
            return {
                width: isCenter() ? bigWidth : smallWidth,
                height: isCenter() ? bigHeight : smallHeight,
            }
        }
    }

    return (
        <div className="flex flex-col items-center absolute">
            <div className="flex flex-col items-center">
                <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.3 }}>
                    <Image src={data.img} alt="" width={800} height={600} className={imageCss()} />
                </motion.div>
                <div className={textCss()}>{data.title}</div>
            </div>
        </div>
    )
}

function PickupSP({ data }: PickupProps) {
    const [state, setState] = useState(0)
    const [resetCounter, setResetCounter] = useState(0);

    const right = "96vw"
    const left = "-76vw"
    const center = "8vw"
    const rightHidden = "180vw"
    const leftHidden = "-160vw"

    const [first, setFirst] = useState<PickupType>(data[0])
    const [second, setSecond] = useState<PickupType>(data[1])
    const [third, setThird] = useState<PickupType>(data[2])
    const [fourth, setFourth] = useState<PickupType>(data[3])
    const [leftIndex, setLeftIndex] = useState(0)
    const [rightIndex, setRightIndex] = useState(2)

    const [firstX, setFirstX] = useState(left)
    const [secondX, setSecondX] = useState(center)
    const [thirdX, setThirdX] = useState(right)
    const [fourthX, setFourthX] = useState(leftHidden)

    const [isFirstShow, setIsFirstShow] = useState(true)
    const [isSecondShow, setIsSecondShow] = useState(true)
    const [isThirdShow, setIsThirdShow] = useState(true)
    const [isFourthShow, setIsFourthShow] = useState(false)

    const [direction, setDirection] = useState("")

    const [isDisabled, setIsDisabled] = useState(false)

    function toLeft() {
        setDirection("right")
        controllDisabled()
        changeLeftData()
        rightAnimation()
    }

    function toRight() {
        setDirection("left")
        controllDisabled()
        changeRightData()
        leftAnimation()
    }

    function controllDisabled() {
        setIsDisabled(true)
        setTimeout(() => {
            setIsDisabled(false)
        }, 310)
    }

    function changeLeftData() {
        let leftDataIndex = 0
        if (rightIndex === 0) {
            setRightIndex(data.length - 1)
        } else {
            setRightIndex(rightIndex - 1)
        }

        if (leftIndex === 0) {
            leftDataIndex = data.length - 1
            setLeftIndex(data.length - 1)
        } else {
            leftDataIndex = leftIndex - 1
            setLeftIndex(leftIndex - 1)
        }

        if (state === 0) {
            setFourth(data[leftDataIndex])
            setState(3)
        } else if (state === 1) {
            setFirst(data[leftDataIndex])
            setState(state - 1)
        } else if (state === 2) {
            setSecond(data[leftDataIndex])
            setState(state - 1)
        } else if (state === 3) {
            setThird(data[leftDataIndex])
            setState(state - 1)
        }
    }

    function changeRightData() {
        let rightDataIndex = 0
        if (leftIndex === data.length - 1) {
            setLeftIndex(0)
        } else {
            setLeftIndex(leftIndex + 1)
        }

        if (rightIndex === data.length - 1) {
            rightDataIndex = 0
            setRightIndex(rightDataIndex)
        } else {
            rightDataIndex = rightIndex + 1
            setRightIndex(rightDataIndex)
        }

        if (state === 3) {
            setThird(data[rightDataIndex])
            setState(0)
        } else if (state === 0) {
            setFourth(data[rightDataIndex])
            setState(state + 1)
        } else if (state === 1) {
            setFirst(data[rightDataIndex])
            setState(state + 1)
        } else if (state === 2) {
            setSecond(data[rightDataIndex])
            setState(state + 1)
        }
    }

    function leftAnimation() {
        if (state === 0) {
            setFirstX(leftHidden)
            setSecondX(left)
            setThirdX(center)
            setFourthX(right)
            setIsFourthShow(true)
            setIsFirstShow(false)

        } else if (state === 1) {
            setFirstX(right)
            setSecondX(leftHidden)
            setThirdX(left)
            setFourthX(center)
            setIsFirstShow(true)
            setIsSecondShow(false)
        } else if (state === 2) {
            setFirstX(center)
            setSecondX(right)
            setThirdX(leftHidden)
            setFourthX(left)
            setIsSecondShow(true)
            setIsThirdShow(false)
        } else if (state === 3) {
            setFirstX(left)
            setSecondX(center)
            setThirdX(right)
            setFourthX(leftHidden)
            setIsThirdShow(true)
            setIsFourthShow(false)
        } else {
            console.error("state", "else", state)
        }
    }

    function rightAnimation() {
        if (state === 0) {
            setFirstX(center)
            setSecondX(right)
            setThirdX(rightHidden)
            setFourthX(left)
            setIsFourthShow(true)
            setIsThirdShow(false)
        } else if (state === 1) {
            setFirstX(left)
            setSecondX(center)
            setThirdX(right)
            setFourthX(rightHidden)
            setIsFirstShow(true)
            setIsFourthShow(false)
        } else if (state === 2) {
            setFirstX(rightHidden)
            setSecondX(left)
            setThirdX(center)
            setFourthX(right)
            setIsSecondShow(true)
            setIsFirstShow(false)
        } else if (state === 3) {
            setFirstX(right)
            setSecondX(rightHidden)
            setThirdX(left)
            setFourthX(center)
            setIsThirdShow(true)
            setIsSecondShow(false)
        } else {
            console.log("state", "else", state)
        }
    }

    const firstVariants = {
        init: (direction: string) => {
            if (direction === "") {
                return {
                    x: left
                }
            } else {
                return {
                    x: direction === "left" ? rightHidden : leftHidden
                }
            }
        },
        show: {
            x: firstX,
        },
        exit: (direction: string) => {
            return {
                x: direction === "left" ? leftHidden : rightHidden
            }
        }
    };
    const secondVariants = {
        init: (direction: string) => {
            if (direction === "") {
                return {
                    x: center
                }
            } else {
                return {
                    x: direction === "left" ? rightHidden : leftHidden
                }
            }
        },
        show: {
            x: secondX,
        },
        exit: (direction: string) => {
            return {
                x: direction === "left" ? leftHidden : rightHidden
            }
        }
    };
    const thirdVariants = {
        init: (direction: string) => {
            if (direction === "") {
                return {
                    x: right
                }
            } else {
                return {
                    x: direction === "left" ? rightHidden : leftHidden
                }
            }
        },
        show: {
            x: thirdX,
        },
        exit: (direction: string) => {
            return {
                x: direction === "left" ? leftHidden : rightHidden
            }
        }
    };
    const fourthVariants = {
        init: (direction: string) => {
            return {
                x: direction === "left" ? rightHidden : leftHidden
            }
        },
        show: {
            x: fourthX,
        },
        exit: (direction: string) => {
            return {
                x: direction === "left" ? leftHidden : rightHidden
            }
        }
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            toRight()
        }, 4000)
        return () => clearInterval(interval)
    }, [resetCounter])

    const handleClick = (direction: string) => {
        if (direction === "left") {
            toLeft()
        } else {
            toRight()
        }
        setResetCounter(prev => prev + 1)
    }

    return (
        <div className='h-[76vw] w-[100vw] overflow-x-hidden'>
            <div className='flex justify-center gap-[60vw] w-full mt-[26vw] absolute z-20 pointer-events-none'>
                <button onClick={() => handleClick("left")} disabled={isDisabled} className='w-20 h-20 bg-secondary rounded-full text-center pointer-events-auto'>
                    <PickupButton direction="left" />
                </button>
                <button onClick={() => handleClick("right")} disabled={isDisabled} className='w-20 h-20 bg-secondary rounded-full text-center pointer-events-auto'>
                    <PickupButton direction="right" />
                </button>
            </div>
            <div className='relative w-[100vw]'>
                <AnimatePresence custom={direction}>
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        // dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                handleClick("right");
                            } else if (swipe > swipeConfidenceThreshold) {
                                handleClick("left");
                            }
                        }}>
                        {isFirstShow && (
                            <motion.div key={"first"} variants={firstVariants} custom={direction} initial="init" animate="show" exit="exit" transition={{ duration: 0.3 }} >
                                <PickupItemSP data={first} state={state} index={0} direction={direction} />
                            </motion.div>
                        )}
                        {isSecondShow && (
                            <motion.div key={"second"} variants={secondVariants} custom={direction} initial="init" animate="show" exit="exit" transition={{ duration: 0.3 }} >
                                <PickupItemSP data={second} state={state} index={1} direction={direction} />
                            </motion.div>
                        )}
                        {isThirdShow && (
                            <motion.div key={"third"} variants={thirdVariants} custom={direction} initial="init" animate="show" exit="exit" transition={{ duration: 0.3 }} >
                                <PickupItemSP data={third} state={state} index={2} direction={direction} />
                            </motion.div>
                        )}
                        {isFourthShow && (
                            <motion.div key={"fourth"} variants={fourthVariants} custom={direction} initial="init" animate="show" exit="exit" transition={{ duration: 0.3 }} >
                                <PickupItemSP data={fourth} state={state} index={3} direction={direction} />
                            </motion.div>
                        )}
                    </motion.div>

                </AnimatePresence>
            </div>
        </div>
    )
}

function PickupItemSP({ data, state, index, direction }: PickupItemProps) {
    const bigWidth = "84vw"
    const bigHeight = "63.7vw"
    const smallWidth = "80vw"
    const smallHeight = "60.7vw"
    function isCenter(): boolean {
        if (state === 3) {
            return index === 0
        } else {
            return state + 1 === index
        }
    }

    function isExitCenter(): boolean {
        if (direction === "left") {
            return index === state
        } else {
            if (state <= 1) {
                return index === state + 2
            } else {
                return index === state - 2
            }
        }
    }

    function imageCss(): string {
        let css = "bg-background object-cover border-[6px] border-primary w-full h-full bg-white"
        if (isCenter()) {
            css += " rounded-[3vw]"
        } else {
            css += " rounded-[2vw]"
        }
        return css
    }

    function textCss(): string {
        const css = "text-text mt-2"
        if (isCenter()) {
            return css + " text-2xl"
        } else {
            return css + " text-xl"
        }
    }

    const variants = {
        initial: () => {
            if (direction === "") {
                if (index === 1) {
                    return {
                        width: bigWidth,
                        height: bigHeight,
                    }
                } else {
                    return {
                        width: smallWidth,
                        height: smallHeight,
                    }
                }
            } else {
                return {
                    width: isExitCenter() ? bigWidth : smallWidth,
                    height: isExitCenter() ? bigHeight : smallHeight,
                }
            }
        },
        animate: () => {
            return {
                width: isCenter() ? bigWidth : smallWidth,
                height: isCenter() ? bigHeight : smallHeight,
            }
        }
    }

    return (
        <div className="flex flex-col items-center absolute">
            <div className="flex flex-col items-center select-none">
                <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.3 }}>
                    <Image src={data.img} alt="" width={800} height={600} className={imageCss()} />
                </motion.div>
                <div className={textCss()}>{data.title}</div>
            </div>
        </div>
    )
}

type PickupButtonProps = {
    direction: string;
}
function PickupButton({ direction }: PickupButtonProps) {
    return (
        <div className='flex justify-center items-center rounded-full w-full h-full bg-background border-primary border-[3px] p-5 shadow-lg active:bg-accent-300 active:shadow-none select-none'>
            <Image src={direction === "left" ? "/assets/svg/arrow-left.svg" : "/assets/svg/arrow-right.svg"} alt={direction === "left" ? "←" : "→"} width={200} height={200} />
        </div>
    )
}