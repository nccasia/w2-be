
import {User} from './user.entity'


export class Post {
  id: number ;
createdAt: Date ;
updatedAt: Date ;
published: boolean ;
title: string ;
content: string  | null;
author?: User  | null;
authorId: number  | null;
}
