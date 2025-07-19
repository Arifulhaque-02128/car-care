'use client'
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';


const Login = () => {
  const {register, handleSubmit, reset, formState : {errors}} = useForm();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {

    // console.log("DATA :::", data);
    setLoading(true);

    try {
        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            // callbackUrl : "/"
            redirect : false
        });
        // console.log("RES :::", res);

        if(res?.ok) {
            // console.log("LOGIN :::", res);
            toast.success("Login successfull");
            reset();
            router.push("/");
            setLoading(false);
        } else {
            toast.error("Login Failed");
            console.log("err :::", res);
            setLoading(false);
        }

    } catch (err) {
        console.log(err);
        toast.error(err);
        setLoading(false);
    }
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 p-4 lg:p-12 self-center w-screen h-screen'>
        <Toaster />
        {/* image */}
        <div className='col-span-1 flex flex-col itmes-center justify-center'>
            <Image src={'/assets/images/login/login.svg'} width={600} height={600} alt="Login" className='object-cover self-end' />
        </div>

        {/* Form */}
        <div className='col-span-1 p-4 lg:p-12 flex flex-col justify-center items-center'>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-12 p-4 lg:p-12 border-0 shadow rounded-md w-full lg:w-2/3'>
                <div>
                    <h1 className='text-center text-2xl font-bold'>Login</h1>
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
                    <span>Log In</span>
                </ button>

                {/* Other Sign In Option */}
                <div className='flex flex-col space-y-6 justify-center items-center'>
                    <p className='text-center'> Or Log In with </p>
                    <SocialLogin />
                </div>

                {/* Register */}
                <div>
                    <p className='text-gray-600 text-center'> Don't have an account? <Link href={'/register'} className='underline text-red-700 cursor-pointer mt-12'>Register</Link> </p>
                </div>
            </form>

        </div>
        
    </div>
  )
}

export default Login