# Keystone Roles & Permissions Support

The following documents the user permission support in keystone based on the support being added via [PR #2111](https://github.com/keystonejs/keystone/pull/2111).  Permissions are based on roles.  If a user has a role
and the list also specifies that role for any of its CRUD operations then it is permissive for the user to perform
whichever CRUD operation matches the role.  All users must define, at least, one role.  The following are guidelines
for adding role/permission support to your application:


## Define a Role List Model:

    var keystone = require('keystone');

    var Role = new keystone.List('Role', {
        autokey: { path: 'key', from: 'name', unique: true },
        track: true
    });

    Role.add({
        name: { type: String, required: true, index: true }
    });

    // Relationship definitions are optional
    Role.relationship({ ref: 'User', refPath: 'roles', path: 'usersWithRole' });
    Role.relationship({ ref: 'Permission', refPath: 'create', path: 'createsWithRole' });
    Role.relationship({ ref: 'Permission', refPath: 'read', path: 'readsWithRole' });
    Role.relationship({ ref: 'Permission', refPath: 'update', path: 'updatesWithRole' });
    Role.relationship({ ref: 'Permission', refPath: 'delete', path: 'deletesWithRole' });

    Role.defaultColumns = 'name';
    Role.register();

    module.exports = Role;

## Define a Permission List Model:

    var keystone = require('keystone');
    var Types = keystone.Field.Types;
    var _ = require('underscore');

    function listNames() {
        var listNames = [];

        if (keystone.get('models')) {
            _.each(Object.keys(keystone.get('models')), function(list) {
                // TODO:  do we return hidden lists?
                listNames.push(list.name);
            });
        }
        return listNames;
    }

    var Permission = new keystone.List('Permission', {
        autokey: { path: 'key', from: 'name', unique: true },
        track: true
    });

    Permission.add({
        name: { type: String, required: true, index: true },
        listName: { type: Types.Select, options: listNames(), required: true, initial: true, index: true },
        create: { type: Types.Relationship, ref: 'Role', many: true },
        read: { type: Types.Relationship, ref: 'Role', many: true },
        update: { type: Types.Relationship, ref: 'Role', many: true },
        delete: { type: Types.Relationship, ref: 'Role', many: true }
    });

    Permission.defaultColumns = 'name, create, read, update, delete';
    Permission.register();

    module.exports = Permission;


## Add the following roles field to the User List Model:

    roles: { type: Types.Relationship, ref: 'Role', many: true },

## Add the following to keystone.init options:

    'role model': 'Role'                    // use whatever name for the role model
    'permission model': 'Permission'        // use whatever name for the permission model

## Add roles to the roles collection.  For example:

    exports.Role = [
        {
            'name': 'Super',
            __ref: 'role_super'
        },
        {
            'name': 'Developer',
            __ref: 'role_developer'
        },
        {
            'name': 'Author',
            __ref: 'role_author'
        }
    ];

## Assign permissions to the permissions collection.  For example:

    exports.Permission = [
        {
            'name': 'Role List Permissions',
            'listName': 'Role',
            'create': ['role_super'],
            'read': ['role_super'],
            'update': ['role_super'],
            'delete': ['role_super'],
            __ref: 'permission_role'
        },
        {
            'name': 'User List Permissions',
            'listName': 'User',
            'create': ['role_super'],
            'read': ['role_super'],
            'update': ['role_super'],
            'delete': ['role_super'],
            __ref: 'permission_user'
        },
        {
            'name': 'Permission List Permissions',
            'listName': 'Permission',
            'create': ['role_super'],
            'read': ['role_super'],
            'update': ['role_super'],
            'delete': ['role_super'],
            __ref: 'permission_permission'
        }
    ]

## Assign the admin user a higher order role.  For example:

    exports.User = [
        {
            'name.first': 'Admin',
            'name.last': '',
            'name.full': 'Admin',
            email: keystoneui.get('admin email'),
            password: keystoneui.get('admin password'),
            isAdmin: true,
            roles: ['role_super'],
            __ref: 'admin_user'
        }
    ];


Having followed all the above steps, upon login in with the Admin User to the Admin UI you will now have Roles / Users / Permission lists that can be managed.  The Admin User can add additional roles, permissions, or assign roles to users.  Areas in the Admin UI, including menus, lists, items and their operations will now be rendered based on permissions.


## Assumptions

1. all users must belong to, at least, a role to be able to do anything via the Admin UI

2. views receive permissions via properties (permissions are not state)

3. user permissions will be read on a per login basis


## TODOs

1. Server-side: list CRUD restrictions based on configured permissions
2. Admin-UI: if a list does not have the noedit:true attribute set and the user does not have permissions currently item fields
    can be edited but cannot be saved.  How can fields be protected against edits when user does not have permissions
    to edit the list?
3. Admin-UI: disable links based on configured read access
4. Admin-UI: rewrite roles checks with lodash (_.intersection)
5. Access Control (ACL) API: expand to let apps manage roles/permissions programatically
6. Call the API rbac.js (instead of acl.js)?  Since this is really an RBAC implementation.
