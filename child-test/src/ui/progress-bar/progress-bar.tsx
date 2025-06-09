import { FC } from "react";
import { bemCN } from "../../configs/bem-classname";
import "./progress-bar.scss";

const progressBarCN = bemCN("progress-bar");

export enum TypeProgressBar {
  line,
  number,
}

type ProgressBarProps = {
  id?: string;
  type: TypeProgressBar;
  totalStep: number;
  currentStep: number;
};

export const ProgressBar: FC<ProgressBarProps> = ({
  id,
  type,
  totalStep,
  currentStep,
}) => {
  let typeProgressBar = TypeProgressBar[type];
  switch (type) {
    case TypeProgressBar.line: {
      return (
        <div className={progressBarCN({ type: typeProgressBar })}>
          <progress id={id} max={totalStep} value={currentStep}></progress>
        </div>
      );
    }
    case TypeProgressBar.number: {
      return (
        <div id={id} className={progressBarCN({ type: typeProgressBar })}>
          <p>
            Шаг {currentStep} / {totalStep}
          </p>
        </div>
      );
    }
  }
};
