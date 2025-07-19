'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import registerUser from '../../app/actions/Auth/RegisterUser';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const Register = () => {
  const {register, handleSubmit, reset, formState : {errors}} = useForm();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
        const res = await registerUser(data); 
        console.log("RES :::", res);

        if (res.success) {
            toast.success("Registered successfully!");
            reset();
            router.push("/login");
            setLoading(false);
        } else {
            console.log("Registration failed: " + res.response || res.message);
            toast.error("Registration failed 😥");
            setLoading(false);
        }

    } catch (error) {
        console.error("Registration error:", error);
        toast.error("Something went wrong.");
        setLoading(false);
    }
  };
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 lg:p-12 self-center w-screen h-screen'>
        <Toaster />

        {/* image */}
        <div className='col-span-1 flex flex-col itmes-center justify-center'>
            <Image src={'/assets/images/login/login.svg'} width={600} height={600} alt="Register" className='object-cover self-end' />
        </div>

        {/* Form */}
        <div className='col-span-1 p-4 lg:p-12 flex flex-col justify-center items-center'>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-12 p-4 lg:p-12 border-0 shadow rounded-md w-full lg:w-2/3'>
                <div>
                    <h1 className='text-center text-2xl font-bold'>Register</h1>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='username'>User Name </label>
                    <input 
                        id='username'
                        type='text'
                        placeholder='Your Full Name...'
                        className='w-min-48 border rounded-md p-2'
                        {...register("username", { required: true })} 
                    />
                    {errors.username && <span className='text-red-700'>This field is required</span>}
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='email'>Email </label>
                    <input 
                        id='email'
                        type='email'
                        placeholder='Your Email...'
                        className='w-min-48 border rounded-md p-2'
                        {...register("email", { required: true })} 
                    />
                    {errors.email && <span className='text-red-700'>This field is required</span>}
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='password'>Password </label>
                    <input 
                        id='password'
                        type='password'
                        placeholder='Your Password...'
                        className='w-min-48 border rounded-md p-2'
                        {...register("password", { required: true })} 
                    />
                    {errors.password && <span className='text-red-700'>This field is required</span>}
                </div>
                
                <button type="submit" disabled={loading}
                    className='bg-red-600 hover:bg-red-700 transition duration-300 px-4 py-2 text-white rounded-md cursor-pointer flex flex-row justify-center items-center space-x-4'> 
                    {
                        loading && <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    }
                    <span>Submit</span>
                </ button>

                {/* Other Sign Up Option */}
                <div className='flex flex-col space-y-6 justify-center items-center'>
                    <p className='text-center'> Or Sign In with </p>
                    <SocialLogin />
                </div>

                {/* Login */}
                <div>
                    <p className='text-gray-600 text-center'> Already have an account? <Link href={'/login'} className='underline text-red-700 cursor-pointer mt-12'>Login</Link> </p>
                </div>
            </form>

        </div>
        
    </div>
  )
}

export default Register