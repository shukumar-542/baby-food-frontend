import { getUserInfo, isLoggedIn, removeUser } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavLink from "../NavLink";

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

                    <button><Link href="/login">Login</Link></button>
                </li>
            }
        </>
    );
};

export default AuthButton;