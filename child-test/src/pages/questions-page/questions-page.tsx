import { bemCN } from "../../configs/bem-classname";
import {
  Button,
  ButtonColors,
  ButtonIconPosition,
  ButtonSizes,
} from "../../ui/button/button";
import {
  ProgressBar,
  TypeProgressBar,
} from "../../ui/progress-bar/progress-bar";
import "./questions-page.scss";
import { ReactComponent as ArrowLeftIcon } from "../../shared/images/svg/arrow-right.svg";
import { ReactComponent as ArrowRightIcon } from "../../shared/images/svg/double-arrow-right.svg";
import { Input, InputType } from "../../ui/input/input";
import { RadioGroup } from "../../ui/radio-group/radio-group";
import { SelectItem } from "../../view-models/select-item";

const questionsPageCN = bemCN("questions-page");

export const QuestionsPage = () => {
  return (
    <div className={questionsPageCN()}>
      <h2>Общая информация о ребенке</h2>
      <div>
        <Input value="" type={InputType.text} label="Имя ребенка" />
        <Input
          type={InputType.text}
          label="Имя родителя, заполняющего анкету"
        />

        <Input label="Дата рождения ребенка" type={InputType.date} />

        <RadioGroup
          id="gender"
          label="Пол ребенка"
          items={[new SelectItem(1, "Женский"), new SelectItem(2, "Мужской")]}
        />
      </div>
      <div className={questionsPageCN("next")}>
        <ProgressBar
          type={TypeProgressBar.number}
          totalStep={3}
          currentStep={2}
        />
        <div>
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
        </div>
      </div>
    </div>
  );
};
