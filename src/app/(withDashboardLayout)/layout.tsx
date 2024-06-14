"use client"
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import UserNavbar from "@/components/ui/UserNavbar/UserNavbar";

import { FaUser } from "react-icons/fa";

const layout = ({ children }: { children: React.ReactNode }) => {


   

    return (
        <div className="grid grid-cols-12 h-[100vh] ">
            <div className="col-span-4 md:col-span-2   ">
                <Sidebar />
            </div>
            <div className="col-span-8 md:col-span-10">
                <UserNavbar/>
                <div className=" ">
                {children}
                </div>
            </div>
        </div>
    );
};

export default layout;