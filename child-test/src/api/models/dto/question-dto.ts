import { AnswerOptionDto } from "./answer-option-dto";

export class QuestionDto {
  id: number;
  questionText: string;
  typeQuestion: TypeQuestion;

  answerOptions?: AnswerOptionDto[];

  constructor(
    id: number,
    questionText: string,
    typeQuestion: TypeQuestion,
    answerOptions?: AnswerOptionDto[]
  ) {
    this.id = id;
    this.questionText = questionText;
    this.typeQuestion = typeQuestion;
    this.answerOptions = answerOptions;
  }
}

export enum TypeQuestion {
  file,
  text,
  textArea,
  date,
  multi,
}
