'use client'

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

export default function Loading() {
  const [show, setShow] = useState(true);
  const [fadeout, setFadeout] = useState(false);
  const isPC = useMediaQuery('(min-width: 900px)');

  useEffect(() => {
    console.log(sessionStorage.getItem("accessed"));
    if (sessionStorage.getItem("accessed") == "true") {
      console.log("accessed");
      setShow(false);
      return
    }

    if (show) {
      setTimeout(() => {
        setFadeout(true);
      }, 3500);

      setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("accessed", "true");
      }, 3900);
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div>
      {show && (
        <motion.div
          animate={fadeout ? "hidden" : "show"}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0, transition: { duration: 0.4 } }
          }}
          className="fixed z-50 bg-background-loading w-screen h-screen mt-[-50px]">

          <AnimatePresence>
            <div key={1} className="flex justify-center items-center w-full h-full absolute z-[60]">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 1.7, duration: 0.7 }}
                className="absolute">
                {isPC ? (
                  <Image src="/assets/svg/title-logo-white.svg" alt="" width={710} height={162} />
                ) : (
                  <div>
                    <Image src="/assets/svg/title-logo-vertical-white.svg" alt="" width={204} height={228} />
                    <div className="h-[75.43px]"></div>
                  </div>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.7 }}>
                {isPC ? (
                  <Image src="/assets/svg/title-logo.svg" alt="" width={710} height={162} />
                ) : (
                  <div>
                    <Image src="/assets/svg/title-logo-vertical.svg" alt="" width={204} height={228} />
                    <div className="h-[75.43px]" />
                  </div>

                )}
              </motion.div>
            </div>
            <motion.div
              key={2}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 1.7, duration: 0.7 }}>
              <motion.div
                initial={{ translateY: 0 }}
                animate={{ translateY: "-110vh" }}
                transition={{ delay: 0, duration: 1.2 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}>
                  <div className="mt-[110vh]">
                    <Wave />

                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </div>


  )
}

function Wave() {
  const bubbleNumber = 50
  const bubblePositions = Array.from({ length: bubbleNumber }, (_, i) => i);

  return (
    <div>
      {/* 一番上の波 */}
      <div className="w-full absolute right-[2vw] mt-[-5%]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="200%" height="100%" viewBox='0 0 3800 115'>
          <path id="合体_12" data-name="合体 12" d="M1920,120V82.95H3840V120ZM0,120V82.95H1920V120Zm3200.9-37.051C3360,82.636,3360.3,0,3520,0c160,0,160,82.949,320,82.949Zm-640.907,0C2720,82.949,2720,0,2880,0c159.7,0,160,82.636,319.1,82.949Zm-640,0C2080,82.949,2080,0,2240,0s160,82.949,320,82.949Zm-639.094,0C1440,82.636,1440.3,0,1600,0c160,0,160,82.949,320,82.949ZM640,82.949C800,82.949,800,0,960,0c159.7,0,160,82.636,319.1,82.949Zm-640,0C160,82.949,160,0,320,0S480,82.949,640,82.949Z" className='fill-primary' />
        </svg>
      </div >

      {/* 二番目の波 */}
      <div className="w-full absolute right-[-2vw] mt-[-5%]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="200%" height="100%" viewBox='0 0 3800 115'>
          <path id="合体_12" data-name="合体 12" d="M1920,120V82.95H3840V120ZM0,120V82.95H1920V120Zm3200.9-37.051C3360,82.636,3360.3,0,3520,0c160,0,160,82.949,320,82.949Zm-640.907,0C2720,82.949,2720,0,2880,0c159.7,0,160,82.636,319.1,82.949Zm-640,0C2080,82.949,2080,0,2240,0s160,82.949,320,82.949Zm-639.094,0C1440,82.636,1440.3,0,1600,0c160,0,160,82.949,320,82.949ZM640,82.949C800,82.949,800,0,960,0c159.7,0,160,82.636,319.1,82.949Zm-640,0C160,82.949,160,0,320,0S480,82.949,640,82.949Z" className='fill-accent' />
        </svg>
      </div >

      {/* 三番目の波 */}
      <div className="w-full absolute right-0 mt-[-5%]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="200%" height="100%" viewBox='0 0 3800 115'>
          <path id="合体_12" data-name="合体 12" d="M1920,120V82.95H3840V120ZM0,120V82.95H1920V120Zm3200.9-37.051C3360,82.636,3360.3,0,3520,0c160,0,160,82.949,320,82.949Zm-640.907,0C2720,82.949,2720,0,2880,0c159.7,0,160,82.636,319.1,82.949Zm-640,0C2080,82.949,2080,0,2240,0s160,82.949,320,82.949Zm-639.094,0C1440,82.636,1440.3,0,1600,0c160,0,160,82.949,320,82.949ZM640,82.949C800,82.949,800,0,960,0c159.7,0,160,82.636,319.1,82.949Zm-640,0C160,82.949,160,0,320,0S480,82.949,640,82.949Z" fill="#f191ab" />
        </svg>
      </div >

      <div className="bg-[#F191AB] w-screen h-screen absolute" />
      <div className="flex justify-around">
        {bubblePositions.map((position) => (
          <div key={position}>
            <Bubble color="white" isBorder={true} />
          </div>
        ))}
      </div>
    </div>
  )
}

type BubbleProps = {
  color: string;
  isBorder: boolean;
}

function Bubble({ color, isBorder }: BubbleProps) {
  const delay = Math.random() * 3.4
  const [isShow, setShow] = useState<boolean>(true)
  setTimeout(() => {
    setShow(false)
  }, 1200 + (delay * 1000));
  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          initial={{ translateY: "100vh" }}
          animate={{ translateY: 0 }}
          transition={{ delay: Number(`${delay}`), duration: 1.2 }}
          className={`absolute right-auto`}
        >
          <div className={`w-[20px] h-[20px] rounded-full ${isBorder ? `border-${color} border-2` : `bg-${color}`}`} />
        </motion.div>
      )}

    </AnimatePresence>

  )
}