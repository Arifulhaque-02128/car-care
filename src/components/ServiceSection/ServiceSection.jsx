'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GrFormNextLink } from "react-icons/gr";

const ServiceSection = ({services}) => {

  const router = useRouter();
  const [loadingId, setLoadingId] = useState(null);

  const handleNavigate = (id) => {
    setLoadingId(id);
    router.push(`/service/${id}`);
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-6">
        
        <div className="w-full md:w-1/2 self-center space-y-2 px-4">
            <h4 className="text-center text-red-600 font-semibold">Service</h4>
            <h1 className="text-center font-semibold text-2xl">Our Service Area</h1>
            <p className="text-center font-light text-gray-600">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 px-4'>
            {
                services?.map((s) => {
                    
                    return (
                        <div key={s.service_id} className='border-gray-500 rounded-md p-4 shadow space-y-4'>
                            <Image src={s.img} height={150} width={300} alt={s.title} 
                            className='border rounded-md' />
                            <h1 className='text-xl font-semibold text-gray-700'> {s.title} </h1>
                            <div className='flex flex-row justify-between items-center'>
                                <p className='text-red-600'> Price : ${s.price} </p>
                                {   loadingId === s._id ? 

                                    (
                                        <div className="w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                                    ) 
                                    : 
                                    (
                                        <button onClick={() => handleNavigate(s._id)}>
                                            <GrFormNextLink size={25} className='text-red-600 cursor-pointer' />
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ServiceSection