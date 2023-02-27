SET check_function_bodies = false;
INSERT INTO public."User" (id, "createdAt", "updatedAt", email, password, firstname, lastname, "organizationId", role, "avatarId", "googleId", "googleToken", provider, "fullName", "branchCode", "jobPositionCode", "userTypeName", "statusName") VALUES (5, '2023-02-10 10:01:43.843', '2023-02-10 10:01:43.843', 'admin@gmail.com', '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', 'Lisa', 'Simpson', 4, 'USER', NULL, NULL, NULL, 'local', NULL, NULL, NULL, NULL, NULL);
SELECT pg_catalog.setval('public."User_id_seq"', 1645, true);
