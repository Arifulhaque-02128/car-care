import React from 'react'
import ServiceDetailsHero from '../../../components/ServiceSection/ServiceDetailsHero';
import ServiceDetailsMain from '../../../components/ServiceSection/ServiceDetailsMain';
import { notFound } from 'next/navigation';


const getSingleService = async (id) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}api/services/${id}`, {
      cache: 'no-store', 
    });

    if (!res.ok) {
      console.error("❌ API responded with error:", res.status);
      return null;
    }
    return res.json();
  } catch (error) {
    console.error("❌ Failed to fetch services:", error);
    return null;
  }
};


export async function generateMetadata({ params }) {
  const { id } = params;
  const productInfo = await getSingleService(id);

  // console.log("productInfo", productInfo);
  
  return {
    title: `${productInfo?.data?.title} | Car-Care`,
    description: productInfo?.data?.description,
  }
}


const SingleService = async ({params}) => {

  const { id } = params;
  const service = await getSingleService(id);

  if (!service || !service.data) {
    notFound(); // show 404 page instead of breaking the build
  }

  const { data } = service;

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