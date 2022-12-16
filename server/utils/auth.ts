// additional function helps with process
import { genSalt, hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
// BCRYPT
export const GenerateSalt = async (): Promise<string> => {
  return await genSalt();
};
export const GeneratePassword = async (
  password: string,
  salt: string
): Promise<string> => {
  return await hash(password, salt);
};
export const ValidatePassword = async (
  EnteredPass: string,
  SavedPass: string
): Promise<boolean> => {
  return await compare(EnteredPass, SavedPass);
};
// JWT
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
