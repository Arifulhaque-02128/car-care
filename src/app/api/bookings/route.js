import { getServerSession } from "next-auth";
import dbConnect from "../../../lib/dbconnect";
import {authOptions} from '../auth/[...nextauth]/route'


export const GET = async (req) => {
    const {user} = await getServerSession(authOptions);
    // console.log("USER INFO :::", user);

    const targetEmail = user?.email;

    // console.log("target email :::", targetEmail);

    const isAdmin = targetEmail === "ariiifhaque@gmail.com" || targetEmail === "jsmith@gmail.com";

    const collection = await dbConnect("car-bookings");

    if(isAdmin){
        const res = await collection.find({}).toArray();
        return Response.json(res);
    }

    const res = await collection.find({email : targetEmail}).toArray();

    // console.log("HELLO :::", res);

    return Response.json(res);
}


export const POST = async (req) => {
    const data = await req.json();
    // console.log("server post :::", data);

    const collection = await dbConnect("car-bookings");
    const res = await collection.insertOne(data);

    return Response.json(res);
}