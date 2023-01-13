import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyCreatorInput } from './comment-create-many-creator.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyCreatorInputEnvelope {

    @Field(() => [CommentCreateManyCreatorInput], {nullable:false})
    @Type(() => CommentCreateManyCreatorInput)
    data!: Array<CommentCreateManyCreatorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
