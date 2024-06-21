import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className=" ">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default layout;