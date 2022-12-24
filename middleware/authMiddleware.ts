export default defineNuxtRouteMiddleware((to, from) => {
  const { getAuthToken } = useAuth();
  if (
    !(to.path === "/auth/LogIn" || to.path === "/auth/Register") &&
    getAuthToken()
  ) {
    return navigateTo({ path: "auth/LogIn" });
  }
  return navigateTo({ path: "/question" });
});
