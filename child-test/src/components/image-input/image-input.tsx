import { FC, FormEvent, use, useEffect } from "react";
import { bemCN } from "../../configs/bem-classname";
import "./image-input.scss";

const imageInputCN = bemCN("image-input");

type ImageInputProps = {
  id: string;
  name?: string;
  value?: string;
  onChange?: (newValue: Blob) => void;
};

export const ImageInput: FC<ImageInputProps> = ({
  id,
  name,
  value,
  onChange,
}) => {
  const onInput = (e: FormEvent<HTMLInputElement>) => {
    if (e && e.currentTarget && e.currentTarget.files) {
      // Ограничение размера до 5МБ
      if (e.currentTarget.files[0].size > 5 * 1024 * 1024) return;
      else {
        let file = e.currentTarget.files[0];
        onChange && onChange(file);
      }
    }
  };

  return (
    <div className={imageInputCN({ isValue: value ? true : false })}>
      <input
        required
        onInput={onInput}
        accept="image/png, image/jpeg, image/jpg"
        id={id}
        name={id}
        type="file"
      />

      <label htmlFor={id}>{name}</label>
      <img src={value && "data:image/jpeg;base64, " + value} id={id + "_img"} />
    </div>
  );
};
