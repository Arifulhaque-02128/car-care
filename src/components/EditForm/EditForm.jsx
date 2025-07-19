'use client'
import { useSession } from 'next-auth/react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const EditForm = ({serviceData}) => {
  
  const {data : userData} = useSession();
//   console.log("user :::", userData);

  const {service_id, amount, service_name, service_image, _id} = serviceData;
//   console.log("Checkout :::", serviceData);

  const {handleSubmit, register, reset, formState : errors } = useForm();

  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    
    const payload = {...formData, service_id, service_name, service_image };
    console.log("Payload :::", payload);

    setLoading(true);

    const res = await fetch(`/api/bookings/${_id}`, {
        method : "PATCH",
        body : JSON.stringify(payload)
    } );

    const updatedRes = await res.json();
    // console.log("PATCH RES :::", updatedRes);

    if(updatedRes?.acknowledged){
        setLoading(false);
        toast.success("Service Updated Successfully.");
    } else {
        setLoading(false);
        toast.error("Upadating Failed");
    }

    reset();
  }

  return (
    <div className='flex flex-col justify-center items-center m-8'>
        <Toaster />
        <h1 className='font-semibold my-4 text-xl'> Edit Service - <span className='text-amber-600'> {service_name} </span>  </h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-12 p-4 lg:p-12 border-0 shadow rounded-md w-full lg:w-2/4'>
            <div className='flex flex-col gap-2'>
                <label htmlFor='customerName'>User Name </label>
                <input 
                    id='customerName'
                    type='text'
                    placeholder='Your Full Name...'
                    defaultValue={userData?.user?.name || userData?.user?.username}
                    className='w-min-48 border rounded-md p-2'
                    {...register("customerName", { required: true })} 
                />
                {errors.customerName && <span className='text-red-700'>This field is required</span>}
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='email'>Email </label>
                <input 
                    id='email'
                    type='email'
                    placeholder='Your Email...'
                    defaultValue={userData?.user?.email}
                    className='w-min-48 border rounded-md p-2'
                    {...register("email", { required: true })} 
                />
                {errors.email && <span className='text-red-700'>This field is required</span>}
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='tel'>Phone Number </label>
                <input 
                    id='tel'
                    type='tel'
                    placeholder='Your Phone Number...'
                    className='w-min-48 border rounded-md p-2'
                    {...register("tel", { required: true })} 
                />
                {errors.tel && <span className='text-red-700'>This field is required</span>}
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='date'>Date </label>
                <input 
                    id='date'
                    type= 'date'
                    className='w-min-48 border rounded-md p-2 cursor-pointer'
                    {...register("date", { required: true })} 
                />
                {errors.date && <span className='text-red-700'>This field is required</span>}
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='amount'>Due Amount </label>
                <input 
                    id='amount'
                    type= 'text'
                    defaultValue={`${amount}`}
                    readOnly
                    className='w-min-48 border rounded-md p-2'
                    {...register("amount", { required: true })} 
                />
                {errors.amount && <span className='text-red-700'>This field is required</span>}
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='address'>Address </label>
                <input 
                    id='address'
                    type= 'text'
                    placeholder='Your Address...'
                    className='w-min-48 border rounded-md p-2'
                    {...register("address", { required: true })} 
                />
                {errors.address && <span className='text-red-700'>This field is required</span>}
            </div>
            
            <button type="submit" disabled={isLoading}
                className='bg-red-600 hover:bg-red-700 transition duration-300 px-4 py-2 text-white rounded-md cursor-pointer flex flex-row justify-center items-center space-x-4'> 
                {
                    isLoading && <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                }
                <span>Upadate Order</span>
            </ button>
        </form>
        
    </div>
  )
}

export default EditForm;