import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnProjectsCreateManyInput } from './member-on-projects-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMemberOnProjectsArgs {

    @Field(() => [MemberOnProjectsCreateManyInput], {nullable:false})
    @Type(() => MemberOnProjectsCreateManyInput)
    data!: Array<MemberOnProjectsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
