import { createAction } from "@reduxjs/toolkit";
import { AnswerDto, AnswerFileDto } from "../../api/models/dto/answer-dto";

export const setAnswerValue = createAction<AnswerDto | AnswerFileDto>(
  "SET_ANSWER_VALUE"
);
