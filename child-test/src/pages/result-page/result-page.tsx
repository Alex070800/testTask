import { bemCN } from "../../configs/bem-classname";
import { BackgroundDots } from "../../ui/background-dots/background-dots";
import {
  Button,
  ButtonColors,
  ButtonSizes,
  ButtonIconPosition,
} from "../../ui/button/button";
import { ReactComponent as DownloadIcon } from "../../shared/images/svg/download.svg";
import { ReactComponent as ShareIcon } from "../../shared/images/svg/share.svg";
import "./result-page.scss";
import { useEffect, useState } from "react";
import { AnswerPostRequestDto } from "../../api/models/reques-dto/answer-post-dto";
import { answersService } from "../../services/answers-service";
import { useSelector } from "react-redux";
import { AnswerDto } from "../../api/models/dto/answer-dto";
import { RootState } from "../../store";
import { AnswerPostResponseDto } from "../../api/models/response-dto/answers-post-dto";
import { fileService } from "../../services/file-service";

const resultPageCN = bemCN("result-page");

export const ResultPage = () => {
  const answers: AnswerDto[] = useSelector(
    (state: RootState) => state.answerReducer
  )?.answers;

  const [idFile, setIdFile] = useState<string>();

  useEffect(() => {
    answersService
      .sendAnswers(new AnswerPostRequestDto(answers))
      .then((res: string) => {
        setIdFile(res);
      });
  }, []);

  const onSaveFileBtnClick = () => {
    idFile && fileService.getFileById(idFile);
  };

  if (!idFile) return <BackgroundDots />;
  return (
    <div className={resultPageCN()}>
      <BackgroundDots />
      <h1>Психодиагностика детей: готовы результаты Вашего тестирования!</h1>
      <Button
        color={ButtonColors.blue}
        size={ButtonSizes.big}
        text="Скачать отчет PDF"
        icon={<DownloadIcon />}
        iconPosition={ButtonIconPosition.right}
        onClick={onSaveFileBtnClick}
      />
    </div>
  );
};
