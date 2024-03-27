import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../utils/access';
import { hero } from '../fields/Hero';
import { Gallery } from '../blocks/Gallery';

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'updatedAt'],
    },
    hooks: {
        // afterChange: [revalidatePage],
        beforeChange: [
            async ({ data }) => {
                if (!data.publishedAt) {
                    data.publishedAt = new Date().toISOString();
                }
            },
        ],
    },
    // versions: {
    //     drafts: true,
    // },
    access: {
        read: () => true,
        update: isAdmin,
        create: isAdmin,
        delete: isAdmin,
    },
    fields: [
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                position: 'sidebar',
            },
            hidden: true,
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Page Title',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                    ],
                },
                {
                    label: 'Hero',
                    fields: [hero],
                },
                {
                    label: 'Content',
                    fields: [
                        {
                            name: 'layout',
                            type: 'blocks',
                            required: true,
                            blocks: [Gallery],
                        },
                    ],
                },
            ],
        },
        // slugField(),
    ],
};
