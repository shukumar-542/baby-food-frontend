'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NavLinkProps {
    href: string;
    children: ReactNode;
  }

const NavLink = ({ href , children } : NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const activeClassName = "border-b-2 text-[#FD6A02]";
  const className = `hover:border-b-2 px-1 border-b-[#FD6A02] text-black ${isActive ? activeClassName : ""}`;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;
