export interface userType {
  userName: string;
  email: string;
  passWord: string;
}

export interface questionType {
  title: string;
  options: object;
  votes: object;
  userId: number;
}
