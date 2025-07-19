import dbConnect from "../../../lib/dbconnect"

export const GET = async () => {
    const collection = await dbConnect("services");
    const data = await collection.find({}).toArray();

    return Response.json({data}, {status : 200});
};

