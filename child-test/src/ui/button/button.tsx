import { FC, ReactNode } from "react";
import { bemCN } from "../../configs/bem-classname";
import "./button.scss";

const buttonCN = bemCN("button");
export enum ButtonColors {
  blue,
  lightBlue,
}

export enum ButtonSizes {
  small,
  big,
}

type ButtonProps = {
  id?: string;
  color: ButtonColors;
  size: ButtonSizes;
  text?: string;
  icon?: ReactNode;
  isDisable?: boolean;
  onClick?: () => void;
};
export const Button: FC<ButtonProps> = ({
  id,
  color,
  size,
  text,
  icon,
  isDisable,
  onClick,
}) => {
  let colorClass = ButtonColors[color];
  let sizeClass = ButtonSizes[size];

  return (
    <button
      disabled={isDisable !== undefined ? isDisable : false}
      id={id}
      onClick={() => onClick && onClick()}
      className={buttonCN({
        color: colorClass,
        size:sizeClass
      })}
    >
      {text} {icon}
    </button>
  );
};
