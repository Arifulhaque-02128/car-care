import React from 'react'
import ServiceDetailsHero from '../../../components/ServiceSection/ServiceDetailsHero';
import ServiceDetailsMain from '../../../components/ServiceSection/ServiceDetailsMain';


export const getSingleService = async (id) => {
    // const res = await fetch(`http://localhost:3000/api/services/${id}`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`);

    if (!res.ok) {
        console.error("❌ API responded with error:", res.status);
        return null;
    }
    return res.json();
}


export async function generateMetadata({ params }) {
  const { id } = await params;
  const productInfo = await getSingleService(id);

  // console.log("productInfo", productInfo);
  
  return {
    title: `${productInfo?.data?.title} | Car-Care`,
    description: productInfo?.data?.description,
  }
}


const SingleService = async ({params}) => {

  const {id} = await params;
  const {data} = await getSingleService(id);

//   console.log(data);

  return (
    <div className='w-screen px-2 md:px-24'>
        {/* Hero */}
        <section>
            <ServiceDetailsHero title={data?.title} />
        </section>
        {/* Service Image, Checkout and Description */}
        <section>
            <ServiceDetailsMain serviceData={data} />
        </section>
    </div>
  )
}

export default SingleService