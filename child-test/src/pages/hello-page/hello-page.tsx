import { bemCN } from "../../configs/bem-classname";
import { Button, ButtonColors, ButtonSizes } from "../../ui/button/button";
import { ReactComponent as ArrowLeftIcon } from "../../shared/images/svg/arrow-left.svg";
import "./hello-page.scss";
import { BackgroundDots } from "../../ui/background-dots/background-dots";
import { useNavigate } from "react-router-dom";
import { links } from "../../configs/links";

const helloPageCN = bemCN("hello-page");

export const HelloPage = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(links.test);
  };
  return (
    <div className={helloPageCN()}>
      <BackgroundDots />
      <h1>Психодиагностика детей</h1>
      <Button
        color={ButtonColors.blue}
        size={ButtonSizes.big}
        text="Начать"
        icon={<ArrowLeftIcon />}
        onClick={onClickBtn}
      />
    </div>
  );
};
