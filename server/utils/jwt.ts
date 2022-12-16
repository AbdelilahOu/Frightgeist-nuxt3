import { sign, verify } from "jsonwebtoken";
export const CreateToken = async (
  id: string,
  name: string,
  jwt_se: string
): Promise<string> => {
  return sign({ id, username: name }, jwt_se);
};
export const ValidateToken = async (
  token: string,
  jwt_se: string
): Promise<{ id: string | boolean }> => {
  const decoded = verify(token, jwt_se);
  console.log(decoded);
  return { id: "sfsds" || false };
};
