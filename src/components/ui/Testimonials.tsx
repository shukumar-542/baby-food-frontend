import Image from "next/image";
import tesimonials1 from '@/assets/testimonial_1.webp'
import tesimonials2 from '@/assets/testimonial_2.webp'
import tesimonials3 from '@/assets/testimonial_3.webp'
import before from '@/assets/before.webp'

const Testimonials = () => {
    return (
        <div className={`testimonials relative py-10 my-20 `}>
            <div className=" absolute top-[-40px]">
                <Image src={before} className="w-full h-[100px]" height={400} width={1600} alt="testimonials" />
            </div>
            <div className="text-center my-20 ">
                <h6 className="text-[#E16525]">TESTIMONIAL</h6>
                <h2 className="text-3xl font-bold text-[#4B0800]">What Our Customers Say</h2>
            </div>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2">
                    <div className="relative">
                        <div className=" absolute top-[-15%] left-[30%] flex items-center justify-center ">
                            <Image src={tesimonials1} height={100} width={140} alt="testimonials" />
                        </div>
                       
                        <div className="bg-white mt-10 rounded-md my-10 p-5 text-center">

                            <div className="mt-14">
                                <h1 className="text-xl font-bold">Simon Holmes-<span className="text-black/30">Businessman</span></h1>
                                <p className="text-sm  mt-2 leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta officia maiores nulla rerum, magnam corporis cumque odit, quo nam veritatis, aspernatur blanditiis pariatur qui adipisci! Ratione optio numquam error!  </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className=" absolute top-[-15%] left-[30%] flex items-center justify-center ">
                            <Image src={tesimonials2} height={100} width={140} alt="testimonials" />
                        </div>
                        <div className="bg-white mt-10 rounded-md my-10 p-5 text-center">

                            <div className="mt-14">
                                <h1 className="text-xl font-bold">Simon Holmes-<span className="text-black/30">Businessman</span></h1>
                                <p className="text-sm mt-2 leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta officia maiores nulla rerum, magnam corporis cumque odit, quo nam veritatis, aspernatur blanditiis pariatur qui adipisci! Ratione optio numquam error!  </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className=" absolute top-[-15%] left-[30%] flex items-center justify-center ">
                            <Image src={tesimonials3} height={100} width={140} alt="testimonials" />
                        </div>
                        <div className="bg-white mt-10 rounded-md my-10 p-5 text-center">

                            <div className="mt-14">
                                <h1 className="text-xl font-bold">Simon Holmes-<span className="text-black/30">Businessman</span></h1>
                                <p className="text-sm mt-2 leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta officia maiores nulla rerum, magnam corporis cumque odit, quo nam veritatis, aspernatur blanditiis pariatur qui adipisci! Ratione optio numquam error!  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;