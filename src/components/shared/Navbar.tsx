"use client"
import Link from "next/link";
import babyFood from '@/assets/logoNew.png'
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import { useAppSelector } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import NavLink from "../ui/NavLink";


const AuthButton = dynamic(() => import('../ui/AuthButton/AuthButton'), { ssr: false })

const Navbar = () => {
    const [userRole, setUserRole] = useState()
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchUserRole = async () => {
            const userInfo = await getUserInfo();
            if (userInfo && userInfo.role) {
                setUserRole(userInfo.role);
            }
            setLoading(false);
        };


        fetchUserRole();
    }, [])

    const products = useAppSelector((store) => store.cart.products)
    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="bg-white mx-auto shadow-sm z-10  sticky top-0 border-b">
            <div className="navbar h-[10px] justify-center">
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
                                <Link href="/category">Category</Link>
                            </li>
                            <li>
                                <Link href="/about-us">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact-us">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                            <li>
                                <Link href="/register">Register</Link>
                            </li>
                            <li className="relative">
                                <Link href="/checkout">
                                    <LuShoppingCart size={25} />
                                    <span className="bg-[#FD6A02] text-white text-center px-1 right-0 top-0  absolute rounded-full">{products.length}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/" className="flex items-center gap-2 justify-center ">
                        <Image src={babyFood} width={30} height={30} alt="brand logo" />
                        <div className="text-2xl font-serif">
                            <span className="text-[#2C188D]">Baby</span><span className="text-[#FD6A02]">Food</span>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex gap-2">
                    <ul className="menu-horizontal items-center   space-x-4 ">
                        <li>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="/baby-foods">Products</NavLink>
                        </li>
                        <li>
                            <NavLink href="/flash-sale">Flash Sales</NavLink>
                        </li>
                        <li>
                            <NavLink href="/category">Categories</NavLink>
                        </li>
                        <li>
                            <NavLink href="/contact-us">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink href="/about-us">About Us</NavLink>
                        </li>
                        <AuthButton />
                        {
                            !userRole && <li>
                                <NavLink href="/register">Register</NavLink>
                            </li>
                        }
                        <li className="relative">
                            <Link href="/checkout">
                                <LuShoppingCart size={35} className=" bg-[#EDF9FB] text-[#00C9AD] rounded-full p-1 shadow-md" />
                                <span className="bg-[#FD6A02] text-white text-center px-[4px] right-0 top-[-12px]  absolute rounded-full text-sm">{products.length}</span>
                            </Link>
                        </li>
                    </ul>




                    {/* <ul className="  menu-horizontal px-1 space-x-2 ">
                        <li >
                            <Link className=" hover:border-b-2 px-1 border-b-[#FD6A02]" href="/">Home</Link>
                        </li>


                        <li>
                            <Link className=" hover:border-b-2 px-1 border-b-[#FD6A02]" href="/baby-foods">Products</Link>
                        </li>
                        <li>
                            <Link className=" hover:border-b-2 px-1 border-b-[#FD6A02]" href="/flash-sale">Flash Sales</Link>
                        </li>
                        <li>
                            <Link className=" hover:border-b-2 px-1 border-b-[#FD6A02]" href="/category">Categories</Link>
                        </li>
                       
                        <li>
                            <Link className=" hover:border-b-2 px-1 border-b-[#FD6A02]" href="/contact-us">Contact Us</Link>
                        </li>
                        <li>
                            <Link className="hover:border-b-2 pb-[1px] hover:text-[#FD6A02] border-b-[#FD6A02]" href="/about-us">About Us</Link>
                        </li>


                        <AuthButton />



                        <li>
                            <Link href="/register">Register</Link>
                        </li>

                        <li className="relative">
                            <Link href="/checkout">
                                <LuShoppingCart size={25} />
                                <span className="bg-[#FD6A02] text-white text-center px-1 right-0 top-0  absolute rounded-full">{products.length}</span>
                            </Link>
                        </li>

                    </ul> */}
                </div>

            </div>
        </div>
    );
};

export default Navbar;