import { SectionDto } from "../api/models/dto/section-dto";
import { QuestionGetDto } from "../api/models/response-dto/question-get-dto";
import { API } from "../configs/api";

class QuestionsService {
  async getQuestions() {
    try {
      let res = API.getQuestions();
      let result = (await res).data;
      return result as QuestionGetDto;
    } catch (err: any) {
      console.error(err);
    }
  }
}

export const questionsService: QuestionsService = new QuestionsService();
