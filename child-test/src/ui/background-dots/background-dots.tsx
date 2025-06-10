import { bemCN } from "../../configs/bem-classname";
import "./background-dots.scss";

const backDotsCn = bemCN("back-dots");

//Анимацию стащила с codePen))))

export const BackgroundDots = () => {
  return (
    <div className={backDotsCn()}>
      {[...Array(75)].map((e: any, i: number) => {
        return (
          <div key={i} className={"dotWrapper dotWrapper-" + i}>
            <div className={"dot dot-" + i}></div>
          </div>
        );
      })}
    </div>
  );
};
