import { ChangeEventHandler, FC } from "react";
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
  isDisable?: boolean;
  isRequired?: boolean;
  onChange?: (newValue: any) => void;
};

export const Input: FC<InputProps> = ({
  id,
  type,
  value,
  label,
  isDisable,
  isRequired,
  onChange,
}) => {
  let inputTypeClass = InputType[type];
  switch (type) {
    case InputType.date: {
      return (
        <div className={inputCN({ type: inputTypeClass })}>
          {label && (
            <label className={inputCN("label")} htmlFor={id}>
              {label}
            </label>
          )}
          <input
            placeholder="01.01.2000"
            id={id}
            name={id}
            required={isRequired}
            disabled={isDisable}
            value={value}
            type="date"
            onChange={(v: React.ChangeEvent<HTMLInputElement>) => {
              onChange && onChange(v.currentTarget.value);
            }}
          />
        </div>
      );
    }
    case InputType.text: {
      return (
        <div className={inputCN({ type: inputTypeClass })}>
          {label && (
            <label className={inputCN("label")} htmlFor={id}>
              {label}
            </label>
          )}
          <input
            value={value}
            onChange={(v: React.ChangeEvent<HTMLInputElement>) => {
              onChange && onChange(v.currentTarget.value);
            }}
            id={id}
            name={id}
            required={isRequired}
            disabled={isDisable}
          />
        </div>
      );
    }
    case InputType.textarea: {
      return (
        <div className={inputCN({ type: inputTypeClass })}>
          {label && (
            <label className={inputCN("label")} htmlFor={id}>
              {label}
            </label>
          )}
          <textarea
            name={id}
            required={isRequired}
            disabled={isDisable}
            value={value}
            id={id}
            onChange={(v: React.ChangeEvent<HTMLTextAreaElement>) => {
              onChange && onChange(v.currentTarget.value);
            }}
          />
        </div>
      );
    }
  }
};
