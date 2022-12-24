export default defineNuxtRouteMiddleware((to, from) => {
  if (
    !(to.path === "/auth/LogIn" || to.path === "/auth/Register") &&
    localStorage.getItem("token")
  ) {
    return navigateTo({ path: "auth/LogIn" });
  }
});
