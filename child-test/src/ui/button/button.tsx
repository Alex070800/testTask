import { FC, ReactNode } from "react";
import { bemCN } from "../../configs/bem-classname";
import "./button.scss";

const buttonCN = bemCN("button");
export enum ButtonColors {
  blue,
  lightBlue,
}

type ButtonProps = {
  id?: string;
  color: ButtonColors;
  text?: string;
  icon?: ReactNode;
  isDisable?: boolean;
  onClick?: () => void;
};
export const Button: FC<ButtonProps> = ({
  id,
  color,
  text,
  icon,
  isDisable,
  onClick,
}) => {
  let colorClass = ButtonColors[color];

  return (
    <button
      disabled={isDisable !== undefined ? isDisable : false}
      id={id}
      onClick={() => onClick && onClick()}
      className={buttonCN({
        color: colorClass,
      })}
    >
      {text} {icon}
    </button>
  );
};
