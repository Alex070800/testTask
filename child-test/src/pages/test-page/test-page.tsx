import { bemCN } from "../../configs/bem-classname";
import {
  ProgressBar,
  TypeProgressBar,
} from "../../ui/progress-bar/progress-bar";
import "./test-page.scss";

import { Button, ButtonColors, ButtonIconPosition, ButtonSizes } from "../../ui/button/button";
import { ReactComponent as ArrowLeftIcon } from "../../shared/images/svg/arrow-right.svg";
import { ReactComponent as ArrowRightIcon } from "../../shared/images/svg/double-arrow-right.svg";
import { useEffect, useState } from "react";
import { SectionDto } from "../../api/models/dto/section-dto";
import { questionsService } from "../../services/questions-service";
import { QuestionGetDto } from "../../api/models/response-dto/question-get-dto";
import { Section } from "../../components/section/section";
import { BackgroundDots } from "../../ui/background-dots/background-dots";
import { useNavigate } from "react-router-dom";
import { links } from "../../configs/links";
const testPageCN = bemCN("test-page");

export const TestPage = () => {
  const [progress, setProgress] = useState(0);
  const [totalProgress, setTotalProgress] = useState(1);

  const [sections, setSections] = useState<SectionDto[]>();

  const navigate = useNavigate();
  //Загрузка вопросов с backend
  useEffect(() => {
    questionsService.getQuestions().then((res: QuestionGetDto | undefined) => {
      if (res) {
        setSections(res.sections);
        setTotalProgress(res.sections.length);
      }
    });
  }, []);

  const nextSection = () => {
    if (progress == totalProgress - 1) {
      navigate(links.result);
    } else {
      setProgress(progress + 1);
    }
  };

  const prevSection = () => {
    setProgress(progress - 1);
  };

  if (sections) {
    return (
      <div className={testPageCN()}>
        <ProgressBar
          type={TypeProgressBar.line}
          totalStep={totalProgress}
          currentStep={progress + 1}
        />
        <Section section={sections[progress]} />
        <div className={testPageCN("next")}>
          <ProgressBar
            type={TypeProgressBar.number}
            totalStep={totalProgress}
            currentStep={progress + 1}
          />
          <div className={testPageCN("nav-buttons")}>
            {progress > 0 && (
              <Button
                onClick={prevSection}
                color={ButtonColors.lightBlue}
                size={ButtonSizes.big}
                text="К предыдущим вопросам"
                icon={<ArrowLeftIcon />}
                iconPosition={ButtonIconPosition.left}
              />
            )}
            <Button
              onClick={nextSection}
              color={ButtonColors.blue}
              size={ButtonSizes.big}
              text={progress == totalProgress - 1 ? "Узнать результ!" : "Далее"}
              icon={<ArrowRightIcon />}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <BackgroundDots />;
  }
};
