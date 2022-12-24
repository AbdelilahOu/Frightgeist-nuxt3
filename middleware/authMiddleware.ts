// export default defineNuxtRouteMiddleware((to, from) => {
//   const { getAuthToken, getAuthUser } = useAuth();
//   console.log(getAuthUser());
//   if (
//     !(to.path === "/auth/LogIn" || to.path === "/auth/Register") &&
//     getAuthToken()
//   ) {
//     return navigateTo({ path: "auth/LogIn" });
//   }
//   return navigateTo({ path: "/question" });
// });
