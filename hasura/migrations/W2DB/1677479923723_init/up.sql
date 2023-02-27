SET check_function_bodies = false;
CREATE TYPE public."ActivityType" AS ENUM (
    'HTTP_ACTIVITY',
    'GRAPHQL_ACTIVITY',
    'SCRIPT_ACTIVITY',
    'SYSTEM_ACTIVITY'
);
CREATE TYPE public."FileType" AS ENUM (
    'FILE',
    'VARIANT'
);
CREATE TYPE public."ProviderEnum" AS ENUM (
    'local',
    'google'
);
CREATE TYPE public."Role" AS ENUM (
    'ADMIN',
    'USER'
);
CREATE TYPE public."TaskBoardType" AS ENUM (
    'Organization',
    'Personal',
    'Project',
    'Team'
);
CREATE TYPE public."TaskBoardViewType" AS ENUM (
    'Todos',
    'Kanban',
    'Calendar',
    'Matrix'
);
CREATE TYPE public."TaskPriority" AS ENUM (
    'LOW',
    'MEDIUM',
    'HIGH',
    'URGENT'
);
CREATE TYPE public."TriggerStatus" AS ENUM (
    'NEW',
    'PROCESSING',
    'PROCESSED',
    'FAILED'
);
CREATE TYPE public."TriggerType" AS ENUM (
    'FORM_TRIGGER',
    'SYSTEM_TRIGGER',
    'MANUAL_TRIGGER',
    'WEBHOOK_TRIGGER'
);
CREATE TYPE public."Visibility" AS ENUM (
    'Public',
    'Private'
);
CREATE TABLE public."ActivityDefinition" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    synchronous boolean DEFAULT false NOT NULL,
    type public."ActivityType" NOT NULL,
    config jsonb,
    "initialValue" jsonb,
    key text NOT NULL,
    name text,
    description text
);
CREATE SEQUENCE public."ActivityDefinition_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."ActivityDefinition_id_seq" OWNED BY public."ActivityDefinition".id;
CREATE TABLE public."Comment" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    content text NOT NULL,
    "creatorId" integer NOT NULL,
    "taskId" integer NOT NULL
);
CREATE SEQUENCE public."Comment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Comment_id_seq" OWNED BY public."Comment".id;
CREATE TABLE public."EventLog" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "userId" integer,
    "taskId" integer,
    "organizationId" integer,
    content text,
    context jsonb,
    action text,
    domain text,
    intent text
);
CREATE SEQUENCE public."EventLog_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."EventLog_id_seq" OWNED BY public."EventLog".id;
CREATE TABLE public."File" (
    id integer NOT NULL,
    filename text NOT NULL,
    "fileType" public."FileType" NOT NULL,
    mimetype text NOT NULL,
    encoding text NOT NULL,
    data text NOT NULL,
    "cdnUrl" text NOT NULL,
    "varantName" text,
    "variantKey" text,
    "variantValue" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "variantOfId" integer,
    "organizationId" integer NOT NULL
);
CREATE SEQUENCE public."File_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."File_id_seq" OWNED BY public."File".id;
CREATE TABLE public."Form" (
    id integer NOT NULL,
    name text NOT NULL,
    code text NOT NULL,
    description text NOT NULL,
    schema jsonb NOT NULL,
    config jsonb NOT NULL,
    "validationConfig" jsonb NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "values" jsonb
);
CREATE SEQUENCE public."Form_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Form_id_seq" OWNED BY public."Form".id;
CREATE TABLE public."MemberOnProjects" (
    "projectId" integer NOT NULL,
    "userId" integer NOT NULL,
    "assignedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "assignedBy" text NOT NULL
);
CREATE TABLE public."MemberOnTeams" (
    "teamId" integer NOT NULL,
    "userId" integer NOT NULL,
    "assignedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "assignedBy" text NOT NULL
);
CREATE TABLE public."Organization" (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE SEQUENCE public."Organization_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Organization_id_seq" OWNED BY public."Organization".id;
CREATE TABLE public."Permission" (
    id integer NOT NULL,
    name text NOT NULL,
    code text NOT NULL,
    description text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "organizationId" integer NOT NULL,
    "permissionGroupId" integer NOT NULL
);
CREATE TABLE public."PermissionGroup" (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "organizationId" integer NOT NULL
);
CREATE SEQUENCE public."PermissionGroup_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."PermissionGroup_id_seq" OWNED BY public."PermissionGroup".id;
CREATE SEQUENCE public."Permission_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Permission_id_seq" OWNED BY public."Permission".id;
CREATE TABLE public."Post" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    published boolean NOT NULL,
    title text NOT NULL,
    content text,
    "authorId" integer
);
CREATE SEQUENCE public."Post_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Post_id_seq" OWNED BY public."Post".id;
CREATE TABLE public."Project" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    code text NOT NULL,
    icon text NOT NULL,
    "organizationId" integer NOT NULL,
    "taskDefinitionId" integer NOT NULL,
    "creatorId" integer NOT NULL,
    "managerId" integer NOT NULL,
    "reporterId" integer NOT NULL
);
CREATE TABLE public."ProjectSettings" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    key text NOT NULL,
    value jsonb DEFAULT '{}'::jsonb NOT NULL,
    "projectId" integer NOT NULL
);
CREATE SEQUENCE public."ProjectSettings_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."ProjectSettings_id_seq" OWNED BY public."ProjectSettings".id;
CREATE SEQUENCE public."Project_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Project_id_seq" OWNED BY public."Project".id;
CREATE TABLE public."Resource" (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    code text NOT NULL,
    icon text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "organizationId" integer NOT NULL
);
CREATE TABLE public."ResourceItem" (
    id integer NOT NULL,
    name text NOT NULL,
    code text NOT NULL,
    description text NOT NULL,
    icon text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "resourceId" integer NOT NULL
);
CREATE SEQUENCE public."ResourceItem_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."ResourceItem_id_seq" OWNED BY public."ResourceItem".id;
CREATE SEQUENCE public."Resource_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Resource_id_seq" OWNED BY public."Resource".id;
CREATE TABLE public."Settings" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    key text NOT NULL,
    "organizationId" integer NOT NULL,
    value jsonb DEFAULT '{}'::jsonb NOT NULL
);
CREATE SEQUENCE public."Settings_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Settings_id_seq" OWNED BY public."Settings".id;
CREATE TABLE public."Task" (
    id integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    "dueDate" timestamp(3) without time zone,
    priority public."TaskPriority" DEFAULT 'LOW'::public."TaskPriority" NOT NULL,
    "values" jsonb,
    "ctaName" text DEFAULT ''::text NOT NULL,
    "stateName" text DEFAULT ''::text NOT NULL,
    "statusName" text DEFAULT ''::text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "definitionId" integer,
    "assigneeId" integer,
    "creatorId" integer NOT NULL,
    "parentId" integer,
    "organizationId" integer,
    "teamId" integer,
    config jsonb,
    cta text DEFAULT ''::text NOT NULL,
    "ctaTemplate" text,
    "descriptionTemplate" text,
    "notificationTemplate" text,
    properties jsonb,
    state text DEFAULT ''::text NOT NULL,
    "stateTemplate" text,
    "stateValues" text DEFAULT ''::text NOT NULL,
    "statusTemplate" text,
    "titleTemplate" text,
    type text DEFAULT ''::text NOT NULL,
    "typeName" text DEFAULT ''::text NOT NULL,
    status text DEFAULT ''::text NOT NULL,
    "formConfig" jsonb,
    key text NOT NULL,
    "isActive" boolean DEFAULT false NOT NULL,
    "formId" integer,
    "projectId" integer,
    "reporterId" integer
);
CREATE TABLE public."TaskBoard" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    code text NOT NULL,
    icon text NOT NULL,
    type public."TaskBoardType" DEFAULT 'Organization'::public."TaskBoardType" NOT NULL,
    "viewType" public."TaskBoardViewType" DEFAULT 'Todos'::public."TaskBoardViewType" NOT NULL,
    "viewConfig" jsonb DEFAULT '{}'::jsonb NOT NULL,
    visibility public."Visibility" DEFAULT 'Public'::public."Visibility" NOT NULL,
    "organizationId" integer NOT NULL,
    "projectId" integer,
    "taskDefinitionId" integer NOT NULL
);
CREATE TABLE public."TaskBoardSettings" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    key text NOT NULL,
    value jsonb DEFAULT '{}'::jsonb NOT NULL,
    "taskBoardId" integer NOT NULL
);
CREATE SEQUENCE public."TaskBoardSettings_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."TaskBoardSettings_id_seq" OWNED BY public."TaskBoardSettings".id;
CREATE SEQUENCE public."TaskBoard_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."TaskBoard_id_seq" OWNED BY public."TaskBoard".id;
CREATE TABLE public."TaskDefinition" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    icon text NOT NULL,
    thumbnail text NOT NULL,
    "descriptionTemplate" text,
    "titleTemplate" text,
    "statusTemplate" text,
    "stateTemplate" text,
    "notificationTemplate" text,
    "ctaTemplate" text,
    "organizationId" integer NOT NULL,
    "parentId" integer,
    "keyTemplate" text,
    "machineConfig" jsonb
);
CREATE SEQUENCE public."TaskDefinition_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."TaskDefinition_id_seq" OWNED BY public."TaskDefinition".id;
CREATE SEQUENCE public."Task_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Task_id_seq" OWNED BY public."Task".id;
CREATE TABLE public."Team" (
    id integer NOT NULL,
    name text NOT NULL,
    bio text NOT NULL,
    description text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "creatorId" integer NOT NULL,
    "managerId" integer NOT NULL,
    "organizationId" integer NOT NULL
);
CREATE SEQUENCE public."Team_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Team_id_seq" OWNED BY public."Team".id;
CREATE TABLE public."Trigger" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    type public."TriggerType" NOT NULL,
    name text,
    description text,
    key text NOT NULL,
    status public."TriggerStatus" NOT NULL,
    "taskId" integer,
    value jsonb
);
CREATE SEQUENCE public."Trigger_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Trigger_id_seq" OWNED BY public."Trigger".id;
CREATE TABLE public."User" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    email text NOT NULL,
    password text,
    firstname text,
    lastname text,
    "organizationId" integer,
    role public."Role" NOT NULL,
    "avatarId" integer,
    "googleId" text,
    "googleToken" text,
    provider public."ProviderEnum" DEFAULT 'local'::public."ProviderEnum" NOT NULL,
    "fullName" character varying,
    "branchCode" character varying,
    "jobPositionCode" character varying,
    "userTypeName" character varying,
    "statusName" character varying
);
CREATE TABLE public."UserPermission" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "userId" integer NOT NULL,
    "permissionId" integer NOT NULL
);
CREATE SEQUENCE public."UserPermission_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."UserPermission_id_seq" OWNED BY public."UserPermission".id;
CREATE TABLE public."UserSetting" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    key text NOT NULL,
    value jsonb DEFAULT '{}'::jsonb NOT NULL,
    "userId" integer NOT NULL
);
CREATE SEQUENCE public."UserSetting_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."UserSetting_id_seq" OWNED BY public."UserSetting".id;
CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;
CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
ALTER TABLE ONLY public."ActivityDefinition" ALTER COLUMN id SET DEFAULT nextval('public."ActivityDefinition_id_seq"'::regclass);
ALTER TABLE ONLY public."Comment" ALTER COLUMN id SET DEFAULT nextval('public."Comment_id_seq"'::regclass);
ALTER TABLE ONLY public."EventLog" ALTER COLUMN id SET DEFAULT nextval('public."EventLog_id_seq"'::regclass);
ALTER TABLE ONLY public."File" ALTER COLUMN id SET DEFAULT nextval('public."File_id_seq"'::regclass);
ALTER TABLE ONLY public."Form" ALTER COLUMN id SET DEFAULT nextval('public."Form_id_seq"'::regclass);
ALTER TABLE ONLY public."Organization" ALTER COLUMN id SET DEFAULT nextval('public."Organization_id_seq"'::regclass);
ALTER TABLE ONLY public."Permission" ALTER COLUMN id SET DEFAULT nextval('public."Permission_id_seq"'::regclass);
ALTER TABLE ONLY public."PermissionGroup" ALTER COLUMN id SET DEFAULT nextval('public."PermissionGroup_id_seq"'::regclass);
ALTER TABLE ONLY public."Post" ALTER COLUMN id SET DEFAULT nextval('public."Post_id_seq"'::regclass);
ALTER TABLE ONLY public."Project" ALTER COLUMN id SET DEFAULT nextval('public."Project_id_seq"'::regclass);
ALTER TABLE ONLY public."ProjectSettings" ALTER COLUMN id SET DEFAULT nextval('public."ProjectSettings_id_seq"'::regclass);
ALTER TABLE ONLY public."Resource" ALTER COLUMN id SET DEFAULT nextval('public."Resource_id_seq"'::regclass);
ALTER TABLE ONLY public."ResourceItem" ALTER COLUMN id SET DEFAULT nextval('public."ResourceItem_id_seq"'::regclass);
ALTER TABLE ONLY public."Settings" ALTER COLUMN id SET DEFAULT nextval('public."Settings_id_seq"'::regclass);
ALTER TABLE ONLY public."Task" ALTER COLUMN id SET DEFAULT nextval('public."Task_id_seq"'::regclass);
ALTER TABLE ONLY public."TaskBoard" ALTER COLUMN id SET DEFAULT nextval('public."TaskBoard_id_seq"'::regclass);
ALTER TABLE ONLY public."TaskBoardSettings" ALTER COLUMN id SET DEFAULT nextval('public."TaskBoardSettings_id_seq"'::regclass);
ALTER TABLE ONLY public."TaskDefinition" ALTER COLUMN id SET DEFAULT nextval('public."TaskDefinition_id_seq"'::regclass);
ALTER TABLE ONLY public."Team" ALTER COLUMN id SET DEFAULT nextval('public."Team_id_seq"'::regclass);
ALTER TABLE ONLY public."Trigger" ALTER COLUMN id SET DEFAULT nextval('public."Trigger_id_seq"'::regclass);
ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
ALTER TABLE ONLY public."UserPermission" ALTER COLUMN id SET DEFAULT nextval('public."UserPermission_id_seq"'::regclass);
ALTER TABLE ONLY public."UserSetting" ALTER COLUMN id SET DEFAULT nextval('public."UserSetting_id_seq"'::regclass);
ALTER TABLE ONLY public."ActivityDefinition"
    ADD CONSTRAINT "ActivityDefinition_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Comment"
    ADD CONSTRAINT "Comment_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."EventLog"
    ADD CONSTRAINT "EventLog_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."File"
    ADD CONSTRAINT "File_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Form"
    ADD CONSTRAINT "Form_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."MemberOnProjects"
    ADD CONSTRAINT "MemberOnProjects_pkey" PRIMARY KEY ("projectId", "userId");
ALTER TABLE ONLY public."MemberOnTeams"
    ADD CONSTRAINT "MemberOnTeams_pkey" PRIMARY KEY ("teamId", "userId");
ALTER TABLE ONLY public."Organization"
    ADD CONSTRAINT "Organization_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."PermissionGroup"
    ADD CONSTRAINT "PermissionGroup_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Permission"
    ADD CONSTRAINT "Permission_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."ProjectSettings"
    ADD CONSTRAINT "ProjectSettings_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."ResourceItem"
    ADD CONSTRAINT "ResourceItem_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Resource"
    ADD CONSTRAINT "Resource_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Settings"
    ADD CONSTRAINT "Settings_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."TaskBoardSettings"
    ADD CONSTRAINT "TaskBoardSettings_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."TaskBoard"
    ADD CONSTRAINT "TaskBoard_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."TaskDefinition"
    ADD CONSTRAINT "TaskDefinition_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Team"
    ADD CONSTRAINT "Team_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Trigger"
    ADD CONSTRAINT "Trigger_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."UserPermission"
    ADD CONSTRAINT "UserPermission_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."UserSetting"
    ADD CONSTRAINT "UserSetting_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_email_key" UNIQUE (email);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
CREATE INDEX "ActivityDefinition_key_idx" ON public."ActivityDefinition" USING btree (key);
CREATE UNIQUE INDEX "ActivityDefinition_key_key" ON public."ActivityDefinition" USING btree (key);
CREATE INDEX "EventLog_taskId_idx" ON public."EventLog" USING btree ("taskId");
CREATE INDEX "EventLog_userId_idx" ON public."EventLog" USING btree ("userId");
CREATE INDEX "TaskDefinition_parentId_idx" ON public."TaskDefinition" USING btree ("parentId");
CREATE INDEX "Task_assigneeId_status_idx" ON public."Task" USING btree ("assigneeId", status);
CREATE INDEX "Task_creatorId_status_idx" ON public."Task" USING btree ("creatorId", status);
CREATE INDEX "Task_parentId_idx" ON public."Task" USING btree ("parentId");
CREATE INDEX "Task_priority_idx" ON public."Task" USING btree (priority);
ALTER TABLE ONLY public."Comment"
    ADD CONSTRAINT "Comment_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Comment"
    ADD CONSTRAINT "Comment_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES public."Task"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."EventLog"
    ADD CONSTRAINT "EventLog_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES public."Organization"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."EventLog"
    ADD CONSTRAINT "EventLog_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES public."Task"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."EventLog"
    ADD CONSTRAINT "EventLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."File"
    ADD CONSTRAINT "File_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES public."Organization"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."File"
    ADD CONSTRAINT "File_variantOfId_fkey" FOREIGN KEY ("variantOfId") REFERENCES public."File"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."MemberOnProjects"
    ADD CONSTRAINT "MemberOnProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public."Project"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."MemberOnProjects"
    ADD CONSTRAINT "MemberOnProjects_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."MemberOnTeams"
    ADD CONSTRAINT "MemberOnTeams_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."MemberOnTeams"
    ADD CONSTRAINT "MemberOnTeams_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."PermissionGroup"
    ADD CONSTRAINT "PermissionGroup_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES public."Organization"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Permission"
    ADD CONSTRAINT "Permission_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES public."Organization"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Permission"
    ADD CONSTRAINT "Permission_permissionGroupId_fkey" FOREIGN KEY ("permissionGroupId") REFERENCES public."PermissionGroup"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."ProjectSettings"
    ADD CONSTRAINT "ProjectSettings_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public."Project"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES public."Organization"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_taskDefinitionId_fkey" FOREIGN KEY ("taskDefinitionId") REFERENCES public."TaskDefinition"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."ResourceItem"
    ADD CONSTRAINT "ResourceItem_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES public."Resource"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Resource"
    ADD CONSTRAINT "Resource_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES public."Organization"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Settings"
    ADD CONSTRAINT "Settings_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES public."Organization"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."TaskBoardSettings"
    ADD CONSTRAINT "TaskBoardSettings_taskBoardId_fkey" FOREIGN KEY ("taskBoardId") REFERENCES public."TaskBoard"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."TaskBoard"
    ADD CONSTRAINT "TaskBoard_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES public."Organization"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."TaskBoard"
    ADD CONSTRAINT "TaskBoard_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public."Project"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."TaskBoard"
    ADD CONSTRAINT "TaskBoard_taskDefinitionId_fkey" FOREIGN KEY ("taskDefinitionId") REFERENCES public."TaskDefinition"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."TaskDefinition"
    ADD CONSTRAINT "TaskDefinition_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES public."TaskDefinition"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_definitionId_fkey" FOREIGN KEY ("definitionId") REFERENCES public."TaskDefinition"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_formId_fkey" FOREIGN KEY ("formId") REFERENCES public."Form"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES public."Organization"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES public."Task"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public."Project"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Team"
    ADD CONSTRAINT "Team_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Team"
    ADD CONSTRAINT "Team_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Team"
    ADD CONSTRAINT "Team_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES public."Organization"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Trigger"
    ADD CONSTRAINT "Trigger_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES public."Task"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."UserPermission"
    ADD CONSTRAINT "UserPermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES public."Permission"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."UserPermission"
    ADD CONSTRAINT "UserPermission_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."UserSetting"
    ADD CONSTRAINT "UserSetting_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES public."File"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES public."Organization"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
