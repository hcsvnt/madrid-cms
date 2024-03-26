import { CollectionConfig } from 'payload/types';

const Images: CollectionConfig = {
    slug: 'images',
    labels: {
        singular: 'Image',
        plural: 'Images',
    },
    upload: {
        staticURL: '/assets/images',
        staticDir: 'assets/images',
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
        },
        {
            name: 'alt',
            label: 'Alt Text',
            type: 'text',
        },
        {
            name: 'likes',
            type: 'number',
            defaultValue: 0,
        },
    ],
    hooks: {
        beforeChange: [
            async ({ data, originalDoc }) => {
                if (!originalDoc) {
                    const filename = sanitizeFilename(data.filename);
                    // If name or alt are not set, use the filename
                    !data.title && (data.title = filename);
                    !data.alt && (data.alt = filename);
                }
            },
        ],
    },
};

export default Images;

export function sanitizeFilename(filename) {
    // Remove extension, basic sanitization
    return filename.replace(/\.\w*$/, '');
}
