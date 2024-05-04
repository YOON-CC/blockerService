import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/board",
  },
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      return { ...session, ...token };
    },
  },
  secret: process.env.AUTH_SECRET,
  trustHost: true,
});
