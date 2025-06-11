import { bemCN } from "../../configs/bem-classname";
import "./result-page.scss";

const resultPageCN = bemCN("result-page");

export const ResultPage = () => {
  return <div className={resultPageCN()}>Тут результаты</div>;
};
