import { Organization, PrismaClient, Resource, Role } from '@prisma/client';
import * as fs from 'fs';

console.log(process.cwd());

function getJson(path: string) {
  const raw = fs.readFileSync(path, 'utf8');
  return JSON.parse(raw);
}

const prisma = new PrismaClient();

async function cleanUp() {
  console.log('Cleaning up...');
  await prisma.eventLog.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.task.deleteMany();
  await prisma.form.deleteMany();
  await prisma.taskDefinition.deleteMany();
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
}

async function defineDeviceRequestTask(
  defaultOrg: Organization,
  defaultResourceDevices: Resource
) {
  const defaultTaskDefinitionDevicePMAproval =
    await prisma.taskDefinition.create({
      data: {
        title: 'Device request PMAproval',
        description: 'Create Device request PMAproval',
        icon: 'icon',
        keyTemplate: 'PM_APPROVAL',
        form: {
          create: {
            name: 'Device Request PM Approval',
            description: 'Device Request PM Approval',
            code: 'PM_APPROVAL',
            config: {},
            schema: getJson(
              'prisma/seed/workflows/device-request/pm-approval.form.json'
            ),
            validationConfig: {},
            triggerConfig: {},
            serializerConfig: {},
            displayConfig: {},
            displayTemplate: '',
          },
        },
        thumbnail: 'thumbnail',
        descriptionTemplate: 'descriptionTemplate',
        titleTemplate: '[DEV#{{task.id}}] PM Approval',
        stateTemplate: 'stateTemplate',
        statusTemplate: 'statusTemplate',
        notificationTemplate: 'notificationTemplate',
        ctaTemplate: 'ctaTemplate',
        stateConfig: {},
        statusConfig: {},
        notificationConfig: {},
        processConfig: {},
        triggerConfig: {},
        ctaConfig: {},
        organization: {
          connect: {
            id: defaultOrg.id,
          },
        },
      },
    });

  const defaultTaskDefinitionDeviceITApproval =
    await prisma.taskDefinition.create({
      data: {
        title: 'Device request IT Aproval',
        description: 'Create Device request ITAproval',
        icon: 'icon',
        keyTemplate: 'IT_APPROVAL',
        form: {
          create: {
            name: 'Device Request IT Approval',
            description: 'Device Request IT Approval',
            code: 'IT_APPROVAL',
            config: {},
            schema: getJson(
              'prisma/seed/workflows/device-request/it-approval.form.json'
            ),
            validationConfig: {},
            triggerConfig: {},
            serializerConfig: {},
            displayConfig: {},
            displayTemplate: '',
          },
        },
        thumbnail: 'thumbnail',
        descriptionTemplate: 'descriptionTemplate',
        titleTemplate: '[DEV#{{task.id}}] IT Approval',
        stateTemplate: 'stateTemplate',
        statusTemplate: 'statusTemplate',
        notificationTemplate: 'notificationTemplate',
        ctaTemplate: 'ctaTemplate',
        stateConfig: {},
        statusConfig: {},
        notificationConfig: {},
        processConfig: {},
        triggerConfig: {},
        ctaConfig: {},
        organization: {
          connect: {
            id: defaultOrg.id,
          },
        },
      },
    });

  const defaultTaskDefinitionDeviceSaleApproval =
    await prisma.taskDefinition.create({
      data: {
        title: 'Device request SALE Aproval',
        description: 'Create Device request SALEAproval',
        icon: 'icon',
        keyTemplate: 'SALE_APPROVAL',
        form: {
          create: {
            name: 'Device Request SALE Approval',
            description: 'Device Request SALE Approval',
            code: 'SALE_APPROVAL',
            config: {},
            schema: getJson(
              'prisma/seed/workflows/device-request/sale-approval.form.json'
            ),
            validationConfig: {},
            triggerConfig: {},
            serializerConfig: {},
            displayConfig: {},
            displayTemplate: '',
          },
        },
        thumbnail: 'thumbnail',
        descriptionTemplate: 'descriptionTemplate',
        titleTemplate: '[DEV#{{task.id}}] Sale Approval',
        stateTemplate: 'stateTemplate',
        statusTemplate: 'statusTemplate',
        notificationTemplate: 'notificationTemplate',
        ctaTemplate: 'ctaTemplate',
        stateConfig: {},
        statusConfig: {},
        notificationConfig: {},
        processConfig: {},
        triggerConfig: {},
        ctaConfig: {},
        organization: {
          connect: {
            id: defaultOrg.id,
          },
        },
      },
    });

  const defaultTaskDefinitionDeviceCustomerApproval =
    await prisma.taskDefinition.create({
      data: {
        title: 'Device request CUSTOMER Aproval',
        description: 'Create Device request CUSTOMERAproval',
        icon: 'icon',
        keyTemplate: 'CUSTOMER_APPROVAL',
        form: {
          create: {
            name: 'Device Request CUSTOMER Approval',
            description: 'Device Request CUSTOMER Approval',
            code: 'CUSTOMER_APPROVAL',
            config: {},
            schema: getJson(
              'prisma/seed/workflows/device-request/customer-approval.form.json'
            ),
            validationConfig: {},
            triggerConfig: {},
            serializerConfig: {},
            displayConfig: {},
            displayTemplate: '',
          },
        },
        thumbnail: 'thumbnail',
        descriptionTemplate: 'descriptionTemplate',
        titleTemplate: '[DEV3#{{task.id}}] Customer approval',
        stateTemplate: 'stateTemplate',
        statusTemplate: 'statusTemplate',
        notificationTemplate: 'notificationTemplate',
        ctaTemplate: 'ctaTemplate',
        stateConfig: {},
        statusConfig: {},
        notificationConfig: {},
        processConfig: {},
        triggerConfig: {},
        ctaConfig: {},
        organization: {
          connect: {
            id: defaultOrg.id,
          },
        },
      },
    });

  const deviceRequestForm = getJson(
    'prisma/seed/workflows/device-request/device-request.form.json'
  );

  deviceRequestForm.properties.device.items.properties.type.uniforms.resource =
    defaultResourceDevices.id;

  const defaultTaskDefinitionDevice = await prisma.taskDefinition.create({
    data: {
      title: 'Device request',
      description: 'Create Device request',
      icon: 'icon',
      keyTemplate: 'DEVICE_REQUEST',
      thumbnail: 'thumbnail',
      descriptionTemplate: 'descriptionTemplate',
      titleTemplate: '[DEV#{{task.id}}] Device request',
      stateTemplate: 'stateTemplate',
      statusTemplate: 'statusTemplate',
      notificationTemplate: 'notificationTemplate',
      ctaTemplate: 'ctaTemplate',
      stateConfig: {},
      statusConfig: {},
      notificationConfig: {},
      processConfig: {},
      triggerConfig: {},
      ctaConfig: {},
      machineConfig: getJson(
        'prisma/seed/workflows/device-request/workflow.json'
      ),
      form: {
        create: {
          name: 'Device Request',
          description: 'Create Device request',
          code: 'DEVICE_REQUEST',
          config: {},
          schema: deviceRequestForm,
          validationConfig: {},
          triggerConfig: {},
          serializerConfig: {},
          displayConfig: {},
          displayTemplate: '',
        },
      },
      organization: {
        connect: {
          id: defaultOrg.id,
        },
      },
      subTaskDefinitions: {
        connect: [
          {
            id: defaultTaskDefinitionDevicePMAproval.id,
          },
          {
            id: defaultTaskDefinitionDeviceITApproval.id,
          },
          {
            id: defaultTaskDefinitionDeviceSaleApproval.id,
          },
          {
            id: defaultTaskDefinitionDeviceCustomerApproval.id,
          },
        ],
      },
    },
  });
}

async function main() {
  await cleanUp();
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
            type: 'string',
            format: 'date',
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
            type: 'string',
            format: 'date',
            default: null,
            nullable: true,
            uniforms: {
              index: 1,
            },
          },
          dueDateEnd: {
            type: 'string',
            format: 'date',
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

  await prisma.memberOnTeams.create({
    data: {
      teamId: defaultTeam.id,
      userId: user1.id,
      assignedBy: 'SYSTEM',
    },
  });

  await defineDeviceRequestTask(defaultOrg, defaultResourceDevices);

  const defaultTaskDefinitionChangeOfficeStartApproval =
    await prisma.taskDefinition.create({
      data: {
        title: 'Change office request Start approval',
        description: 'Create Change office request Start approval',
        icon: 'icon',
        keyTemplate: 'START_OFFICE_APPROVAL',
        thumbnail: 'thumbnail',
        descriptionTemplate: 'descriptionTemplate',
        titleTemplate: '[COR#{{task.id}}] Source Office Approval',
        stateTemplate: 'stateTemplate',
        statusTemplate: 'statusTemplate',
        notificationTemplate: 'notificationTemplate',
        ctaTemplate: 'ctaTemplate',
        stateConfig: {},
        statusConfig: {},
        notificationConfig: {},
        processConfig: {},
        triggerConfig: {},
        ctaConfig: {},
        form: {
          create: {
            name: 'Change Office Request Start Approval',
            description: 'Create Change office request Start approval',
            code: 'START_APPROVAL',
            config: {},
            schema: {
              title: 'Singlechoice',
              type: 'object',
              properties: {
                singlechoice: {
                  type: 'string',
                  nullable: true,
                  uniforms: { uiComponent: 'SinglechoiceField', index: 1 },
                },
                reason: {
                  type: 'string',
                  nullable: true,
                  uniforms: { index: 2 },
                },
              },
              required: ['singlechoice', 'reason'],
            },
            validationConfig: {},
            triggerConfig: {},
            serializerConfig: {},
            displayConfig: {},
            displayTemplate: '',
          },
        },
        organization: {
          connect: {
            id: defaultOrg.id,
          },
        },
      },
    });

  const defaultTaskDefinitionChangeOfficeEndApproval =
    await prisma.taskDefinition.create({
      data: {
        title: 'Change office request end approval',
        description: 'Create Change office request end approval',
        icon: 'icon',
        keyTemplate: 'END_OFFICE_APPROVAL',
        thumbnail: 'thumbnail',
        descriptionTemplate: 'descriptionTemplate',
        titleTemplate: '[COR]#{{task.id}}] Target Office Approval',
        stateTemplate: 'stateTemplate',
        statusTemplate: 'statusTemplate',
        notificationTemplate: 'notificationTemplate',
        ctaTemplate: 'ctaTemplate',
        stateConfig: {},
        statusConfig: {},
        notificationConfig: {},
        processConfig: {},
        triggerConfig: {},
        ctaConfig: {},
        form: {
          create: {
            name: 'Change Office Request end Approval',
            description: 'Create Change office request end approval',
            code: 'END_APPROVAL',
            config: {},
            schema: {
              title: 'Singlechoice',
              type: 'object',
              properties: {
                singlechoice: {
                  type: 'string',
                  nullable: true,
                  uniforms: { uiComponent: 'SinglechoiceField', index: 1 },
                },
                reason: {
                  type: 'string',
                  nullable: true,
                  uniforms: { index: 2 },
                },
              },
              required: ['singlechoice', 'reason'],
            },
            validationConfig: {},
            triggerConfig: {},
            serializerConfig: {},
            displayConfig: {},
            displayTemplate: '',
          },
        },
        organization: {
          connect: {
            id: defaultOrg.id,
          },
        },
      },
    });

  const defaultTaskDefinitionChangeOffice = await prisma.taskDefinition.create({
    data: {
      title: 'Change office request',
      description: 'Create Change office request',
      icon: 'icon',
      keyTemplate: 'CHANGE_OFFICE_REQUEST',
      form: {
        connect: {
          id: defaultFormChangeOffice.id,
        },
      },
      thumbnail: 'thumbnail',
      descriptionTemplate: 'descriptionTemplate',
      titleTemplate: '[COR#{{task.id}}] Change office request',
      stateTemplate: 'stateTemplate',
      statusTemplate: 'statusTemplate',
      notificationTemplate: 'notificationTemplate',
      ctaTemplate: 'ctaTemplate',
      stateConfig: {},
      statusConfig: {},
      notificationConfig: {},
      processConfig: {},
      triggerConfig: {},
      ctaConfig: {},
      organization: {
        connect: {
          id: defaultOrg.id,
        },
      },
      subTaskDefinitions: {
        connect: [
          {
            id: defaultTaskDefinitionChangeOfficeStartApproval.id,
          },
          {
            id: defaultTaskDefinitionChangeOfficeEndApproval.id,
          },
        ],
      },
    },
  });

  const defaultTaskDefinitionWFHPMAproval = await prisma.taskDefinition.create({
    data: {
      title: 'WFH request PM approval',
      description: 'Create WFH request PM approval',
      icon: 'icon',
      keyTemplate: 'PM_APPROVAL',
      form: {
        create: {
          name: 'WFH Request PM Approval',
          description: 'Create WFH request PM approval',
          code: 'PM_APPROVAL',
          config: {},
          schema: {
            title: 'Singlechoice',
            type: 'object',
            properties: {
              singlechoice: {
                type: 'string',
                nullable: true,
                uniforms: { uiComponent: 'SinglechoiceField', index: 1 },
              },
              reason: {
                type: 'string',
                nullable: true,
                uniforms: { index: 2 },
              },
            },
            required: ['singlechoice', 'reason'],
          },
          validationConfig: {},
          triggerConfig: {},
          serializerConfig: {},
          displayConfig: {},
          displayTemplate: '',
        },
      },
      thumbnail: 'thumbnail',
      descriptionTemplate: 'descriptionTemplate',
      titleTemplate: '[WFH#{{task.id}}] PM Approval',
      stateTemplate: 'stateTemplate',
      statusTemplate: 'statusTemplate',
      notificationTemplate: 'notificationTemplate',
      ctaTemplate: 'ctaTemplate',
      stateConfig: {},
      statusConfig: {},
      notificationConfig: {},
      processConfig: {},
      triggerConfig: {},
      ctaConfig: {},
      organization: {
        connect: {
          id: defaultOrg.id,
        },
      },
    },
  });

  const defaultTaskDefinitionWFHCEOAproval = await prisma.taskDefinition.create(
    {
      data: {
        title: 'WFH request CEO approval',
        description: 'Create WFH request CEO approval',
        icon: 'icon',
        keyTemplate: 'CEO_APPROVAL',
        form: {
          create: {
            name: 'WFH Request CEO Approval',
            description: 'Create WFH request CEO approval',
            code: 'CEO_APPROVAL',
            config: {},
            schema: {
              title: 'Singlechoice',
              type: 'object',
              properties: {
                singlechoice: {
                  type: 'string',
                  nullable: true,
                  uniforms: { uiComponent: 'SinglechoiceField', index: 1 },
                },
                reason: {
                  type: 'string',
                  nullable: true,
                  uniforms: { index: 2 },
                },
              },
              required: ['singlechoice', 'reason'],
            },
            validationConfig: {},
            triggerConfig: {},
            serializerConfig: {},
            displayConfig: {},
            displayTemplate: '',
          },
        },
        thumbnail: 'thumbnail',
        descriptionTemplate: 'descriptionTemplate',
        titleTemplate: '[WFH#{{task.id}}] CEO approval',
        stateTemplate: 'stateTemplate',
        statusTemplate: 'statusTemplate',
        notificationTemplate: 'notificationTemplate',
        ctaTemplate: 'ctaTemplate',
        stateConfig: {},
        statusConfig: {},
        notificationConfig: {},
        processConfig: {},
        triggerConfig: {},
        ctaConfig: {},
        organization: {
          connect: {
            id: defaultOrg.id,
          },
        },
      },
    }
  );

  const defaultTaskDefinitionWFH = await prisma.taskDefinition.create({
    data: {
      title: 'WFH request',
      description: 'Create WFH request',
      icon: 'icon',
      keyTemplate: 'WFH_REQUEST',
      form: {
        connect: {
          id: defaultFormWFH.id,
        },
      },
      thumbnail: 'thumbnail',
      descriptionTemplate: 'descriptionTemplate',
      titleTemplate: '[WFH#{{task.id}}] WFH request',
      stateTemplate: 'stateTemplate',
      statusTemplate: 'statusTemplate',
      notificationTemplate: 'notificationTemplate',
      ctaTemplate: 'ctaTemplate',
      stateConfig: {},
      statusConfig: {},
      notificationConfig: {},
      processConfig: {},
      triggerConfig: {},
      ctaConfig: {},
      organization: {
        connect: {
          id: defaultOrg.id,
        },
      },
      subTaskDefinitions: {
        connect: [
          {
            id: defaultTaskDefinitionWFHPMAproval.id,
          },
          {
            id: defaultTaskDefinitionWFHCEOAproval.id,
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
