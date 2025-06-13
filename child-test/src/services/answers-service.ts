import { AnswerPostDto } from "../api/models/reques-dto/answer-post-dto";
import { API } from "../configs/api";

class AnswersService {
  async sendAnswers(answers: AnswerPostDto) {
    try {
      API.postAnswers(answers);
    } catch (err: any) {
      console.error(err);
    }
  }
}

export const answersService: AnswersService = new AnswersService();
