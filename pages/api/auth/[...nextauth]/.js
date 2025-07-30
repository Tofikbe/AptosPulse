import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"

export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: "QPNDiU8D1yKcS1IAx5ojp0YDF",
      clientSecret: "Mi2Sb8ChqYnC2TN7rQYhDcRYfVSF48Nc25V7bnNgkdtAs",
    }),
  ],
  secret: "PulseAI_SECRET_KEY_123",
})
