// additional function helps with process
import { genSalt, hash, compare } from "bcrypt";
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
