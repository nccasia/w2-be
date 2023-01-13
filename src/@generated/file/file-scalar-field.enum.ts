import { registerEnumType } from '@nestjs/graphql';

export enum FileScalarFieldEnum {
    id = "id",
    filename = "filename",
    fileType = "fileType",
    mimetype = "mimetype",
    encoding = "encoding",
    data = "data",
    cdnUrl = "cdnUrl",
    varantName = "varantName",
    variantKey = "variantKey",
    variantValue = "variantValue",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    variantOfId = "variantOfId",
    organizationId = "organizationId"
}


registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum', description: undefined })
