import { FC, FormEventHandler, useEffect, useState } from "react";

import "./radio-group.scss";

import { bemCN } from "../../configs/bem-classname";
import { SelectItem } from "../../view-models/select-item";

const radioGroupCN = bemCN("radio-group");

type RadioGroupProps = {
  id: string;
  items: SelectItem[];
  activeId?: number;
  onChange?: (id: number) => void;
  label?: string;
};

export const RadioGroup: FC<RadioGroupProps> = ({
  id,
  items,
  activeId,
  onChange,
  label,
}) => {
  // const [activeIndex, setActiveIndex] = useState(activeId ? activeId : -1);

  const onClickItem = (id: number) => {
    console.log(id);
    onChange && onChange(id);
  };

  console.log(activeId);
  return (
    <div id={id} className={radioGroupCN()}>
      {label && (
        <label className={radioGroupCN("label")} htmlFor={id}>
          {label}
        </label>
      )}
      <div>
        {items.map((item: SelectItem) => (
          <div key={item.id} className={radioGroupCN("item")}>
            <input
              onInput={(v: React.ChangeEvent<HTMLInputElement>) => {
                v.currentTarget.checked = true;
                onClickItem(Number(v.currentTarget.id));
              }}
              name={id}
              id={item.id.toString()}
              type="radio"
              // checked={activeId == item.id ? true : false}
            />
            <label>{item.value}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
