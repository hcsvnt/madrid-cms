import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../utils/access';
import { hero } from '../fields/Hero';
import { Gallery } from '../blocks/Gallery';
import { seo } from '../fields/seo';

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
                    label: 'Settings',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                            unique: true,
                            admin: {
                                placeholder: 'Home',
                            },
                        },
                        {
                            name: 'slug',
                            type: 'text',
                            required: true,
                            unique: true,
                            defaultValue: '/',
                            index: true,
                            admin: {
                                // position: 'sidebar',
                                placeholder: '/',
                            },
                        },
                    ],
                },
                {
                    label: 'SEO',
                    fields: [...seo],
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
