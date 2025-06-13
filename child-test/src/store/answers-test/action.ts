import { createAction } from "@reduxjs/toolkit";
import { AnswerDto } from "../../api/models/dto/answer-dto";

export const setAnswerValue = createAction<AnswerDto>("SET_ANSWER_VALUE");
