// additional function helps with process
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

// BCRYPT
export const GenerateSalt = async (): Promise<string> => {
  return await bcrypt.genSalt();
};
export const GeneratePassword = async (
  password: string,
  salt: string
): Promise<string> => {
  return await bcrypt.hash(password, salt);
};
export const ValidatePassword = async (
  EnteredPass: string,
  SavedPass: string
): Promise<boolean> => {
  return await bcrypt.compare(EnteredPass, SavedPass);
};
// JWT
export const CreateToken = async (
  id: string,
  name: string,
  jwt_se: string
): Promise<string> => {
  return jwt.sign({ id, username: name }, jwt_se);
};
export const ValidateToken = async (
  token: string,
  jwt_se: string
): Promise<{ id: string | boolean }> => {
  const decoded = jwt.verify(token, jwt_se);
  console.log(decoded);
  return { id: "sfsds" || false };
};
