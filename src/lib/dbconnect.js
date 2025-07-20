import { MongoClient, ServerApiVersion } from 'mongodb';

const dbConnect = async (collectionName) => {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
  const dbName = process.env.DB_NAME;

  // console.log("URI :::", uri);
  // console.log("DB :::", dbName);

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  return client.db(dbName).collection(collectionName);
}

export default dbConnect;