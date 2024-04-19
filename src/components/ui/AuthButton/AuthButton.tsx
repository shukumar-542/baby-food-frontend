import { getUserInfo, removeUser } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
    const userInfo = getUserInfo();
    const router = useRouter()
    const handleLogout = () => {
        removeUser();

        router.refresh()
    }
    return (
        <>
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