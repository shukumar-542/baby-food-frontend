import { getUserInfo, isLoggedIn, removeUser } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
                <li className="hover:bg-[#FD6A02] rounded-md hover:text-white ">
                    <Link href="/dashboard/products">Dashboard</Link>
                </li>
            }
            {

                userInfo?.role === 'user' &&
                <li className="hover:bg-[#FD6A02] rounded-md hover:text-white ">
                    <Link href="/dashboard/my-orders">Dashboard</Link>
                </li>
            }
            {userInfo?.email ?

                <li>
                    <button onClick={() => handleLogout()}>Logout</button>
                </li> :

                <li>

                    <button><Link href="/login">Login</Link></button>
                </li>
            }
        </>
    );
};

export default AuthButton;