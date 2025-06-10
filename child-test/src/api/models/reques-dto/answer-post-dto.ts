import { AnswerDto } from "../dto/answer-dto";

export class AnswerPostDto {
  answers: AnswerDto[];

  constructor(answers: AnswerDto[]) {
    this.answers = answers;
  }
}
