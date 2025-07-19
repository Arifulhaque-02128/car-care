'use server'
import dbConnect from "../../../lib/dbconnect";
import bcrypt from "bcrypt";

const registerUser = async (payload) => {
    const collection = await dbConnect("caruser");
    
    const {email, password, username} = payload;
    if(!email || !password || !username){
        return {success : false, mesaage : "Registration Failed."}
    }

    const user = await collection.findOne({email});

    if(!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;
        console.log("USER :::", payload);
        const res = await collection.insertOne(payload);
        return {
            success: true,
            response: {
                acknowledged: res.acknowledged,
                insertedId: res.insertedId.toString()  // Convert ObjectId to string
            }
        };
    }
    
    return {success : false, response : "User already exists."}
};

export default registerUser;