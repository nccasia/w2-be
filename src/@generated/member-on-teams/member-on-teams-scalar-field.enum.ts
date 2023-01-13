import { registerEnumType } from '@nestjs/graphql';

export enum MemberOnTeamsScalarFieldEnum {
    teamId = "teamId",
    userId = "userId",
    assignedAt = "assignedAt",
    assignedBy = "assignedBy"
}


registerEnumType(MemberOnTeamsScalarFieldEnum, { name: 'MemberOnTeamsScalarFieldEnum', description: undefined })
