import UrlPattern from "url-pattern";
import { getUserDataById } from "../db/user";
import { ValidateToken } from "../utils/jwt";

export default defineEventHandler(async (event) => {
  const endPoints = [
    "/api/vote/:id",
    "/api/question/:id",
    "/api/question/all",
    "/api/question/create",
  ];

  const IsHandledByThisMiddleware = endPoints.some((endPoint) => {
    const pattern = new UrlPattern(endPoint);

    const { url } = event.req;

    if (url) {
      return pattern.match(url);
    }

    return false;
  });

  if (!IsHandledByThisMiddleware) return;

  const token = event.req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      })
    );
  }

  const decoded = ValidateToken(token);

  if (!decoded) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized token",
      })
    );
  }

  const user = await getUserDataById(Number(decoded.id));

  event.context.auth = user;
  return;
});
