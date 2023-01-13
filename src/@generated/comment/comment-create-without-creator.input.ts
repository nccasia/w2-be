import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedOneWithoutCommentsInput } from '../task/task-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateWithoutCreatorInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => TaskCreateNestedOneWithoutCommentsInput, {nullable:false})
    task!: TaskCreateNestedOneWithoutCommentsInput;
}
