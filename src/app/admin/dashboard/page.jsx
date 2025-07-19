import AllBookings from '../../../components/Bookings/AllBookings'

export const metadata = {
  title: "All Bookings | Car-Care",
  description: "This route is only accessible for admins.",
};


const Dashboard = () => {
  return (
    <div>
        <AllBookings />
    </div>
  )
}

export default Dashboard