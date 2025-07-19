import ServiceSection from "../components/ServiceSection/ServiceSection";
import { getServerSession } from "next-auth";
import {authOptions} from "./api/auth/[...nextauth]/route";


export const metadata = {
  title: "Home Page | Car-Care",
  description: "Explore Our Services",
};


const getServices = async () => {
  const res = await fetch("http://localhost:3000/api/services");
  if (!res.ok) {
    console.error("❌ API responded with error:", res.status);
    return null;
  }
  return res.json();
};

export default async function Home() {

  const {data} = await getServices();

  // console.log(data);
  // const sessions = await getServerSession(authOptions);
  // console.log("Sesssion ::::", sessions);
  
  return (
    <div>
      <ServiceSection services = {data} />
    </div>
  );
}
