import ServiceSection from "../components/ServiceSection/ServiceSection";
import { notFound } from 'next/navigation';

export const metadata = {
  title: "Home Page | Car-Care",
  description: "Explore Our Services",
};


const getServices = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/services`, {
      cache: 'no-store', // optional: if you're testing changes live
    });

    console.log("HOME :::", res);

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

export default async function Home() {

  const service = await getServices();

  if (!service || !service.data) {
    notFound(); 
  }

  const { data } = service;
  
  return (
    <div>
      <ServiceSection services = {data} />
    </div>
  );
}
