import Link from "next/link";
import FlashSaleCard from "./FlashSaleCard";
import { IoIosArrowForward } from "react-icons/io";

const FlashSale = () => {
    return (
        <div className="my-10">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Flash Sale</h1>
                <Link href={'/'} className="btn rounded-full ">
                    View All
                    <IoIosArrowForward/>
                </Link>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                <FlashSaleCard />
                <FlashSaleCard />
                <FlashSaleCard />
                <FlashSaleCard />
            </div>
        </div>
    );
};

export default FlashSale;