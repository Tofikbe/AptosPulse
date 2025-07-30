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
      version: "2.0", // Important for OAuth 2.0 flow
    }),
    EmailProvider({
      sendVerificationRequest: async ({ identifier, url }) => {
        const { error } = await resend.emails.send({
          from: "PulseAI <otp@resend.dev>",
          to: [identifier],
          subject: "Your PulseAI Login Link",
          html: `<p>Click to login: <a href="${url}">${url}</a></p>`,
        })

        if (error) {
          console.error("Email error:", error)
          throw new Error("Failed to send email")
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "some-random-secret", // replace if needed
})

export const GET = handler
export const POST = handler
