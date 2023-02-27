rm -rf ./seeds/W2DB

hasura seed create defaultOrganization --database-name W2DB --from-table Organization
hasura seed create defaultUser --database-name W2DB --from-table User
hasura seed create defaultPermission --database-name W2DB --from-table Permission
hasura seed create defaultPermissionGroup --database-name W2DB --from-table PermissionGroup
hasura seed create defaultUserPermission --database-name W2DB --from-table UserPermission
hasura seed create defaultTeam --database-name W2DB --from-table Team
hasura seed create defaultTaskDefinition --database-name W2DB --from-table TaskDefinition
hasura seed create defaultResource --database-name W2DB --from-table Resource
hasura seed create defaultResourceItem --database-name W2DB --from-table ResourceItem
