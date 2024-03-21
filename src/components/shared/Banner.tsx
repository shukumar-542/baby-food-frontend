
import styles from "./Banner.module.css";
import SwiperSilder from "./Swiper";





const Banner = () => {
    return (
        <div className={`${styles.banner_container} text-white`}>
            <div className="w-[75%] mx-auto text-center ">
                <div className="my-10">
                    <h1 className="text-2xl font-bold mb-2">
                        Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!
                    </h1>
                    <p className=" w-[75%] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
                </div>


                <SwiperSilder />


            </div>
        </div>
    );
};

export default Banner;