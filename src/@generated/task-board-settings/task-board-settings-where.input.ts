import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { TaskBoardRelationFilter } from '../task-board/task-board-relation-filter.input';

@InputType()
export class TaskBoardSettingsWhereInput {

    @Field(() => [TaskBoardSettingsWhereInput], {nullable:true})
    AND?: Array<TaskBoardSettingsWhereInput>;

    @Field(() => [TaskBoardSettingsWhereInput], {nullable:true})
    OR?: Array<TaskBoardSettingsWhereInput>;

    @Field(() => [TaskBoardSettingsWhereInput], {nullable:true})
    NOT?: Array<TaskBoardSettingsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    value?: JsonFilter;

    @Field(() => IntFilter, {nullable:true})
    taskBoardId?: IntFilter;

    @Field(() => TaskBoardRelationFilter, {nullable:true})
    taskBoard?: TaskBoardRelationFilter;
}
