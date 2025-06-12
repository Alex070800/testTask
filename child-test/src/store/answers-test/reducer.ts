import { Action } from "@reduxjs/toolkit";
import {
  AnswerDto,
  AnswerFileDto,
  AnswerTextDto,
} from "../../api/models/dto/answer-dto";
import { QuestionDto } from "../../api/models/dto/question-dto";
import { setAnswerValue } from "./action";

const defaultState = {
  answers: [] as AnswerDto[] | AnswerFileDto[] | AnswerTextDto[],
};
export const answerReducer = (_state = defaultState, _action: any) => {
  switch (_action.type) {
    case setAnswerValue.type: {
      let newArray = [
        ..._state.answers.filter(
          (answ: AnswerDto) =>
            answ.idQuestion !== (_action.payload as AnswerDto).idQuestion
        ),
      ].concat(_action.payload);
      return { ..._state, answers: newArray };
    }
    default: {
      return _state;
    }
  }
};
