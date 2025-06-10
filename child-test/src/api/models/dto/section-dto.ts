import { QuestionDto } from "./question-dto";

export class SectionDto {
  name: string;
  questions: QuestionDto[];

  constructor(name: string, questions: QuestionDto[]) {
    this.name = name;
    this.questions = questions;
  }
}
