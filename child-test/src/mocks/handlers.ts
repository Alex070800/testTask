import { http, HttpResponse } from "msw";

const getQuestionsResolver = ({}) => {
  let questions = require("./questions.json");
  return HttpResponse.json(questions);
};



const getQuestionsHandler = http.get(
  "https://child-test/api/question",
  getQuestionsResolver
);


export const handlers = [getQuestionsHandler];
