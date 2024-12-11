import React from 'react';
import Link from 'next/link';

interface HamburgerLinkProps {
    href: string;
    children: React.ReactNode;
}

export function TopHamburgerLink({ href, children }: HamburgerLinkProps) {
    return <Link href={href} className='text-white font-medium text-3xl border-b-2 border-transparent hover:border-white font-body'>{children}</Link>;
};

export default function HamburgerLink({ href, children }: HamburgerLinkProps) {
    return <Link href={href} className='text-white font-medium text-lg border-b-2 border-transparent hover:border-white mb-1  font-body'>{children}</Link>;
}