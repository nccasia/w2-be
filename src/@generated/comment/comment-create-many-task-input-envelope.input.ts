import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyTaskInput } from './comment-create-many-task.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyTaskInputEnvelope {

    @Field(() => [CommentCreateManyTaskInput], {nullable:false})
    @Type(() => CommentCreateManyTaskInput)
    data!: Array<CommentCreateManyTaskInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
