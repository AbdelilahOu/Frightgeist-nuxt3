import { JwtPayload, sign, verify } from "jsonwebtoken";

export const GenerateToken = (id: number, name: string): string => {
  const { jwt_se } = useRuntimeConfig();
  return sign({ id, name }, jwt_se);
};

export const ValidateToken = (token: string): { id: string | JwtPayload } => {
  const { jwt_se } = useRuntimeConfig();
  const decoded = verify(token, jwt_se);
  return { id: decoded };
};
