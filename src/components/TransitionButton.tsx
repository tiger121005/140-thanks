import React, { ReactNode } from 'react';
import Link from 'next/link';

type TransitionButtonProps = {
    children: ReactNode;
    href: string;
};

const TransitionButton: React.FC<TransitionButtonProps> = ({ children, href }) => {
    return (
        <Link
            href={href}
            className='flex justify-center items-center lg:border-4 sm:border-2 border-primary rounded-full w-fit lg:h-14 sm:h-11 py-1 pr-2 pl-7 
  hover:bg-primary-gradient bg-left hover:bg-right hover:border-none hover:lg:pl-8 hover:lg:pr-3
  hover:sm:pl-[1.85rem] hover:sm:pr-[0.6rem] hover:text-white group'
        >
            <div className='font-body font-medium w-fit pr-2 lg:text-lg sm:text-base group-hover:text-white'>
                {children}
            </div>
            <div className='flex justify-center items-center lg:w-10 lg:h-10 sm:w-8 sm:h-8 rounded-full bg-gradient-to-bl from-primary via-secondary to-accent group-hover:bg-white group-hover:bg-none'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 36.036 28.284" className='lg:w-6 sm:w-4 group-hover:stroke-primary'>
                    <g id="グループ_161" data-name="グループ 161" transform="translate(-8.5 -1)">
                        <line id="線_44" data-name="線 44" x2="30" transform="translate(11 15.142)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="5" className='group-hover:stroke-primary' />
                        <line id="線_45" data-name="線 45" x2="15" transform="translate(30.394 4.536) rotate(45)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="5" className='group-hover:stroke-primary' />
                        <line id="線_46" data-name="線 46" x2="15" transform="translate(30.394 25.749) rotate(-45)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="5" className='group-hover:stroke-primary' />
                    </g>
                </svg>
            </div>
        </Link>
    );
};

export default TransitionButton;