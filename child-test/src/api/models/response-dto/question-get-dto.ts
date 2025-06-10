import { SectionDto } from "../dto/section-dto";

export class QuestionGetDto{
    sections: SectionDto[];

    constructor(sections: SectionDto[]){
        this.sections = sections;
    }
    
}