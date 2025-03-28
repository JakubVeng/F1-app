import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth, signOut } = NextAuth({ 
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    /*callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const admin_email = process.env.ADMIN_EMAILS!.split(' ');
            return admin_email.includes(user.email!);
        }
    }*/
});