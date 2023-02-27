SET check_function_bodies = false;
INSERT INTO public."Team" (id, name, bio, description, "createdAt", "updatedAt", "creatorId", "managerId", "organizationId") VALUES (4, 'default', 'Default team bio', 'Default team', '2023-02-10 10:01:43.89', '2023-02-10 10:01:43.89', 5, 5, 4);
SELECT pg_catalog.setval('public."Team_id_seq"', 4, true);
