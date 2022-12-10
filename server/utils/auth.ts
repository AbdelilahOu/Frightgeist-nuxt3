// additional function helps with process
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SE } from "../config";

// BCRYPT
export const GenerateSalt = async () => {
  return await bcrypt.genSalt();
};
export const GeneratePassword = async (password: string, salt: string) => {
  return await bcrypt.hash(password, salt);
};
export const ValidatePassword = async (
  EnteredPass: string,
  SavedPass: string
) => {
  return await bcrypt.compare(EnteredPass, SavedPass);
};
// JWT
export const CreateToken = async (id: string, name: string) => {
  return jwt.sign({ id, username: name }, JWT_SE);
};
export const ValidateToken = async (token: string) => {
  const decoded = jwt.verify(token, JWT_SE);
  const { id } = decoded;
  return { id: id || false };
};
