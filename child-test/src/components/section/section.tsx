import { FC } from "react";
import { SectionDto } from "../../api/models/dto/section-dto";
import { bemCN } from "../../configs/bem-classname";
import "./section.scss";
import { QuestionDto, TypeQuestion } from "../../api/models/dto/question-dto";
import { ImageInput } from "../image-input/image-input";
import { Input, InputType } from "../../ui/input/input";
import { RadioGroup } from "../../ui/radio-group/radio-group";
import { AnswerOptionDto } from "../../api/models/dto/answer-option-dto";
import { SelectItem } from "../../view-models/select-item";

const sectionCN = bemCN("section");

export type SectionProps = {
  section: SectionDto;
};

export const Section: FC<SectionProps> = ({ section }) => {
  return (
    <div className={sectionCN()}>
      <h2>{section.name}</h2>
      <div>
        {section.questions.map((q: QuestionDto) => {
          let type = TypeQuestion[q.typeQuestion];
          switch (type) {
            case TypeQuestion.file as unknown as string: {
              return (
                <ImageInput
                  key={q.id}
                  name={q.questionText}
                  id={q.id.toString()}
                />
              );
            }
            case TypeQuestion.date as unknown as string: {
              return (
                <Input
                  key={q.id}
                  label={q.questionText}
                  id={q.id.toString()}
                  type={InputType.date}
                />
              );
            }
            case TypeQuestion.text as unknown as string: {
              return (
                <Input
                  key={q.id}
                  label={q.questionText}
                  id={q.id.toString()}
                  type={InputType.text}
                />
              );
            }
            case TypeQuestion.multi as unknown as string: {
              return (
                <RadioGroup
                  key={q.id}
                  label={q.questionText}
                  id={q.id.toString()}
                  items={
                    q.answerOptions
                      ? q.answerOptions.map(
                          (opt: AnswerOptionDto) =>
                            new SelectItem(opt.id, opt.name)
                        )
                      : []
                  }
                />
              );
            }
            case TypeQuestion.textarea as unknown as string: {
              return (
                <Input
                  key={q.id}
                  label={q.questionText}
                  id={q.id.toString()}
                  type={InputType.textarea}
                />
              );
            }
          }
        })}
      </div>
    </div>
  );
};
