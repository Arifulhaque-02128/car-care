import AllBookings from '../../components/Bookings/AllBookings'

export const metadata = {
  title: "All Bookings | Car-Care",
  description: "Get your booked services",
};


const MyBookingsPage = () => {
  return (
    <div >
        <AllBookings />
    </div>
  )
}

export default MyBookingsPage;