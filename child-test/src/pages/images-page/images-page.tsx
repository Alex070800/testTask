import { bemCN } from "../../configs/bem-classname";
import { Button, ButtonColors, ButtonSizes } from "../../ui/button/button";
import { ReactComponent as ArrowLeftIcon } from "../../shared/images/svg/arrow-left.svg";

import {
  ProgressBar,
  TypeProgressBar,
} from "../../ui/progress-bar/progress-bar";
import "./images-page.scss";
import { ImageInput } from "../../components/image-input/image-input";
import { Message, MessageColor } from "../../ui/message/message";
import { useEffect } from "react";

const imagesPageCN = bemCN("images-page");

export const ImagesPage = () => {
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
          color={ButtonColors.blue}
          size={ButtonSizes.big}
          text="Дальше"
          icon={<ArrowLeftIcon />}
        />
      </div>
    </div>
  );
};
