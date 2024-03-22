import FlashSaleCard from "@/components/ui/FlashSaleCard";

const page = () => {
    return (
        <div className="grid grid-cols-12 gap-5 my-10">
            <div className="col-span-2">
                <div>
                    <h1 className="border-l-2 border-black pl-2">Price Range</h1>
                </div>
            </div>
            <div className="col-span-10">
                <div>
                    <h1 className="font-bold text-2xl mb-10">Our Collection Of Products</h1>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <FlashSaleCard />
                    <FlashSaleCard />
                    <FlashSaleCard />
                </div>
            </div>
        </div>
    );
};

export default page;