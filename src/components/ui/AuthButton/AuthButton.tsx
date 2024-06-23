import { getUserInfo, isLoggedIn, removeUser } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavLink from "../NavLink";
import Button from "../Button/Button";

const AuthButton = () => {
    const isLogged = isLoggedIn()
    const userInfo = getUserInfo();


    const router = useRouter()
    const handleLogout = () => {
        removeUser();
        router.refresh()
    }

    return (
        <>


            {

                userInfo?.role === 'admin' &&
                <li >
                    <NavLink href="/dashboard/products">Dashboard</NavLink>
                </li>
            }
            {

                userInfo?.role === 'user' &&
                <li >
                    <NavLink href="/dashboard/my-orders">Dashboard</NavLink>
                </li>
            }
            {userInfo?.email ?

                <li>
                    <button className="text-black" onClick={() => handleLogout()}>Logout</button>
                </li> :

                <li>

                    <Button className="rounded-2xl px-3 py-1 font-serif "><Link href="/login">Sign In</Link></Button>
                </li>
            }
        </>
    );
};

export default AuthButton;