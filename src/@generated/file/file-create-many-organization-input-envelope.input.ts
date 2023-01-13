import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateManyOrganizationInput } from './file-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class FileCreateManyOrganizationInputEnvelope {

    @Field(() => [FileCreateManyOrganizationInput], {nullable:false})
    @Type(() => FileCreateManyOrganizationInput)
    data!: Array<FileCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
