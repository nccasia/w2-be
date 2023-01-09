import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Permission extends BaseModel {
  @Field()
  code: string;

  @Field()
  id: number;

  @Field()
  name: string;
}
