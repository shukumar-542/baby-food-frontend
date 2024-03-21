import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen max-w-7xl mx-auto">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default layout;