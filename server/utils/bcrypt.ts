// additional function helps with process
import { genSalt, hash, compare } from "bcrypt";
// BCRYPT
export const GenerateSalt = (): Promise<string> => genSalt();

export const GenerateHash = (password: string, salt: string): Promise<string> =>
  hash(password, salt);

export const ValidatePassword = (
  Entered: string,
  Saved: string
): Promise<boolean> => compare(Entered, Saved);
// JWT
