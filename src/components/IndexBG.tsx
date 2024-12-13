'use client'

import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

const RotatingCircles = () => {
    const [pageHeight, setPageHeight] = useState(0);
    const isPC = useMediaQuery('(min-width: 1155px)');

    useEffect(() => {
        // ページ全体の高さを取得して状態に保存
        let height = document.body.scrollHeight - document.body.clientHeight;
        height += 200;
        setPageHeight(height);
        if (typeof window !== 'undefined') {

            window.scrollTo(0, 0);
        }

        // ウィンドウリサイズ時に高さを再計算
        const handleResize = () => {
            let resizeHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            resizeHeight += 300;
            setPageHeight(resizeHeight);
            
        };
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", handleResize);

            // クリーンアップ
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [isPC]);
    
    return (
        <div className="absolute w-screen overflow-hidden -z-40" style={{ height: `${pageHeight}px` }} >
            <div className='animate-moveUp h-[8800px]'>

                <div className='w-[6vw] h-[6vw] top-[0px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[0px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[200px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[200px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[400px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[400px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[600px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[600px] left-[10vw] rounded-full border-2 border-secondary absolute' />


                
                <div className='w-[6vw] h-[6vw] top-[800px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[800px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[1000px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[1000px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[1200px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[1200px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[1400px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[1400px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[1600px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[1600px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[1800px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[1800px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[2000px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[2000px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[2200px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[2200px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[2400px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[2400px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[2600px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[2600px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[2800px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[2800px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[3000px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[3000px] left-[10vw] rounded-full border-2 border-secondary absolute' />
                
                <div className='w-[6vw] h-[6vw] top-[3200px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[3200px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[3400px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[3400px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[3600px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[3600px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[3800px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[3800px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[4000px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[4000px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[4200px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[4200px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[4400px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[4400px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[4600px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[4600px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[4800px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[4800px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[5000px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[5000px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[5200px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[5200px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[5400px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[5400px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[5600px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[5600px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[5800px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[5800px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[6000px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[6000px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[6200px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[6200px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[6400px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[6400px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[6600px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[6600px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[6800px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[6800px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[7000px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[7000px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[7200px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[7200px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[7400px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[7400px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[7600px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[7600px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[7800px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[7800px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[8000px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[8000px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[8200px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[8200px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[8400px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[8400px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[8600px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[8600px] left-[10vw] rounded-full border-2 border-secondary absolute' />
               
            </div>

            <div className='animate-moveUp h-[8800px] overflow-hidden'>

                <div className='w-[6vw] h-[6vw] top-[0px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[0px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[200px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[200px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[400px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[400px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[600px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[600px] left-[10vw] rounded-full border-2 border-secondary absolute' />



                <div className='w-[6vw] h-[6vw] top-[800px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[800px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[1000px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[1000px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[1200px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[1200px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[1400px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[1400px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[1600px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[1600px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[1800px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[1800px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[2000px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[2000px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[2200px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[2200px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[2400px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[2400px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[2600px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[2600px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[2800px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[2800px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[3000px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[3000px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[3200px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[3200px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[3400px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[3400px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[3600px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[3600px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[3800px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[3800px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[4000px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[4000px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[4200px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[4200px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[4400px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[4400px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[4600px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[4600px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[4800px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[4800px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[5000px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[5000px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[5200px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[5200px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[5400px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[5400px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[5600px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[5600px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[5800px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[5800px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[6000px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[6000px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[6200px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[6200px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[6400px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[6400px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[6600px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[6600px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[6800px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[6800px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[7000px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[7000px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[7200px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[7200px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[7400px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[7400px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[7600px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[7600px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[7800px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[7800px] left-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[8000px] right-[2vw] rounded-full bg-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[8000px] right-[10vw] rounded-full border-2 border-secondary absolute' />

                <div className='w-[6vw] h-[6vw] top-[8200px] left-[7vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[8200px] left-[2vw] rounded-full bg-secondary absolute' />

                <div className='w-[5vw] h-[5vw] top-[8400px] right-[9vw] rounded-full border-2 border-secondary absolute' />
                <div className='w-[3vw] h-[3vw] top-[8400px] right-[3vw] rounded-full bg-primary absolute' />

                <div className='w-[5vw] h-[5vw] top-[8600px] left-[2vw] rounded-full bg-primary absolute' />
                <div className='w-[3vw] h-[3vw] top-[8600px] left-[10vw] rounded-full border-2 border-secondary absolute' />

            </div>
            
        </div>
    );
};

export default RotatingCircles;
