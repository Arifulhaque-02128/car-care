import { notFound } from 'next/navigation';
import CheckoutForm from '../../../components/CheckoutForm/CheckoutForm';

export const metadata = {
  title: "Checkout | Car-Care",
  description: "Confirm the order",
};


const getSingleService = async (id) => {
    // const res = await fetch(`http://localhost:3000/api/services/${id}`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`);

    if (!res.ok) {
        console.error("❌ API responded with error:", res.status);
        return null;
    }
    return res.json();
}

const CheckoutPage = async ({params}) => {

  const { id } = params;
  const service = await getSingleService(id);

  if (!service || !service.data) {
    notFound(); // show 404 page instead of breaking the build
  }

  const { data } = service;

  // console.log("DATA :::", data);

  return (
    <div>
        <CheckoutForm serviceData={data} />
    </div>
  )
}

export default CheckoutPage