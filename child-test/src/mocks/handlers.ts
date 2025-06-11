import { http, HttpResponse } from "msw";

const getQuestionsResolver = ({}) => {
  let questions = require("./questions.json");
  return HttpResponse.json(questions);
};

const getQuestionsImagesResolver = ({}) => {
  let questions = require("./images-questions.json");
  return HttpResponse.json(questions);
};

const getQuestionsHandler = http.get(
  "https://child-test/api/question",
  getQuestionsResolver
);
const getQuestionsImagesHandler = http.get(
  "https://child-test/api/question/images",
  getQuestionsImagesResolver
);

export const handlers = [getQuestionsHandler, getQuestionsImagesHandler];
