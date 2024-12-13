import { ReactNode } from 'react';

type SmallTitleProps = {
    children: ReactNode;
}

export default function SmallTitle({ children }: SmallTitleProps) {
    return (
        <div className='text-white bg-secondary border-secondary-100 border-4 rounded-tr-2xl rounded-bl-2xl w-24 h-8 flex justify-center items-center'>
            <div>
                {children}
            </div>
        </div>
    )
}