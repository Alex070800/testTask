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
  label?: string;
  setValue?: (v: string) => void;
  isDisable?: boolean;
  isRequired?: boolean;
  onChange?: (newValue: any) => void;
};

export const Input: FC<InputProps> = ({
  id,
  type,
  value,
  setValue,
  label,
  isDisable,
  isRequired,
  onChange,
}) => {
  let inputTypeClass = InputType[type];
  switch (type) {
    case InputType.date: {
      return <input />;
    }
    case InputType.text: {
      return (
        <>
          {label && (
            <label className={inputCN("label")} htmlFor={id}>
              {label}
            </label>
          )}
          <input
            className={inputCN({ type: inputTypeClass })}
            value={value}
            onChange={(v: React.ChangeEvent<HTMLInputElement>) => {
              setValue && setValue(v.currentTarget.value);
            }}
            id={id}
            name={id}
            required={isRequired}
            disabled={isDisable}
          />
        </>
      );
    }
    case InputType.textarea: {
      return <input />;
    }
  }
};
