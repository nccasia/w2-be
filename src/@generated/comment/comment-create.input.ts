import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { TaskCreateNestedOneWithoutCommentsInput } from '../task/task-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    creator!: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => TaskCreateNestedOneWithoutCommentsInput, {nullable:false})
    task!: TaskCreateNestedOneWithoutCommentsInput;
}
