import { FC } from "react";
import { bemCN } from "../../configs/bem-classname";
import "./input.scss";

const inputCN = bemCN("input");

export enum InputType {
  text,
  textarea,
  date,
}

type InputProps = {
  id?: string;
  type: InputType;
  value?: string;
  isDisable?: boolean;
  onChange?: (newValue: any) => void;
};

export const Input: FC<InputProps> = ({
  id,
  type,
  value,
  isDisable,
  onChange,
}) => {
  switch (type) {
    case InputType.date: {
      return <input />;
    }
    case InputType.text: {
      return <input />;
    }
    case InputType.textarea: {
      return <input />;
    }
  }
};
