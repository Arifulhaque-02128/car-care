import React from 'react'
import EditForm from '../../../components/EditForm/EditForm';


export const metadata = {
  title: "Update Booking | Car-Care",
  description: "Update your booked service",
};


export const getSingleBooking = async (id) => {
    const res = await fetch(`/api/bookings/${id}`);

    if (!res.ok) {
        console.error("❌ API responded with error:", res.status);
        return null;
    }
    return res.json();
}

const UpdateBookingPage = async ({params}) => {
  const {id} = await params;
  const singleBooking = await getSingleBooking(id);

  // console.log("UPDATE PAGE ::::", singleBooking);

  return (
    <div>
        <EditForm serviceData={singleBooking} />
    </div>
  )
}

export default UpdateBookingPage