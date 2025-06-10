import { QuestionGetDto } from "../api/models/response-dto/question-get-dto";
import { API } from "../configs/api";



class QuestionsService {
  async getQuestions() {
    try {
      let res = API.getQuestions();
      let result = (await res).data;
      console.log(result);
      return (result as QuestionGetDto[]) || [];
    } catch (err: any) {
      return [];
    }
  }


}

export const questionsService: QuestionsService = new QuestionsService();
