import { createAction, nanoid } from "@reduxjs/toolkit";
import { AnswerDto } from "../../api/models/dto/answer-dto";

export const setAnswerValue = createAction<{}>("SET_ANSWER_VALUE");

