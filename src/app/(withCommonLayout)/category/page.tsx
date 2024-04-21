import TopCategory from "@/components/ui/TopCategory";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'BabyFood | Categories',
    description: 'Flash Sale products',
  }

const CategoryPage = () => {
    return (
        <div>
            <TopCategory/>
        </div>
    );
};

export default CategoryPage;