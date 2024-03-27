import type { Field } from 'payload/types';

export const seo: Field[] = [
    {
        type: 'text',
        name: 'seo_title',
        required: true,
        admin: {
            position: 'sidebar',
            description: "The document's title that is shown in a browser's title bar.",
        },
    },
    {
        type: 'textarea',
        name: 'seo_description',
        admin: {
            position: 'sidebar',
            description: 'A short, relevant summary of what a particular page is about.',
        },
    },
    {
        type: 'text',
        name: 'seo_ogTitle',
        label: 'og:title',
        admin: {
            position: 'sidebar',
            description: 'Open Graph Title - a title shown when sharing website.',
        },
    },
    {
        type: 'textarea',
        name: 'seo_ogDescription',
        label: 'og:description',
        admin: {
            position: 'sidebar',
            description: 'Open Graph Description - a description shown when sharing website.',
        },
    },
    {
        type: 'upload',
        name: 'seo_ogImage',
        label: 'og:image',
        relationTo: 'images',
        admin: {
            position: 'sidebar',
            description: 'Open Graph Image - an image shown when sharing website.',
        },
    },
];
