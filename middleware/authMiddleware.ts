export default defineNuxtRouteMiddleware((to, from) => {
  const { getAuthToken, getAuthUser } = useAuth();
  if (!getAuthToken() && !getAuthUser()) {
    if (to.path !== "auth/LogIn" && to.path !== "auth/LogIn") {
      return navigateTo({ path: "auth/LogIn" });
    }
  }
  return navigateTo({ path: "/question" });
});
