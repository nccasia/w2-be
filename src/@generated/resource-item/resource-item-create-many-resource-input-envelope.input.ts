import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceItemCreateManyResourceInput } from './resource-item-create-many-resource.input';
import { Type } from 'class-transformer';

@InputType()
export class ResourceItemCreateManyResourceInputEnvelope {

    @Field(() => [ResourceItemCreateManyResourceInput], {nullable:false})
    @Type(() => ResourceItemCreateManyResourceInput)
    data!: Array<ResourceItemCreateManyResourceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
