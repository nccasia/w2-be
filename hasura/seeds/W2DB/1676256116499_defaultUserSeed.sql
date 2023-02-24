SET check_function_bodies = false;
INSERT INTO public."User" (id, "createdAt", "updatedAt", email, password, firstname, lastname, "organizationId", role, "avatarId", "googleId", "googleToken", provider) VALUES (5, '2023-02-10 10:01:43.843', '2023-02-10 10:01:43.843', 'admin@gmail.com', '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', 'Lisa', 'Simpson', NULL, 'USER', NULL, NULL, NULL, 'local');
SELECT pg_catalog.setval('public."User_id_seq"', 5, true);
