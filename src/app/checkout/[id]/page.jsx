import CheckoutForm from '../../../components/CheckoutForm/CheckoutForm';

export const metadata = {
  title: "Checkout | Car-Care",
  description: "Confirm the order",
};


export const getSingleService = async (id) => {
    const res = await fetch(`/api/services/${id}`);

    if (!res.ok) {
        console.error("❌ API responded with error:", res.status);
        return null;
    }
    return res.json();
}

const CheckoutPage = async ({params}) => {

  const { id } = await params;

  const {data} = await getSingleService(id);

  // console.log("DATA :::", data);

  return (
    <div>
        <CheckoutForm serviceData={data} />
    </div>
  )
}

export default CheckoutPage