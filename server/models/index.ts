export interface userType {
  name: string;
  email: string;
  password: string;
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
  endsAt: Date;
}

export interface updateQType {
  title?: string;
  options?: object;
  endsAt?: Date;
}

export interface makeVoteType {
  choice: string;
  voterName: string;
  questionId: number;
}
