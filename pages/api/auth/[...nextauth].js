import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import EmailProvider from "next-auth/providers/email";

const handler = NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: "smtp.resend.com",
        port: 587,
        auth: {
          user: "resend",
          pass: "re_e2rZdAHG_9TE18SNPaiD8HfwccBNieBx4",
        },
      },
      from: "pulse@resend.dev",
    }),
    TwitterProvider({
      clientId: "3W0d5XZtEMOpvVVuK9k3ydCl0",
      clientSecret: "Mi2Sb8ChqYnC2TN7rQYhDcRYfVSF48Nc25V7bnNgkdtAs",
      version: "2.0",
    }),
  ],
  pages: {
    signIn: "/",
  },
});

export { handler as GET, handler as POST };
