import { CollectionConfig } from 'payload/types';

export const Comments: CollectionConfig = {
    slug: 'comments',
    fields: [
        {
            name: 'comment',
            type: 'textarea',
        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            hasMany: false,
        },
        {
            name: 'postedAt',
            type: 'date',
            admin: {
                readOnly: true, // Automatically set the timestamp on comment creation
            },
        },
        {
            name: 'image',
            type: 'relationship',
            relationTo: 'images',
            hasMany: false,
        },
    ],
    hooks: {
        beforeChange: [
            async ({ data, req, originalDoc }) => {
                if (!originalDoc) {
                    data.postedAt = new Date().toISOString();
                }

                if (req.user) {
                    data.author = req.user.id;
                }
            },
        ],
    },
};
