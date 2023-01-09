
import {Organization} from './organization.entity'
import {ResourceItem} from './resourceItem.entity'


export class Resource {
  id: number ;
name: string ;
description: string ;
code: string ;
icon: string ;
createdAt: Date ;
updatedAt: Date ;
organization?: Organization ;
organizationId: number ;
resourceItems?: ResourceItem[] ;
}
