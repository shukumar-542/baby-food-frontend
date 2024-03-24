import Link from "next/link";
import babyFood from '@/assets/baby-food-.png'
import Image from "next/image";
const Navbar = () => {
    return (
        <div className="navbar sticky top-0  border-b bg-white z-10  max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>

                        
                        <li>
                            <Link href="/baby-foods">Products</Link>
                        </li>
                        <li>
                            <Link href="/flash-sale">Flash Sales</Link>
                        </li>
                        <li>
                            <Link href="/support">About Us</Link>
                        </li>
                        <li>
                            <Link href="/support">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/" className="flex items-center gap-2 justify-center ">
                    <Image src={babyFood} width={30} height={30} alt="brand logo" />
                    <div className="text-xl font-semibold">
                        <span className="text-[#2C188D]">Baby</span><span className="text-[#FD6A02]">Food</span>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex gap-2">
                <ul className="menu  menu-horizontal px-1 space-x-2 ">
                    <li className="hover:bg-[#FD6A02] rounded-md hover:text-white ">
                        <Link href="/">Home</Link>
                    </li>

                    <li className="hover:bg-[#FD6A02] rounded-md hover:text-white ">
                        <Link href="/about">Categories</Link>
                    </li>
                    <li className="hover:bg-[#FD6A02] rounded-md hover:text-white ">
                        <Link href="/baby-foods">Products</Link>
                    </li>
                    <li className="hover:bg-[#FD6A02] rounded-md hover:text-white  ">
                        <Link href="/flash-sale">Flash Sales</Link>
                    </li>
                    <li className="hover:bg-[#FD6A02] rounded-md hover:text-white ">
                        <Link href="/dashboard/all-products">Dashboard</Link>
                    </li>
                    <li className="hover:bg-[#FD6A02] rounded-md hover:text-white ">
                        <Link href="/support">Contact Us</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;