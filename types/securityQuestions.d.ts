// securityQuestions.d.ts

export type securityQuestionType = { id: string; question: string };
export type securityQuestionsType = securityQuestionType[];

declare const securityQuestions: string[];
export default securityQuestions;
