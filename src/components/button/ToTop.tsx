'use client'

import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';

const ToTop: React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', scrollWindow)
            return () => {
                window.removeEventListener('scroll', scrollWindow)
            }
        }
    }, [])

    const scrollWindow = () => {
        if (typeof window !== 'undefined') {
            const top = 300  //ボタンを表示させたい位置
            let scroll = 0
            scroll = window.scrollY
            if (top <= scroll) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
    }

    const normalStyle: React.CSSProperties = {
        opacity: 0,
        transition: '0.5s',
        pointerEvents: 'none'
    }
    const activeStyle: React.CSSProperties = {
        opacity: 1,
        transition: '0.5s',
        height: 'max-content',
        width: '50px',
        position: 'fixed',
        bottom: '12vh',
        right: '4vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        alignItems: 'center',
        zIndex: 25,
    }

    const style = isVisible ? activeStyle : normalStyle

    return (
        <div>
            {isVisible && (
                <button onClick={scrollToTop} style={style}>

                    <Image src="/assets/svg/toTop.svg" alt='' width={100} height={100} className='absolute lg:w-full sm:w-14' />
                    <div className='text-accent-ToTop text-xl w-full mx-auto sm:pt-10 lg:pt-8 drop-shadow-toTop-shadow lg:text-xl'>TOP</div>
                </button>
            )}
        </div>
    );
};

export default ToTop;