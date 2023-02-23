SET check_function_bodies = false;
INSERT INTO public."TaskDefinition" (id, "createdAt", "updatedAt", title, description, icon, thumbnail, "descriptionTemplate", "titleTemplate", "statusTemplate", "stateTemplate", "notificationTemplate", "ctaTemplate", "organizationId", "parentId", "formId", "keyTemplate", "machineConfig") VALUES (38, '2023-02-10 10:01:43.925', '2023-02-10 10:01:43.925', 'Device request', 'Create Device request', 'icon', 'thumbnail', 'descriptionTemplate', '[DEV#{{task.id}}] Device request', 'statusTemplate', 'stateTemplate', 'notificationTemplate', 'ctaTemplate', 4, NULL, 64, 'DEVICE_REQUEST', '{"id": "[DEV#40] Device request", "on": {"SET_ACTIVE": {"actions": "setActive"}, "CHANGE_STATUS": [{"cond": "isTodo", "target": "#TODO"}, {"cond": "isDiscarded", "target": "#DISCARDED"}]}, "type": "compound", "states": {"NEW": {"meta": {"MAIN": {"state": "NEW"}}, "type": "atomic", "invoke": {"src": "setupTask", "onDone": {"target": "TODO"}}}, "DONE": {"id": "DONE", "type": "compound", "states": {"APPROVED": {"meta": {"MAIN": {"state": "APPROVED"}}, "type": "final"}, "REJECTED": {"meta": {"MAIN": {"state": "REJECTED"}}, "type": "final"}}}, "TODO": {"id": "TODO", "on": {"changeStatus": [{"cond": "isDoing", "target": "DOING"}, {"cond": "isDiscarded", "target": "#DISCARDED"}]}, "meta": {"MAIN": {"state": "TODO"}}, "type": "atomic", "invoke": {"src": "checkTodo", "onDone": {"target": "DOING"}}}, "DOING": {"id": "DOING", "type": "compound", "states": {"IT_APPROVAL": {"id": "IT_APPROVAL", "meta": {"MAIN": {"state": "IT_APPROVAL"}}, "type": "compound", "states": {"SETUP": {"invoke": {"src": "fetchIt", "onDone": {"target": "WAIT_IT_APPROVAL", "actions": "assignTask"}}}, "APPROVED": {"meta": {"IT_APPROVAL": {"state": "APPROVED"}}, "type": "final", "always": "#DONE.APPROVED"}, "REJECTED": {"meta": {"IT_APPROVAL": {"state": "REJECTED"}}, "type": "final", "always": "#DONE.REJECTED"}, "WAIT_IT_APPROVAL": {"on": {"FORM_SUBMIT_IT_APPROVAL": [{"cond": "isApproved", "target": "APPROVED"}, {"cond": "isRejected", "target": "REJECTED"}]}, "meta": {"IT_APPROVAL": {"state": "WAIT_IT_APPROVAL"}}}}, "initial": "SETUP"}, "PM_APPROVAL": {"id": "PM_APPROVAL", "meta": {"MAIN": {"state": "PM_APPROVAL"}}, "type": "compound", "states": {"SETUP": {"invoke": {"src": "fetchPm", "onDone": {"target": "WAIT_PM_APPROVAL", "actions": "assignTask"}}}, "APPROVED": {"meta": {"PM_APPROVAL": {"state": "APPROVED"}}, "type": "final", "always": "#IT_APPROVAL"}, "REJECTED": {"meta": {"PM_APPROVAL": {"state": "REJECTED"}}, "type": "final", "always": "#DONE.REJECTED"}, "FORWARDED": {"meta": {"PM_APPROVAL": {"state": "FORWARDED"}}, "type": "final", "always": "#SALE_APPROVAL"}, "WAIT_PM_APPROVAL": {"on": {"FORM_SUBMIT_PM_APPROVAL": [{"cond": "isApproved", "target": "APPROVED"}, {"cond": "isRejected", "target": "REJECTED"}]}, "meta": {"PM_APPROVAL": {"state": "WAIT_PM_APPROVAL"}}}}, "initial": "SETUP"}, "SALE_APPROVAL": {"id": "SALE_APPROVAL", "meta": {"state": "SALE_APPROVAL"}, "type": "compound", "states": {"APPROVED": {"meta": {"SALE_APPROVAL": {"state": "APPROVED"}}, "type": "final", "always": "#CUSTOMER_APPROVAL"}, "REJECTED": {"meta": {"SALE_APPROVAL": {"state": "REJECTED"}}, "type": "final", "always": "#DONE.REJECTED"}, "WAIT_SALE_APPROVAL": {"on": {"FORM_SUBMIT_SALE_APPROVAL": [{"cond": "isApproved", "target": "APPROVED"}, {"cond": "isRejected", "target": "REJECTED"}]}, "meta": {"SALE_APPROVAL": {"state": "WAIT_SALE_APPROVAL"}}}}, "initial": "WAIT_SALE_APPROVAL"}, "CUSTOMER_APPROVAL": {"id": "CUSTOMER_APPROVAL", "meta": {"MAIN": {"state": "CUSTOMER_APPROVAL"}}, "type": "compound", "states": {"APPROVED": {"meta": {"CUSTOMER_APPROVAL": {"state": "APPROVED"}}, "type": "final", "always": "#IT_APPROVAL"}, "REJECTED": {"meta": {"CUSTOMER_APPROVAL": {"state": "REJECTED"}}, "type": "final", "always": "#DONE.REJECTED"}, "WAIT_CUSTOMER_APPROVAL": {"on": {"FORM_SUBMIT_CUSTOMER_APPROVAL": [{"cond": "isApproved", "target": "APPROVED"}, {"cond": "isRejected", "target": "REJECTED"}]}, "meta": {"CUSTOMER_APPROVAL": {"state": "WAIT_CUSTOMER_APPROVAL"}}}}, "initial": "WAIT_CUSTOMER_APPROVAL"}}, "initial": "PM_APPROVAL"}, "DISCARDED": {"id": "DISCARDED", "type": "final"}}, "context": {}, "initial": "NEW"}');
INSERT INTO public."TaskDefinition" (id, "createdAt", "updatedAt", title, description, icon, thumbnail, "descriptionTemplate", "titleTemplate", "statusTemplate", "stateTemplate", "notificationTemplate", "ctaTemplate", "organizationId", "parentId", "formId", "keyTemplate", "machineConfig") VALUES (34, '2023-02-10 10:01:43.901', '2023-02-10 10:01:43.929', 'Device request PMAproval', 'Create Device request PMAproval', 'icon', 'thumbnail', 'descriptionTemplate', '[DEV#{{task.id}}] PM Approval', 'statusTemplate', 'stateTemplate', 'notificationTemplate', 'ctaTemplate', 4, 38, 60, 'PM_APPROVAL', NULL);
INSERT INTO public."TaskDefinition" (id, "createdAt", "updatedAt", title, description, icon, thumbnail, "descriptionTemplate", "titleTemplate", "statusTemplate", "stateTemplate", "notificationTemplate", "ctaTemplate", "organizationId", "parentId", "formId", "keyTemplate", "machineConfig") VALUES (35, '2023-02-10 10:01:43.909', '2023-02-10 10:01:43.929', 'Device request IT Aproval', 'Create Device request ITAproval', 'icon', 'thumbnail', 'descriptionTemplate', '[DEV#{{task.id}}] IT Approval', 'statusTemplate', 'stateTemplate', 'notificationTemplate', 'ctaTemplate', 4, 38, 61, 'IT_APPROVAL', NULL);
INSERT INTO public."TaskDefinition" (id, "createdAt", "updatedAt", title, description, icon, thumbnail, "descriptionTemplate", "titleTemplate", "statusTemplate", "stateTemplate", "notificationTemplate", "ctaTemplate", "organizationId", "parentId", "formId", "keyTemplate", "machineConfig") VALUES (36, '2023-02-10 10:01:43.914', '2023-02-10 10:01:43.929', 'Device request SALE Aproval', 'Create Device request SALEAproval', 'icon', 'thumbnail', 'descriptionTemplate', '[DEV#{{task.id}}] Sale Approval', 'statusTemplate', 'stateTemplate', 'notificationTemplate', 'ctaTemplate', 4, 38, 62, 'SALE_APPROVAL', NULL);
INSERT INTO public."TaskDefinition" (id, "createdAt", "updatedAt", title, description, icon, thumbnail, "descriptionTemplate", "titleTemplate", "statusTemplate", "stateTemplate", "notificationTemplate", "ctaTemplate", "organizationId", "parentId", "formId", "keyTemplate", "machineConfig") VALUES (37, '2023-02-10 10:01:43.919', '2023-02-10 10:01:43.929', 'Device request CUSTOMER Aproval', 'Create Device request CUSTOMERAproval', 'icon', 'thumbnail', 'descriptionTemplate', '[DEV3#{{task.id}}] Customer approval', 'statusTemplate', 'stateTemplate', 'notificationTemplate', 'ctaTemplate', 4, 38, 63, 'CUSTOMER_APPROVAL', NULL);
INSERT INTO public."TaskDefinition" (id, "createdAt", "updatedAt", title, description, icon, thumbnail, "descriptionTemplate", "titleTemplate", "statusTemplate", "stateTemplate", "notificationTemplate", "ctaTemplate", "organizationId", "parentId", "formId", "keyTemplate", "machineConfig") VALUES (41, '2023-02-10 10:01:43.942', '2023-02-10 10:01:43.942', 'Change office request', 'Create Change office request', 'icon', 'thumbnail', 'descriptionTemplate', '[COR#{{task.id}}] Change office request', 'statusTemplate', 'stateTemplate', 'notificationTemplate', 'ctaTemplate', 4, NULL, 58, 'CHANGE_OFFICE_REQUEST', NULL);
INSERT INTO public."TaskDefinition" (id, "createdAt", "updatedAt", title, description, icon, thumbnail, "descriptionTemplate", "titleTemplate", "statusTemplate", "stateTemplate", "notificationTemplate", "ctaTemplate", "organizationId", "parentId", "formId", "keyTemplate", "machineConfig") VALUES (39, '2023-02-10 10:01:43.933', '2023-02-10 10:01:43.945', 'Change office request Start approval', 'Create Change office request Start approval', 'icon', 'thumbnail', 'descriptionTemplate', '[COR#{{task.id}}] Source Office Approval', 'statusTemplate', 'stateTemplate', 'notificationTemplate', 'ctaTemplate', 4, 41, 65, 'START_OFFICE_APPROVAL', NULL);
INSERT INTO public."TaskDefinition" (id, "createdAt", "updatedAt", title, description, icon, thumbnail, "descriptionTemplate", "titleTemplate", "statusTemplate", "stateTemplate", "notificationTemplate", "ctaTemplate", "organizationId", "parentId", "formId", "keyTemplate", "machineConfig") VALUES (40, '2023-02-10 10:01:43.938', '2023-02-10 10:01:43.945', 'Change office request end approval', 'Create Change office request end approval', 'icon', 'thumbnail', 'descriptionTemplate', '[COR]#{{task.id}}] Target Office Approval', 'statusTemplate', 'stateTemplate', 'notificationTemplate', 'ctaTemplate', 4, 41, 66, 'END_OFFICE_APPROVAL', NULL);
INSERT INTO public."TaskDefinition" (id, "createdAt", "updatedAt", title, description, icon, thumbnail, "descriptionTemplate", "titleTemplate", "statusTemplate", "stateTemplate", "notificationTemplate", "ctaTemplate", "organizationId", "parentId", "formId", "keyTemplate", "machineConfig") VALUES (44, '2023-02-10 10:01:43.958', '2023-02-10 10:01:43.958', 'WFH request', 'Create WFH request', 'icon', 'thumbnail', 'descriptionTemplate', '[WFH#{{task.id}}] WFH request', 'statusTemplate', 'stateTemplate', 'notificationTemplate', 'ctaTemplate', 4, NULL, 59, 'WFH_REQUEST', NULL);
INSERT INTO public."TaskDefinition" (id, "createdAt", "updatedAt", title, description, icon, thumbnail, "descriptionTemplate", "titleTemplate", "statusTemplate", "stateTemplate", "notificationTemplate", "ctaTemplate", "organizationId", "parentId", "formId", "keyTemplate", "machineConfig") VALUES (42, '2023-02-10 10:01:43.949', '2023-02-10 10:01:43.96', 'WFH request PM approval', 'Create WFH request PM approval', 'icon', 'thumbnail', 'descriptionTemplate', '[WFH#{{task.id}}] PM Approval', 'statusTemplate', 'stateTemplate', 'notificationTemplate', 'ctaTemplate', 4, 44, 67, 'PM_APPROVAL', NULL);
INSERT INTO public."TaskDefinition" (id, "createdAt", "updatedAt", title, description, icon, thumbnail, "descriptionTemplate", "titleTemplate", "statusTemplate", "stateTemplate", "notificationTemplate", "ctaTemplate", "organizationId", "parentId", "formId", "keyTemplate", "machineConfig") VALUES (43, '2023-02-10 10:01:43.953', '2023-02-10 10:01:43.96', 'WFH request CEO approval', 'Create WFH request CEO approval', 'icon', 'thumbnail', 'descriptionTemplate', '[WFH#{{task.id}}] CEO approval', 'statusTemplate', 'stateTemplate', 'notificationTemplate', 'ctaTemplate', 4, 44, 68, 'CEO_APPROVAL', NULL);
SELECT pg_catalog.setval('public."TaskDefinition_id_seq"', 44, true);
