'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import Modal from "../Modal/Modal";

const AllBookings = () => {

  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
        try {
            const res = await fetch("/api/bookings");
            const result = await res.json();
            // console.log("Fetch :::", result);
            setMyBookings(result);
        } catch (err) {
            console.error("Error fetching bookings:", err);
        } finally {
            setLoading(false);
        }
    };
    fetchBookings();
  }, []);

  const handleDeleteService = async (_id) => {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/bookings/${_id}`, {
        method : "DELETE",
    });

    if(res?.ok){
        setLoading(false);
        toast.success("Service Deleted.");
        setMyBookings(prev => prev.filter(booking => booking._id !== _id));
        console.log("CLIENT :::", res);
        
    } else {
        setLoading(false);
        toast.error("Failed to Delete.");
        console.log("CLIENT :::", res);
        
    }
  }

  return (

    <div className='lg:p-4 relative w-screen h-screen'>
        {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
                <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
        )}
        <h1 className='text-center my-12 text-xl font-semibold'> All Bookings </h1>
        <div className="overflow-x-auto w-full lg:overflow-hidden">
            <table className="min-w-full border-0 shadow text-sm text-center lg:mx-8 overflow-scroll">
                <thead className="bg-gray-50 text-gray-700 uppercase border-0 shadow">
                    <tr>
                    <th className="px-4 py-2">Service Image</th>
                    <th className="px-4 py-2">Service Name</th>
                    <th className="px-4 py-2">Service Date</th>
                    <th className="px-4 py-2">Service Price</th>
                    <th className="px-4 py-2"></th>
                    <th className="px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
            
                    {
                        myBookings?.map((book) => {
                            return (
                                <tr key={book._id} className="hover:bg-gray-100 border-0 shadow">
                                    <td className="px-4 py-2 flex justify-center items-center">
                                        <Image src={book.service_image} width={100} height={100} alt="Service" className="object-cover rounded-md self-center" />
                                    </td>
                                    <td className="px-4 py-2 ">{book.service_name}</td>
                                    <td className="px-4 py-2 ">{book.date}</td>
                                    <td className="px-4 py-2 ">{book.amount}</td>
                                    <td className="px-4 py-2 ">
                                        <Link href={`/my-bookings/${book._id}`}>
                                            <BiSolidEdit title="Edit" size={25} className="text-green-600 cursor-pointer"
                                            // onClick={() => handleEditService()}
                                            />
                                        </Link>
                                        
                                    </td>
                                    <td className="px-4 py-2 ">
                                        <RiDeleteBin6Line title="Delete" size={25} className="text-red-500 cursor-pointer" 
                                        onClick={() => handleDeleteService(book._id)}
                                        />
                                    </td>
                                    {
                                        pathname === "/admin/dashboard" &&
                                        <td className="px-4 py-2 ">
                                            <CgDetailsMore title="Details" size={25} className="text-gray-500 cursor-pointer" 
                                            onClick={() => {
                                                setShowModal(true)
                                                setSelectedBooking(book)
                                            }}
                                            />
                                        </td>
                                    }

                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            {
                (showModal && selectedBooking) &&
                <Modal modalState={[showModal, setShowModal]} selectedBooking={selectedBooking} />
            }
        </div>
    </div>
        
  )
}

export default AllBookings;