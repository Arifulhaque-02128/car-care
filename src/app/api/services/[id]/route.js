import { ObjectId } from "mongodb";
import dbConnect from "../../../../lib/dbconnect"

export const GET = async (req, {params}) => {

    const {id} = params;

    const collection = await dbConnect('services');
    const data = await collection.findOne({_id : new ObjectId(id)});

    return Response.json({data});
}