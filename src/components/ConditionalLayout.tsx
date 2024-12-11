// src/components/ConditionalLayout.tsx
"use client"; // クライアントコンポーネントとして指定

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

type ConditionalLayoutProps = {
    children: React.ReactNode; // childrenの型を明示的に指定
};

const ConditionalLayout: React.FC<ConditionalLayoutProps> = ({ children }) => {
    const pathname = usePathname();

    return (
        <>
            <div className="mb-[50px] z-30">
                {pathname.startsWith('/mysteryRally') ? null : <Header />}
            </div>
            {children}
            <div className="z-20 mt-24">
                {pathname.startsWith('/mysteryRally') ? null : <Footer />}
            </div>
        </>
    );
};

export default ConditionalLayout;
