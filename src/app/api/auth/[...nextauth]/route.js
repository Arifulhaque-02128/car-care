import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import dbConnect from "../../../../lib/dbconnect";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // console.log("SERVER - 1 :::", credentials);
        const { email, password } = credentials;

        const collection = await dbConnect("caruser");
        const user = await collection.findOne({ email });

        if(!user){
            return null
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            // console.log("Password Wrong");
            return null;
        }
        // console.log("SERVER 2 :::", user);
        
        return user;
      }
    }),

    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    })
  ],

  pages : {
    signIn: '/login'
  },

  callbacks: {
    
    async signIn({ user, account, profile, credentials }) {
        const {provider, providerAccountId } = account;

        const {name, image, email} = user;
        const collection = await dbConnect("caruser");
        const isExisted = await collection.findOne({ email });
       
        if(!isExisted){
            console.log("doesn't exist ::");
            const payload = {providerAccountId, provider, username : name, image, email};

            await collection.insertOne(payload);
        }

        console.log("yes, exist ::", user);

        return true
    },
    
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.email = user.email;
      }
      return token;
    }
  }
  
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };