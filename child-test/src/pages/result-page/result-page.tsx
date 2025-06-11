import { bemCN } from "../../configs/bem-classname";
import { BackgroundDots } from "../../ui/background-dots/background-dots";
import {
  Button,
  ButtonColors,
  ButtonSizes,
  ButtonIconPosition,
} from "../../ui/button/button";
import { ReactComponent as DownloadIcon } from "../../shared/images/svg/download.svg";
import { ReactComponent as ShareIcon } from "../../shared/images/svg/share.svg";
import "./result-page.scss";

const resultPageCN = bemCN("result-page");

export const ResultPage = () => {
  return (
    <div className={resultPageCN()}>
      <BackgroundDots />
      <h1>Психодиагностика детей: готовы результаты Вашего тестирования!</h1>
      <div>
        <Button
          color={ButtonColors.blue}
          size={ButtonSizes.big}
          text="Скачать отчет PDF"
          icon={<DownloadIcon />}
          iconPosition={ButtonIconPosition.right}
        />
        <Button
          color={ButtonColors.blue}
          size={ButtonSizes.big}
          text="Поделиться результатами"
          icon={<ShareIcon />}
          iconPosition={ButtonIconPosition.right}
        />
      </div>
    </div>
  );
};
