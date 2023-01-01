export interface question {
  createdAt: string;
  endsAt: string;
  id: number;
  options: any;
  title: string;
  userId: number;
  resultId: number;
}

export interface voteStats {
  choice: string;
  _count: {
    _all: number;
  };
}

export interface questionState {
  Questions: question[] | null;
  ChosenQuestion: question | null;
  ChosenQuestionVotes: voteStats[] | null;
  MadeVote: Vote | null;
}

export interface Vote {
  id: number;
  createdAt: string;
  choice: string;
  voterName: string;
  questionId: number;
}

export interface userStore {
  user: user | null;
}

export interface user {
  id: number;
  name: string;
  email: string;
}

export interface RegisterUser {
  userName: string;
  passWord: string;
  email: string;
}
