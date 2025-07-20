import { getServerSession } from "next-auth";
import dbConnect from "../../../../lib/dbconnect";
import { ObjectId } from "mongodb";
import authOptions from "../../../../lib/authOptions";


export const GET = async (req, {params}) => {
    const {id} = await params;

    const collection = await dbConnect("car-bookings");
    const res = await collection.findOne({_id : new ObjectId(id)});

    return Response.json(res);
}

export const PATCH = async (req, {params}) => {
    const {id} = await params;

    const payload = await req.json();
    const session = await getServerSession(authOptions);


    const collection = await dbConnect("car-bookings");
    const currentBooking = await collection.findOne({_id : new ObjectId(id)});

    const targetEmail = currentBooking?.email;

    const currentUserEmail = session?.user?.email;

    if(targetEmail === currentUserEmail){
        const res = await collection.updateOne({_id : new ObjectId(id)}, {$set : payload});
        return Response.json(res);
    }

    const isAdmin = currentUserEmail === "ariiifhaque@gmail.com" || currentUserEmail === "jsmith@gmail.com";
    if(isAdmin){
        const res = await collection.updateOne({_id : new ObjectId(id)}, {$set : payload});
        return Response.json(res);
    }

    return  Response.json({response : "Failed to Update"}, {status : 400});
}

export const DELETE = async (req, {params}) => {
    const {id} = await params;

    const session = await getServerSession(authOptions);

    const collection = await dbConnect("car-bookings");
    const currentBooking = await collection.findOne({_id : new ObjectId(id)});

    const targetEmail = currentBooking?.email;

    const currentUserEmail = session?.user?.email;

    if(targetEmail === currentUserEmail){
        const res = await collection.deleteOne({_id : new ObjectId(id)});
        return Response.json(res);
    }

    const isAdmin = currentUserEmail === "ariiifhaque@gmail.com" || currentUserEmail === "jsmith@gmail.com";
    if(isAdmin){
        const res = await collection.deleteOne({_id : new ObjectId(id)});
        return Response.json(res);
    }

    return Response.json({response : "Failed to Delete"}, {status : 400});
}