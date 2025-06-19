import { AnswerPostRequestDto } from "../api/models/reques-dto/answer-post-dto";
import { API } from "../configs/api";

class AnswersService {
  async sendAnswers(answers: AnswerPostRequestDto) {
    try {
      let res = API.postAnswers(answers);
      let result = (await res).data;
      return result.id;
    } catch (err: any) {
      console.error(err);
      return "";
    }
  }
}

export const answersService: AnswersService = new AnswersService();
