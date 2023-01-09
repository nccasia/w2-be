
import {Organization} from './organization.entity'


export class Settings {
  id: number ;
createdAt: Date ;
updatedAt: Date ;
key: string ;
value: string ;
organization?: Organization ;
organizationId: number ;
}
