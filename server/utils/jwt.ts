import jwt, { JwtPayload } from "jsonwebtoken";

export const GenerateToken = (id: number, name: string): string => {
  const { jwt_se } = useRuntimeConfig();
  return jwt.sign({ id, name }, jwt_se);
};

export const ValidateToken = (token: string) => {
  const { jwt_se } = useRuntimeConfig();
  return jwt.verify(token, jwt_se);
};
