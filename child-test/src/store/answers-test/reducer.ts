import { AnswerDto } from "../../api/models/dto/answer-dto";
import { setAnswerValue } from "./action";

const defaultState = {
  answers: [] as AnswerDto[],
};
export const answerReducer = (_state = defaultState, _action: any) => {
  switch (_action.type) {
    case setAnswerValue.type: {
      let filterArray = [
        ..._state.answers.filter(
          (answ: AnswerDto) =>
            answ.idQuestion !== (_action.payload as AnswerDto).idQuestion
        ),
      ];
      if ((_action.payload as AnswerDto).value === "") {
        return { ..._state, answers: filterArray };
      } else {
        let newArray = filterArray.concat(_action.payload);
        return { ..._state, answers: newArray };
      }
      // let newArray = [
      //   ..._state.answers.filter(
      //     (answ: AnswerDto) =>
      //       answ.idQuestion !== (_action.payload as AnswerDto).idQuestion
      //   ),
      // ].concat(_action.payload);
      // return { ..._state, answers: newArray };
    }
    default: {
      return _state;
    }
  }
};
