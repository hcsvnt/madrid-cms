import { CollectionConfig } from 'payload/types';

const isAdmin = ({ req }) => req.user && req.user.role === 'admin';

const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    access: {
        read: () => true,
        create: isAdmin,
        update: isAdmin,
    },
    admin: {
        useAsTitle: 'email',
        defaultColumns: ['name', 'email', 'role'],
    },
    fields: [
        // Email added by default
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'role',
            label: 'Role',
            type: 'select',
            required: true,
            defaultValue: 'user',
            options: [
                {
                    label: 'Admin',
                    value: 'admin',
                },
                {
                    label: 'User',
                    value: 'user',
                },
            ],
            admin: {},
        },
    ],
};

export default Users;
