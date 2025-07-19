'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ServiceDetailsMain = ({serviceData}) => {
//   console.log("service :::", serviceData);
  const {title, description, price, img, _id} = serviceData;
//   console.log(title);

  const router = useRouter();
  const [loadingId, setLoadingId] = useState(null);

  const handleNavigate = (id) => {
    setLoadingId(id);
    router.push(`/checkout/${id}`);
  }

  return (
    <div className='space-y-12'>
        {/* first row */}
        <div className='grid grid-cols-3 gap-y-6 md:gap-y-0 md:gap-x-12 p-4'>
            <div className='relative h-100 col-span-3 md:col-span-2 p-4'>
                <Image src={img} fill alt={title} className='object-cover rounded-md'/>
                <div className='relative inset-0 bg-black/50 z-10' />
            </div>
            <div className='col-span-2 md:col-span-1 p-8 bg-gray-100 rounded-md flex flex-col h-full'>
                <h1 className='font-bold text-xl mb-6 text-center text-red-600'>Checkout</h1>
                <h1 className='font-bold my-2'>Service : {title}</h1>
                <h1 className='font-bold mb-12'>Price : ${price}</h1>
    
                <button 
                    className='text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-300 px-4 py-2 cursor-pointer self-center mt-auto'
                    disabled={loadingId}
                    onClick={() => handleNavigate(_id)}
                >   
                    {
                        loadingId === _id ?
                            <div className='px-6'>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            </div>
                            :
                            <span>Proceed Checkout</span>
                    }
                    
                </button>
              
            </div>
        </div>

        {/* Second row */}
        <div className='grid grid-cols-3 p-4 md:space-x-12'>
            <div className='relative col-span-3 md:col-span-2 p-4 space-y-6'>
                <h1 className='font-bold text-2xl text-black/80'> {title} </h1>
                <p className='text-justify text-gray-800'> {description} </p>
            </div>

            <div>

            </div>
        </div>

    </div>
  )
}

export default ServiceDetailsMain;