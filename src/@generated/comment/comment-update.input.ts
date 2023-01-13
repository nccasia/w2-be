import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from '../user/user-update-one-required-without-comments-nested.input';
import { TaskUpdateOneRequiredWithoutCommentsNestedInput } from '../task/task-update-one-required-without-comments-nested.input';

@InputType()
export class CommentUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    creator?: UserUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => TaskUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    task?: TaskUpdateOneRequiredWithoutCommentsNestedInput;
}
