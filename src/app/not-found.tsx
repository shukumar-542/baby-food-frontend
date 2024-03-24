import Image from 'next/image';
import notFound  from '@/assets/404-error.png'
const NotFoundPage = () => {
    return (
        <div className='bg-gray-100 flex flex-col justify-center items-center h-screen'>
            <Image src={notFound} width={200} height={200} alt='not-found'/>
            <h1 className='text-2xl font-serif'>Page Not found</h1>

        </div>
    );
};

export default NotFoundPage;