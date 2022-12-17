import UrlPattern from "url-pattern";

export default defineEventHandler(async (event) => {
  const endPoints = ["/api/vote/:id"];

  const IsHandledByThisMiddleware = endPoints.some((endPoint) => {
    const pattern = new UrlPattern(endPoint);

    const { url } = event.req;

    if (url) {
      return pattern.match(url);
    }

    return false;
  });

  if (!IsHandledByThisMiddleware) return;
});
