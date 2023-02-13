SET check_function_bodies = false;
INSERT INTO public."Organization" (id, name, description, "createdAt", "updatedAt") VALUES (4, 'default', 'Default organization', '2023-02-10 10:01:43.805', '2023-02-10 10:01:43.805');
SELECT pg_catalog.setval('public."Organization_id_seq"', 4, true);
