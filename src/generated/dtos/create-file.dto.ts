
import {FileType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class CreateFileDto {
  filename: string;
@ApiProperty({ enum: FileType})
fileType: FileType;
mimetype: string;
encoding: string;
data: string;
cdnUrl: string;
varantName?: string;
variantKey?: string;
variantValue?: string;
}
