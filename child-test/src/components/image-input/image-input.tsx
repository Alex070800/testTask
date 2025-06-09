import { FC, FormEvent, useEffect } from "react";
import { bemCN } from "../../configs/bem-classname";
import "./image-input.scss";

const imageInputCN = bemCN("image-input");

type ImageInputProps = {
  id: string;
  name?: string;
  onChange?: (newValue: any) => void;
};




export const ImageInput: FC<ImageInputProps> = ({ id, name, onChange }) => {
  const onInput = (e: FormEvent<HTMLInputElement>) => {
    if (e && e.currentTarget && e.currentTarget.files) {
      // Ограничение размера до 5МБ
      if (e.currentTarget.files[0].size > 5 * 1024 * 1024) return;
      else {
        let file = e.currentTarget.files[0];
        let img = document.getElementById(id + "_img") as any;
        if (img) {
          img.src = window.URL.createObjectURL(file);
        }
      }
    }
  };

  return (
    <div className={imageInputCN()}>
      <input
        required
        onInput={onInput}
        accept="image/png, image/jpeg, image/jpg"
        id={id}
        name={id}
        type="file"
      />

      <label htmlFor={id}>{name}</label>
      <img id={id + "_img"} />
    </div>
  );
};
