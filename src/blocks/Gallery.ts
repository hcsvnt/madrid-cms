import type { Block } from 'payload/types';

export const Gallery: Block = {
    slug: 'gallery',
    labels: {
        singular: 'Gallery',
        plural: 'Galleries',
    },
    fields: [
        {
            name: 'images',
            label: 'Images',
            type: 'array',
            minRows: 1,
            labels: {
                singular: 'Image',
                plural: 'Images',
            },
            fields: [
                {
                    name: 'images',
                    label: 'Images',
                    type: 'relationship',
                    relationTo: 'images',
                    required: true,
                    hasMany: true,
                },
            ],
        },
    ],
};
