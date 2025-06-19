import { http, HttpResponse } from "msw";
import { AnswerPostRequestDto } from "../api/models/reques-dto/answer-post-dto";
import file from "./result.pdf";

const getQuestionsResolver = ({}) => {
  let questions = require("./questions.json");
  return HttpResponse.json(questions);
};

const sendAnswersResolver = (request: any) => {
  return HttpResponse.json({
    id: 1,
  });
};

const getFileResolver = async (request: any) => {
  let file = require("./result.pdf");
  const buffer = await fetch(file).then((response) => response.arrayBuffer());
  return HttpResponse.arrayBuffer(buffer, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
};

const getQuestionsHandler = http.get(
  "https://child-test/api/question",
  getQuestionsResolver
);

const sendAnswersHandler = http.post(
  "https://child-test/api/answer",
  sendAnswersResolver
);

const getFileHandler = http.get("https://child-test/api/file", getFileResolver);

export const handlers = [
  getQuestionsHandler,
  sendAnswersHandler,
  getFileHandler,
];
