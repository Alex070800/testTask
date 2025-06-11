import { AnswerDto } from "../../api/models/dto/answer-dto";
import { QuestionDto } from "../../api/models/dto/question-dto";
import { setAnswersValue } from "./action";

const defaultState = {
  answers: [] as AnswerDto[],
};
export const answerReducer = (_state = defaultState, _action: any) => {
  switch (_action.type) {
    case setAnswersValue.type: {
      return { ..._state, answers: [..._action.payload] };
    }
    default: {
      return _state;
    }
  }
};
