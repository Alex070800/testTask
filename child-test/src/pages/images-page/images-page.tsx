import { bemCN } from "../../configs/bem-classname";
import { Button, ButtonColors, ButtonIconPosition, ButtonSizes } from "../../ui/button/button";
import { ReactComponent as ArrowLeftIcon } from "../../shared/images/svg/arrow-left.svg";

import {
  ProgressBar,
  TypeProgressBar,
} from "../../ui/progress-bar/progress-bar";
import "./images-page.scss";
import { ImageInput } from "../../components/image-input/image-input";
import { Message, MessageColor } from "../../ui/message/message";
import { useNavigate } from "react-router-dom";
import { links } from "../../configs/links";
import { questionsService } from "../../services/questions-service";
import { QuestionGetDto } from "../../api/models/response-dto/question-get-dto";

const imagesPageCN = bemCN("images-page");

export const ImagesPage = () => {
  const navigate = useNavigate();

  const onClickNextBtn = () => {
    // navigate(links.test + links.questions);
  questionsService.getQuestions().then((res: QuestionGetDto[]) =>{
    console.log(res);
  })
  };
  return (
    <div className={imagesPageCN()}>
      <h2>Загрузите фотографии рисунков</h2>
      <Message
        text="Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб"
        color={MessageColor.red}
      />

      <div className={imagesPageCN("inputs")}>
        <ImageInput
          id="home_tree_man_image_input"
          name="Дом, дерево, человек"
        />
        <ImageInput id="no_animal_image_input" name="Несуществующее животное" />
        <ImageInput id="self_portrait_image_input" name="Автопортрет" />
      </div>

      <div className={imagesPageCN("next")}>
        <ProgressBar
          type={TypeProgressBar.number}
          totalStep={3}
          currentStep={1}
        />
        <Button
          onClick={onClickNextBtn}
          color={ButtonColors.blue}
          size={ButtonSizes.big}
          text="Дальше"
          icon={<ArrowLeftIcon />}
          iconPosition={ButtonIconPosition.right}
        />
      </div>
    </div>
  );
};
