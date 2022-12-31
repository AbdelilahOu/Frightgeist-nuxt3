export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth middleware");
  const { getAuthToken, getAuthUser } = useAuth();
  if (!getAuthToken() && !getAuthUser()) {
    return navigateTo({ path: "/auth/LogIn" });
  }
});
