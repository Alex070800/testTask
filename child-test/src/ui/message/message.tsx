import { FC } from "react";
import { bemCN } from "../../configs/bem-classname";
import "./message.scss";

const messageCN = bemCN("message");

export enum MessageColor {
  green,
  red,
}
type MessageProps = {
  id?: string;
  text: string;
  color: MessageColor;
};

export const Message: FC<MessageProps> = ({ id, text, color }) => {
  let colorClass = MessageColor[color];

  return (
    <div id={id} className={messageCN({ color: colorClass })}>
      <p>{text}</p>
    </div>
  );
};
