
import styles from "./Banner.module.css";
import SwiperSilder from "./Swiper";





const Banner = () => {
    return (
        <div className={`${styles.banner_container} text-white px-5`}>
            <div className="w-[75%] mx-auto text-center ">
                <div className="my-10">
                    <h1 className="text-2xl md:text-4xl font-bold  mb-2">
                    Introducing PureNourish Baby Wholesome Nutrition for Your Little One
                    </h1>
                    <p className=" w-[100%] md:w-[75%] mx-auto">At PureNourish, we understand that your baby health is your top priority. Thats why we have crafted a range of baby food products using only the finest organic ingredients.</p>
                </div>


                <SwiperSilder />


            </div>
        </div>
    );
};

export default Banner;