export class AnswerDto {
  idQuestion: number;

  constructor(idQuestion: number) {
    this.idQuestion = idQuestion;
  }
}

export class AnswerFileDto extends AnswerDto {
  fileBase64: string;

  constructor(idQuestion: number, fileBase64: string) {
    super(idQuestion);
    this.fileBase64 = fileBase64;
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