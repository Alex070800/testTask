import { http, HttpResponse } from "msw";

const postsResolver = ({}) => {
  let questions = require("./questions.json");
  console.log(questions);
  return HttpResponse.json(questions);
 
};

const getQuestionsHandler = http.get("https://child-test/api/question", postsResolver);

export const handlers = [getQuestionsHandler];