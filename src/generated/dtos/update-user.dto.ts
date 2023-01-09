
import {Role} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateUserDto {
  email?: string;
password?: string;
firstname?: string;
lastname?: string;
@ApiProperty({ enum: Role})
role?: Role;
}
