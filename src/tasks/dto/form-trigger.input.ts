import { InputType, Field } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class FormTriggerInput {
  @Field()
  taskId?: number;

  @Field()
  formId?: number;

  @Field((type) => GraphQLJSON)
  value: JSON;
}
