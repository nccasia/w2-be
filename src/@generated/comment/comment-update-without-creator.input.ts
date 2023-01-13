import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TaskUpdateOneRequiredWithoutCommentsNestedInput } from '../task/task-update-one-required-without-comments-nested.input';

@InputType()
export class CommentUpdateWithoutCreatorInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => TaskUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    task?: TaskUpdateOneRequiredWithoutCommentsNestedInput;
}
