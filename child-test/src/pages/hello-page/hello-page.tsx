import { bemCN } from "../../configs/bem-classname";
import { Button, ButtonColors } from "../../ui/button/button";
import { ReactComponent as ArrowLeftIcon } from "../../shared/images/svg/arrow-left.svg";
import "./hello-page.scss";

const helloPageCN = bemCN("hello-page");

export const HelloPage = () => {
  return (
    <div className={helloPageCN()}>
      <h1>Психодиагностика детей</h1>
      <Button
        color={ButtonColors.blue}
        text="Начать"
        icon={<ArrowLeftIcon />}
        onClick={() => alert("Тык")}
      />
    </div>
  );
};
