"use client"
import React from 'react';


const UpdateProfile = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            name: { value: string };
            email: { value: string };
            phone: { value: string };
            address: { value: string };
            image: { value: string };
        };

        const name = target.name.value;
        const email = target.email.value;
        const phone = target.phone.value;
        const image = target.image.value;
        const address = target.address.value;

        console.log(name, email, phone, image, address);

        // You can add your form submission logic here
    };

    const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const form = e.currentTarget.form as HTMLFormElement;
        if (form) {
            form.reset();
        }
    };

    return (
        <div className='mx-10 h-[93vh] flex items-center justify-center'>
            <div>

                <h1>Update Your Information</h1>
            <div className='w-full bg-white p-8 rounded-md shadow-md' >
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="name" className="text-gray-400">Name</label>
                        <input type="text" className="border rounded-md p-2" placeholder="Enter Your Name" id="name" name="name" />
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="name" className="text-gray-400">Email</label>
                        <input type="text" className="border rounded-md p-2" placeholder="Enter Your Email" id="email" name="email" />
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="image" className="text-gray-400">Image</label>
                        <input type="text" className="border rounded-md p-2" placeholder="Enter Your Image Url" id="image" name="image" />
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="phone" className="text-gray-400">Phone Number</label>
                        <input type="text" className="border rounded-md p-2" placeholder="Enter Your Phone" id="phone" name="phone" />
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="address" className="text-gray-400">Address</label>
                        <textarea className="border rounded-md p-2" placeholder="Enter Your Address" name="address" id="address" />
                    </div>

                    <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Update Information</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default UpdateProfile;