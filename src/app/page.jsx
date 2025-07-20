import ServiceSection from "../components/ServiceSection/ServiceSection";


export const metadata = {
  title: "Home Page | Car-Care",
  description: "Explore Our Services",
};


const getServices = async () => {
  // const res = await fetch("http://localhost:3000/api/services");
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services`);

  if (!res.ok) {
    console.error("❌ API responded with error:", res.status);
    return null;
  }
  return res.json();
};

export default async function Home() {

  const {data} = await getServices();
  
  return (
    <div>
      <ServiceSection services = {data} />
    </div>
  );
}
