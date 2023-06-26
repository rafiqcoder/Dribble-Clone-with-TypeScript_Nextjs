import { getServerSession } from "next-auth";

import { NextAuthOptions, User } from "next-auth";

import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import Jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    // jwt: {
    //     encode: ({ secret, token }) => {
        
    //     },
    //     decode: async ({ secret, token }) => {
    //     },
    // }
    
    theme: {
        logo: '/logo.png',
        colorScheme: 'light',
    },
    callbacks: {
        async session({session, token}) {
            // session.user.id = token.id;
            return session;
        },
        async signIn({ user }: { user: User | AdapterUser }) {
           try {
            //get user if they exist
               //if they don't exist create them
               //return true if they exist
               return true;
           } catch (error: any) {
            console.log(error);
            return false;
           }
        }
    }


}