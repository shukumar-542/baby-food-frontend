import { Metadata } from "next";
import Image from "next/image";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
export const metadata: Metadata = {
    title: 'BabyFood | About Us',
    description: 'About us Page',
  }


const AboutUsPage = () => {
    return (
        <div className="grid grid-cols-2 gap-10  justify-center items-center">
            <div className="my-5 h-[80vh]">
                <Image src={'https://i.ibb.co/jgS6nJm/account-img.webp'} className='h-[100%] w-[100%]' width={220} height={220} alt='img' />

            </div>
            <div className="space-y-2">

                <h1 className="text-4xl font-serif mb-2">About Baby Food</h1>
                <p className="flex items-center gap-2">
                    <MdEmail/>
                    <span>mail@slurrpfarm.com</span>
                </p>
                <p className="flex items-center gap-2">
                    <BiPhoneCall/>
                    <span>+91-9318318000</span>
                </p>
                <p className="flex items-center gap-2">
                    <BiLocationPlus/>
                    <span className="font-semibold">LGF, NS-15, Mianwali Nagar, Paschim Vihar, Dhanmondi, Dhaka-110087</span>
                </p>
                <p>Thank you for visiting baby shop Farm! We love to hear from you and answer any questions you may have. Please fill in the details below, hit send, and a member of our team will be in touch with you shortly.</p>
            </div>
        </div>
    );
};

export default AboutUsPage;