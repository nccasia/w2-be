import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsCreateManyUserInput } from './member-on-projects-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class MemberOnProjectsCreateManyUserInputEnvelope {

    @Field(() => [MemberOnProjectsCreateManyUserInput], {nullable:false})
    @Type(() => MemberOnProjectsCreateManyUserInput)
    data!: Array<MemberOnProjectsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
