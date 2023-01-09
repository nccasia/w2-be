import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Cleaning up...');
  await prisma.taskDefinition.deleteMany();
  await prisma.form.deleteMany();
  await prisma.resourceItem.deleteMany();
  await prisma.resource.deleteMany();
  await prisma.userPermission.deleteMany();
  await prisma.permission.deleteMany();
  await prisma.permissionGroup.deleteMany();
  await prisma.memberOnTeams.deleteMany();
  await prisma.team.deleteMany();
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();
  await prisma.organization.deleteMany();

  console.log('Seeding...');

  const defaultOrg = await prisma.organization.create({
    data: {
      name: 'default',
      description: 'Default organization',
    },
  });

  const defaultPermissionGroup = await prisma.permissionGroup.create({
    data: {
      name: 'default',
      description: 'Default permission group',
      organizationId: defaultOrg.id,
    },
  });

  const defaultPermissionStaff = await prisma.permission.create({
    data: {
      name: 'permission',
      description: 'Default permission',
      code: 'MANAGE_STAFF',
      organizationId: defaultOrg.id,
      permissionGroupId: defaultPermissionGroup.id,
    },
  });

  const defaultPermissionSettings = await prisma.permission.create({
    data: {
      name: 'permission',
      description: 'Default permission',
      code: 'MANAGE_SETTINGS',
      organizationId: defaultOrg.id,
      permissionGroupId: defaultPermissionGroup.id,
    },
  });
  const defaultPermissionTranslations = await prisma.permission.create({
    data: {
      name: 'permission',
      description: 'Default permission',
      code: 'MANAGE_TRANSLATIONS',
      organizationId: defaultOrg.id,
      permissionGroupId: defaultPermissionGroup.id,
    },
  });
  const defaultPermissionTasks = await prisma.permission.create({
    data: {
      name: 'permission',
      description: 'Default permission',
      code: 'MANAGE_TASKS',
      organizationId: defaultOrg.id,
      permissionGroupId: defaultPermissionGroup.id,
    },
  });
  const defaultPermissionChannels = await prisma.permission.create({
    data: {
      name: 'permission',
      description: 'Default permission',
      code: 'MANAGE_CHANNELS',
      organizationId: defaultOrg.id,
      permissionGroupId: defaultPermissionGroup.id,
    },
  });
  const defaultPermissionProducts = await prisma.permission.create({
    data: {
      name: 'permission',
      description: 'Default permission',
      code: 'MANAGE_PRODUCTS',
      organizationId: defaultOrg.id,
      permissionGroupId: defaultPermissionGroup.id,
    },
  });

  const user1 = await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      firstname: 'Lisa',
      lastname: 'Simpson',
      organizationId: defaultOrg.id,
      userPermissions: {
        create: [
          {
            permissionId: defaultPermissionSettings.id,
          },
          {
            permissionId: defaultPermissionStaff.id,
          },
          {
            permissionId: defaultPermissionTranslations.id,
          },
          {
            permissionId: defaultPermissionTasks.id,
          },
          {
            permissionId: defaultPermissionChannels.id,
          },
          {
            permissionId: defaultPermissionProducts.id,
          },
        ],
      },
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      role: Role.USER,
    },
  });

  const defaultResourceOffices = await prisma.resource.create({
    data: {
      name: 'Offices',
      description: 'Offices',
      icon: '',
      code: 'OFFICES',
      organizationId: defaultOrg.id,
      resourceItems: {
        create: [
          {
            name: 'Hà Nội 1',
            description: 'HN1',
            code: 'HN1',
            icon: '',
          },
          {
            name: 'Hà Nội 2',
            description: 'HN2',
            code: 'HN2',
            icon: '',
          },
          {
            name: 'Hà Nội 3',
            description: 'HN3',
            code: 'HN3',
            icon: '',
          },
          {
            name: 'Đà Nẵng',
            description: 'DN',
            code: 'DN',
            icon: '',
          },
          {
            name: 'Vinh',
            description: 'V',
            code: 'V',
            icon: '',
          },
          {
            name: 'Sài Gòn 1',
            description: 'SG1',
            code: 'SG1',
            icon: '',
          },
          {
            name: 'Sài Gòn 2',
            description: 'SG2',
            code: 'SG2',
            icon: '',
          },
          {
            name: 'Quy Nhơn',
            description: 'QN',
            code: 'QN',
            icon: '',
          },
        ],
      },
    },
  });

  const defaultResourceDevices = await prisma.resource.create({
    data: {
      name: 'Devices',
      description: 'Devices',
      icon: '',
      code: 'DEVICES',
      organizationId: defaultOrg.id,
      resourceItems: {
        create: [
          {
            name: 'Laptop',
            description: 'Laptop',
            code: 'LAPTOP',
            icon: '',
          },
          {
            name: 'Desktop',
            description: 'Desktop',
            code: 'DESKTOP',
            icon: '',
          },
          {
            name: 'Mouse',
            description: 'Mouse',
            code: 'MOUSE',
            icon: '',
          },
          {
            name: 'Keyboard',
            description: 'Keyboard',
            code: 'KEYBOARD',
            icon: '',
          },
          {
            name: 'Other',
            description: 'Other',
            code: 'OTHER',
            icon: '',
          },
        ],
      },
    },
  });

  const defaultFormChangeOffice = await prisma.form.create({
    data: {
      name: 'Change office request',
      description: 'Create Change office request',
      code: 'CHANGE_OFFICE_REQUEST',
      config: {},
      schema: {
        title: 'Change Office Request',
        type: 'object',
        properties: {
          currentOffice: {
            type: 'string',
            nullable: true,
            uniforms: {
              index: 1,
              uiComponent: 'SelectResourceField',
              resource: defaultResourceOffices.id,
            },
          },
          destinationOffice: {
            type: 'string',
            nullable: true,
            default: null,
            uniforms: {
              index: 2,
              uiComponent: 'SelectResourceField',
              resource: defaultResourceOffices.id,
            },
          },
          dueDate: {
            type: 'object',
            format: 'date-time',
            default: null,
            nullable: true,
            uniforms: {
              index: 3,
            },
          },
          content: {
            type: 'string',
            nullable: true,
            uniforms: { uiComponent: 'QuillEditorField', index: 4 },
          },
        },
        required: ['currentOffice', 'destinationOffice', 'dueDate'],
      },
      validationConfig: {},
      triggerConfig: {},
      serializerConfig: {},
      displayConfig: {},
      displayTemplate: '',
    },
  });

  const defaultFormDevice = await prisma.form.create({
    data: {
      name: 'Device Request',
      description: 'Create Device request',
      code: 'DEVICE_REQUEST',
      config: {},
      schema: {
        title: 'Device Request',
        type: 'object',
        properties: {
          device: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  uniforms: {
                    uiComponent: 'SelectResourceField',
                    resource: defaultResourceDevices.id,
                  },
                },
                quantity: {
                  type: 'integer',
                  minimum: 1,
                  maximum: 100,
                },
                detail: {
                  type: 'string',
                },
              },
              required: ['type', 'detail', 'quantity'],
            },
            minItems: 1,
            uniforms: {
              index: 1,
            },
          },
          dueDate: {
            type: 'object',
            format: 'date-time',
            default: null,
            nullable: true,
            uniforms: {
              index: 2,
            },
          },
          content: {
            type: 'string',
            nullable: true,
            uniforms: { uiComponent: 'QuillEditorField', index: 4 },
          },
        },
        required: ['dueDate'],
      },
      validationConfig: {},
      triggerConfig: {},
      serializerConfig: {},
      displayConfig: {},
      displayTemplate: '',
    },
  });

  const defaultFormWFH = await prisma.form.create({
    data: {
      name: 'WFH Request',
      description: 'Create WFH request',
      code: 'WFH_REQUEST',
      config: {},
      schema: {
        title: 'WFH Request',
        type: 'object',
        properties: {
          dueDateStart: {
            type: 'object',
            format: 'date-time',
            default: null,
            nullable: true,
            uniforms: {
              index: 1,
            },
          },
          dueDateEnd: {
            type: 'object',
            format: 'date-time',
            default: null,
            nullable: true,
            uniforms: {
              index: 2,
            },
          },
          content: {
            type: 'string',
            nullable: true,
            uniforms: { uiComponent: 'QuillEditorField', index: 3 },
          },
        },
        required: ['dueDateStart', 'dueDateEnd', 'content'],
      },
      validationConfig: {},
      triggerConfig: {},
      serializerConfig: {},
      displayConfig: {},
      displayTemplate: '',
    },
  });

  const defaultTeam = await prisma.team.create({
    data: {
      name: 'default',
      description: 'Default team',
      bio: 'Default team bio',
      creatorId: user1.id,
      managerId: user1.id,
      organizationId: defaultOrg.id,
    },
  });

  const defaultTaskDefinitionChangeOffice = await prisma.taskDefinition.create({
    data: {
      title: 'Change office request',
      description: 'Create Change office request',
      icon: 'icon',
      formId: defaultFormChangeOffice.id,
      thumbnail: 'thumbnail',
      descriptionTemplate: 'descriptionTemplate',
      titleTemplate: 'titleTemplate',
      stateTemplate: 'stateTemplate',
      statusTemplate: 'statusTemplate',
      notificationTemplate: 'notificationTemplate',
      ctaTemplate: 'ctaTemplate',
      stageConfig: {},
      statusConfig: {},
      notificationConfig: {},
      processConfig: {},
      triggerConfig: {},
      ctaConfig: {},
      organizationId: defaultOrg.id,
      parentId: null,
      workflowId: null,
      actvityId: null,
    },
  });
  const defaultTaskDefinitionDevice = await prisma.taskDefinition.create({
    data: {
      title: 'Device request',
      description: 'Create Device request',
      icon: 'icon',
      formId: defaultFormDevice.id,
      thumbnail: 'thumbnail',
      descriptionTemplate: 'descriptionTemplate',
      titleTemplate: 'titleTemplate',
      stateTemplate: 'stateTemplate',
      statusTemplate: 'statusTemplate',
      notificationTemplate: 'notificationTemplate',
      ctaTemplate: 'ctaTemplate',
      stageConfig: {},
      statusConfig: {},
      notificationConfig: {},
      processConfig: {},
      triggerConfig: {},
      ctaConfig: {},
      organizationId: defaultOrg.id,
      parentId: null,
      workflowId: null,
      actvityId: null,
    },
  });
  const defaultTaskDefinitionWFH = await prisma.taskDefinition.create({
    data: {
      title: 'WFH request',
      description: 'Create WFH request',
      icon: 'icon',
      formId: defaultFormWFH.id,
      thumbnail: 'thumbnail',
      descriptionTemplate: 'descriptionTemplate',
      titleTemplate: 'titleTemplate',
      stateTemplate: 'stateTemplate',
      statusTemplate: 'statusTemplate',
      notificationTemplate: 'notificationTemplate',
      ctaTemplate: 'ctaTemplate',
      stageConfig: {},
      statusConfig: {},
      notificationConfig: {},
      processConfig: {},
      triggerConfig: {},
      ctaConfig: {},
      organizationId: defaultOrg.id,
      parentId: null,
      workflowId: null,
      actvityId: null,
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
