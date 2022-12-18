import jwt, { JwtPayload } from "jsonwebtoken";

export const GenerateToken = (id: number, name: string): string => {
  const { jwt_se } = useRuntimeConfig();
  return jwt.sign({ id, name }, jwt_se);
};

export const ValidateToken = (token: string): { id: string | JwtPayload } => {
  const { jwt_se } = useRuntimeConfig();
  const decoded = jwt.verify(token, jwt_se);
  return { id: decoded };
};
