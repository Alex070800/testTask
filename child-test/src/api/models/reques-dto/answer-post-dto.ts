import { AnswerDto } from "../dto/answer-dto";

export class AnswerPostRequestDto {
  answers: AnswerDto[];

  constructor(answers: AnswerDto[]) {
    this.answers = answers;
  }
}
