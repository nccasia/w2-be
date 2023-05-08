SET check_function_bodies = false;
INSERT INTO public."Resource" (id, name, description, code, icon, "createdAt", "updatedAt", "organizationId") VALUES (7, 'Offices', 'Offices', 'OFFICES', '', '2023-02-10 10:01:43.86', '2023-02-10 10:01:43.86', 4);
INSERT INTO public."Resource" (id, name, description, code, icon, "createdAt", "updatedAt", "organizationId") VALUES (8, 'Devices', 'Devices', 'DEVICES', '', '2023-02-10 10:01:43.871', '2023-02-10 10:01:43.871', 4);
INSERT INTO public."Resource" (id, name, description, code, icon, "createdAt", "updatedAt", "organizationId") VALUES (9, 'PMS', 'Project Managers', 'PMS', '', '2023-02-10 10:01:43.871', '2023-02-10 10:01:43.871', 4);
SELECT pg_catalog.setval('public."Resource_id_seq"', 9, true);
