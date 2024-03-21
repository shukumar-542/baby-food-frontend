import Banner from '@/components/shared/Banner';
import FlashSale from '@/components/ui/FlashSale';
import PopularProduct from '@/components/ui/PopularProduct';
import TopCategory from '@/components/ui/TopCategory';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <FlashSale/>
      <TopCategory/>
      <PopularProduct/>
    </div>
  );
};

export default HomePage;