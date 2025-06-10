export class AnswerDto {
  idQuestion: number;

  constructor(idQuestion: number) {
    this.idQuestion = idQuestion;
  }
}

export class AnswerFileDto extends AnswerDto {
  file: Blob;

  constructor(idQuestion: number, file: Blob) {
    super(idQuestion);
    this.file = file;
  }
}


export class AnswerTextDto extends AnswerDto {
  text: string;

  constructor(idQuestion: number, text: string) {
    super(idQuestion);
    this.text = text;
  }
}

export class AnswerMultiDto extends AnswerDto {
  idAnswer: number;

  constructor(idQuestion: number, idAnswer: number) {
    super(idQuestion);
    this.idAnswer = idAnswer;
  }
}