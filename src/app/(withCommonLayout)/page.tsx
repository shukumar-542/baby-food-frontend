import Banner from '@/components/shared/Banner';
import FlashSale from '@/components/ui/FlashSale';
import PopularProduct from '@/components/ui/PopularProduct';
import SpecialProduct from '@/components/ui/SpecialProduct';
import Testimonials from '@/components/ui/Testimonials';
import TopCategory from '@/components/ui/TopCategory';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'BabyFood | Home ',
  description: 'Baby Food Home Page',
}

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <FlashSale/>
      <TopCategory/>
      <PopularProduct/>
      <Testimonials/>
      <SpecialProduct/>
    </div>
  );
};

export default HomePage;