import Image from 'next/image';
import { ReactNode } from 'react';

type TitleSecondProps = {
    children?: ReactNode;
};

const TitleSecond: React.FC<TitleSecondProps> = ({ children }) => {
    return (
        <div className='w-full pl-[12vw] relative right-[3.55rem]'>
            <div className='relative text-text text-3xl text-shadow w-fit'>
                <Image src='/assets/images/triangle-secondary.png' alt='' width={50} height={50} className='object-contain absolute sm:pt-8 sm:ml-10 sm:w-10 lg:w-12 lg:pt-12 lg:ml-9' />
                <Image src='/assets/images/triangle-primary.png' alt='' width={80} height={80} className='object-contain right-0 absolute sm:pt-0 sm:mr-5 sm:w-16 lg:w-[4.8rem] lg:pt-5 lg:mr-7' />
                <div className='relative z-20 font-body font-semibold text-text text-2xl pl-14 pr-16 sm:py-6 lg:py-12 drop-shadow-[2px_2px_#FFFFFF] max-w-[100vw]'>
                    {children}
                </div>


            </div>
        </div>
        

    );
};


export default TitleSecond;