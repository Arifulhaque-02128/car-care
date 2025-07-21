'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FiLogOut, FiLogIn } from "react-icons/fi";

const NavBar = () => {
  const {data} = useSession();
//   console.log("user :::", data);

  return (
    <div className="navbar shadow-sm max-w-460">
        <Toaster />
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow">
                    <li className='font-semibold p-2'><Link href={'/'}>Home</Link></li>
                    <li className='font-semibold p-2'><Link href={'/about'}>About</Link></li>
                    {/* <li>
                    <a>Services</a>
                    <ul className="p-2">
                        <li><Link href={'/service1'}>Service-1</Link></li>
                        <li><Link href={'/service2'}>Service-2</Link></li>
                    </ul>
                    </li> */}
                    {
                        (data?.user?.email) &&
                        (
                            (data?.user?.email === "ariiifhaque@gmail.com" || data?.user?.email === "jsmith@gmail.com") ?
                            <li className='font-semibold p-2'><Link href={'/admin/dashboard'}>All Bookings</Link></li>
                            :
                            <li className='font-semibold p-2'><Link href={'/my-bookings'}>My Bookings</Link></li>
                        )
                        
                    }
                    <li className='font-semibold p-2'><Link href={'/contact'}>Contact</Link></li>
                </ul>
            </div>
            <Link href={'/'}>
                <Image src={'/assets/logo1.jpg'} height={100} width={100} alt='LOGO' />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-4">
                <li className='font-semibold'><Link href={'/'}>Home</Link></li>
                <li className='font-semibold'><Link href={'/about'}>About</Link></li>
                {/* <li>
                    <details>
                    <summary className='font-semibold'>Services</summary>
                    <ul className="p-2 w-40">
                        <li className='font-semibold'><Link href={'/service1'}>Service-1</Link></li>
                        <li className='font-semibold'><Link href={'/service2'}>Service-2</Link></li>
                    </ul>
                    </details>
                </li> */}
                {
                    (data?.user?.email) &&
                    (
                        (data?.user?.email === "ariiifhaque@gmail.com" || data?.user?.email === "jsmith@gmail.com") ?
                        <li className='font-semibold'><Link href={'/admin/dashboard'}>All Bookings</Link></li>
                        :
                        <li className='font-semibold'><Link href={'/my-bookings'}>My Bookings</Link></li>
                    )
                    
                }
                <li className='font-semibold'><Link href={'/contact'}>Contact</Link></li>
            </ul>
        </div>
        
        <div className="navbar-end space-x-4">
            {
                data?.user?.image || data?.user?.username ? 
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal">
                        <li>
                            <details>
                                <summary className='mr-4'>
                                    {
                                        data?.user?.image ?
                                        <Image src={data?.user?.image} width={50} height={50} alt='profie picture' className='rounded-full border-1'/>
                                        :
                                        <div className="w-10 h-10 flex items-center justify-center bg-teal-600 text-white rounded-full font-semibold uppercase">
                                            {data?.user?.name?.charAt(0) || data?.user?.username?.charAt(0)}
                                        </div>
                                    }
                                    
                                </summary>
    
                                <ul className="p-2 w-30 z-50">
                                    <li className='font-semibold'>
                                        <button
                                            onClick={async () => {
                                                await signOut({ callbackUrl: "/login", redirect: true });
                                                toast.success("Logged Out Successfully.");
                                            }}
                                            className='flex flex-row items-center cursor-pointer'
                                        >
                                            <FiLogOut className='text-red-600' />
                                            <span className='text-red-600'>Log Out</span>
                                        </button>
                                    </li>
                                    
                                </ul>
                            </details>
                        </li>
                    </ul>
                    
                    
                </div>
                :
                <Link
                    href={"/login"}
                    className='flex flex-row space-x-2 justify-center items-center cursor-pointer px-4 btn rounded-md'
                >
                    <FiLogIn />
                    <span>Log In</span>
                </Link>
            }
            {/* <Link href={'/'} className="btn btn-outline border-amber-600">Appointment</Link> */}
        </div>
    </div>
  )
}

export default NavBar