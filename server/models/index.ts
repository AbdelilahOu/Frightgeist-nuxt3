export interface userType {
  name: string;
  email: string;
  passWord: string;
}
export interface userUpdate {
  name: string;
  id: number;
}
export interface questionType {
  title: string;
  options: object;
  votes: object;
  userId: number;
  endIn: number;
}
