import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import dbConnect from "../../../../lib/dbconnect";
import { ObjectId } from "mongodb";


export const GET = async (req, {params}) => {
    const {id} = await params;

    const collection = await dbConnect("car-bookings");
    const res = await collection.findOne({_id : new ObjectId(id)});

    return Response.json(res);
}

export const PATCH = async (req, {params}) => {
    const {id} = await params;

    const payload = await req.json();

    const collection = await dbConnect("car-bookings");
    const res = await collection.updateOne({_id : new ObjectId(id)}, {$set : payload});

    return  Response.json(res);
}

export const DELETE = async (req, {params}) => {
    const {id} = await params;

    const session = await getServerSession(authOptions);

    const collection = await dbConnect("car-bookings");
    const currentBooking = await collection.findOne({_id : new ObjectId(id)});

    // console.log("CURRENT :::", currentBooking);

    // console.log("SESSION :::", session);

    if(currentBooking?.email === session?.user?.email){
        const res = await collection.deleteOne({_id : new ObjectId(id)});
        return Response.json(res);
    }

    return Response.json({response : "Failed to Delete"}, {status : 400});
}