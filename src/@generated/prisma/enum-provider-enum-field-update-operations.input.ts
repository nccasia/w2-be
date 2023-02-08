import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderEnum } from './provider.enum';

@InputType()
export class EnumProviderEnumFieldUpdateOperationsInput {

    @Field(() => ProviderEnum, {nullable:true})
    set?: keyof typeof ProviderEnum;
}
