import { createAction } from "@reduxjs/toolkit";
import { AnswerPostDto } from "../../api/models/reques-dto/answer-post-dto";
import { AnswerDto } from "../../api/models/dto/answer-dto";

export const setAnswersValue = createAction<AnswerDto[]>("SET_ANSWERS_VALUE");
