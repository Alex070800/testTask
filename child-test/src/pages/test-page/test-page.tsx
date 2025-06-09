import { Outlet } from "react-router-dom";
import { bemCN } from "../../configs/bem-classname";
import {
  ProgressBar,
  TypeProgressBar,
} from "../../ui/progress-bar/progress-bar";
import "./test-page.scss";

const testPageCN = bemCN("test-page");

export const TestPage = () => {
  return (
    <div className={testPageCN()}>
      <ProgressBar type={TypeProgressBar.line} totalStep={3} currentStep={1} />
      <Outlet />
      
    </div>
  );
};
