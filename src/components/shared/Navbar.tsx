import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar sticky  border-b  max-w-7xl mx-auto">
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
                            <Link href="/about">Categories</Link>
                        </li>
                        <li>
                            <Link href="/support">Products</Link>
                        </li>
                        <li>
                            <Link href="/support">Flash Sales</Link>
                        </li>
                        <li>
                            <Link href="/support">About Us</Link>
                        </li>
                        <li>
                            <Link href="/support">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">
                    {/* <Image src={brandLogo} width={30} height={30} alt="brand logo" /> */}
                    BabyFood
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="/about">Categories</Link>
                    </li>
                    <li>
                        <Link href="/support">Products</Link>
                    </li>
                    <li>
                        <Link href="/support">Flash Sales</Link>
                    </li>
                    <li>
                        <Link href="/support">About Us</Link>
                    </li>
                    <li>
                        <Link href="/support">Contact Us</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;