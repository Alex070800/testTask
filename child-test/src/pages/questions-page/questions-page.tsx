import { bemCN } from "../../configs/bem-classname";
import { Button, ButtonColors, ButtonIconPosition, ButtonSizes } from "../../ui/button/button";
import { ProgressBar, TypeProgressBar } from "../../ui/progress-bar/progress-bar";
import "./questions-page.scss";
import { ReactComponent as ArrowLeftIcon } from "../../shared/images/svg/arrow-right.svg";
import { ReactComponent as ArrowRightIcon } from "../../shared/images/svg/double-arrow-right.svg";

const questionsPageCN = bemCN("questions-page");

export const QuestionsPage = () => {
  return <div className={questionsPageCN()}>Опросник
  <div className={questionsPageCN("next")}>
          <ProgressBar
            type={TypeProgressBar.number}
            totalStep={3}
            currentStep={2}
          />
          <Button
            color={ButtonColors.lightBlue}
            size={ButtonSizes.big}
            iconPosition={ButtonIconPosition.left}
            text="К загрузке рисунков"
            icon={<ArrowLeftIcon />}
          />
          <Button
            color={ButtonColors.blue}
            size={ButtonSizes.big}
            iconPosition={ButtonIconPosition.right}

            text="Узнать результаты"
            icon={<ArrowRightIcon />}
          />
        </div></div>;
};
