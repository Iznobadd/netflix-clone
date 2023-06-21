export interface Question {
  question: string;
  answer: string;
  showAnswer: boolean;
}

export interface Token {
  email: string;
  iat: number;
  exp: number;
}
