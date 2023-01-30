import { registerEnumType } from '@nestjs/graphql';

export enum MemberOnProjectsScalarFieldEnum {
    projectId = "projectId",
    userId = "userId",
    assignedAt = "assignedAt",
    assignedBy = "assignedBy"
}


registerEnumType(MemberOnProjectsScalarFieldEnum, { name: 'MemberOnProjectsScalarFieldEnum', description: undefined })
