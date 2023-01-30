import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsCreateManyProjectInput } from './member-on-projects-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class MemberOnProjectsCreateManyProjectInputEnvelope {

    @Field(() => [MemberOnProjectsCreateManyProjectInput], {nullable:false})
    @Type(() => MemberOnProjectsCreateManyProjectInput)
    data!: Array<MemberOnProjectsCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
