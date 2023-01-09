
import {FileType} from '@prisma/client'
import {Organization} from './organization.entity'


export class File {
  id: number ;
filename: string ;
fileType: FileType ;
mimetype: string ;
encoding: string ;
data: string ;
cdnUrl: string ;
varantName: string  | null;
variantKey: string  | null;
variantValue: string  | null;
createdAt: Date ;
updatedAt: Date ;
variantOfId: number  | null;
variantOf?: File  | null;
variants?: File[] ;
organizationId: number ;
organization?: Organization ;
}
