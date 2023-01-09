
import {Resource} from './resource.entity'


export class ResourceItem {
  id: number ;
name: string ;
code: string ;
description: string ;
icon: string ;
createdAt: Date ;
updatedAt: Date ;
resource?: Resource ;
resourceId: number ;
}
