import Sidebar from "@/components/ui/Sidebar/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <Sidebar />
            </div>
            <div className="col-span-10">
                <div className="bg-gray-200 h-12">

                </div>
                {children}
            </div>
        </div>
    );
};

export default layout;