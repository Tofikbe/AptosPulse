import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"
import EmailProvider from "next-auth/providers/email"
import { Resend } from "resend"

const resend = new Resend("re_e2rZdAHG_9TE18SNPaiD8HfwccBNieBx4")

const handler = NextAuth({
  providers: [
    TwitterProvider({
      clientId: "31275186",
      clientSecret: "Mi2Sb8ChqYnC2TN7rQYhDcRYfVSF48Nc25V7bnNgkdtAs",
    }),
    EmailProvider({
      sendVerificationRequest: async ({ identifier, url }) => {
        const { data, error } = await resend.emails.send({
          from: "PulseAI <otp@resend.dev>",
          to: [identifier],
          subject: "Your PulseAI Login Link",
          html: `<p>Click to login: <a href="${url}">${url}</a></p>`,
        })
        if (error) throw new Error("Failed to send email")
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: "some-random-secret",
})

export { handler as GET, handler as POST }
