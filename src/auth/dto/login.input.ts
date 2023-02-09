import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

// eslint-disable-next-line prettier/prettier
export enum SocialProviderTypes {
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
}
@InputType()
export class LoginInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

@InputType()
export class GoogleLoginInput {
  @Field()
  @IsNotEmpty()
  code: string;
}
