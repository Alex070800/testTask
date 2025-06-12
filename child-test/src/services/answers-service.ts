import {
  AnswerDto,
  AnswerFileDto,
  AnswerMultiDto,
  AnswerTextDto,
} from "../api/models/dto/answer-dto";
import { QuestionDto, TypeQuestion } from "../api/models/dto/question-dto";
import { SectionDto } from "../api/models/dto/section-dto";
import { AnswerPostDto } from "../api/models/reques-dto/answer-post-dto";
import { QuestionGetDto } from "../api/models/response-dto/question-get-dto";
import { API } from "../configs/api";

class AnswersService {
  async sendAnswers(answers: AnswerPostDto) {
    try {
      API.postAnswers(answers);
    } catch (err: any) {
      console.error(err);
    }
  }

  // getTemplateAnswers(questions: QuestionGetDto) {
  //   try {
  //     let answers: AnswerDto[] = [];
  //     questions.sections.map((s: SectionDto) => {
  //       s.questions.map((q: QuestionDto) => {
  //         let newAnswer: AnswerDto;
  //         switch (TypeQuestion[q.typeQuestion]) {
  //           case TypeQuestion.date as unknown as string: {
  //             newAnswer = new AnswerTextDto(q.id, "");
  //             break;
  //           }
  //           case TypeQuestion.multi as unknown as string: {
  //             newAnswer = new AnswerMultiDto(q.id, -1);
  //             break;
  //           }
  //           case TypeQuestion.text as unknown as string: {
  //             newAnswer = new AnswerTextDto(q.id, "");
  //             break;
  //           }
  //           case TypeQuestion.textarea as unknown as string: {
  //             newAnswer = new AnswerTextDto(q.id, "");
  //             break;
  //           }
  //           case TypeQuestion.file as unknown as string: {
  //             newAnswer = new AnswerFileDto(q.id, new Blob());
  //             break;
  //           }
  //           default: {
  //             newAnswer = new AnswerTextDto(q.id, "");
  //             break;
  //           }
  //         }
  //         answers.push(newAnswer);
  //       });
  //     });
  //     // console.log(answers);
  //     return answers;
  //   } catch (err: any) {
  //     console.error(err);
  //     return [];
  //   }
  // }

  // getNewAnswer(question: QuestionDto, value: string | number | Date | Blob) {
  //   let newAnswer: AnswerDto;
  //   switch (TypeQuestion[question.typeQuestion]) {
  //     case TypeQuestion.date as unknown as string: {
  //       newAnswer = new AnswerTextDto(
  //         question.id,
  //         (value as Date).toLocaleString("RU-ru")
  //       );
  //       break;
  //     }
  //     case TypeQuestion.multi as unknown as string: {
  //       newAnswer = new AnswerMultiDto(question.id, value as number);
  //       break;
  //     }
  //     case TypeQuestion.text as unknown as string: {
  //       newAnswer = new AnswerTextDto(question.id, value as string);
  //       break;
  //     }
  //     case TypeQuestion.textarea as unknown as string: {
  //       newAnswer = new AnswerTextDto(question.id, value as string);
  //       break;
  //     }
  //     case TypeQuestion.file as unknown as string: {
  //       newAnswer = new AnswerFileDto(question.id, value as Blob);
  //       break;
  //     }
  //     default: {
  //       newAnswer = new AnswerTextDto(question.id, value as string);
  //       break;
  //     }
  //   }
  //   return newAnswer;
  // }
}

export const answersService: AnswersService = new AnswersService();
