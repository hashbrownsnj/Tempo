export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*", "/tasks/:path*", "/calendar/:path*", "/projects/:path*", "/focus/:path*", "/settings/:path*"],
};
