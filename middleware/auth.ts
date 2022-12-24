export default defineNuxtRouteMiddleware((to, from) => {
  // if (
  //   !(to.path === "/auth/LogIn" || to.path === "/auth/Register") &&
  //   !localStorage.getItem("token")
  // ) {
  //   if (from.path === "/auth/LogIn" || from.path === "/auth/Register") {
  //     return navigateTo({ path: "auth/LogIn" });
  //   }
  //   return navigateTo({ path: "auth/LogIn" });
  // }
});
