import { Field } from 'payload/types';
import { isAdmin } from '../utils/access';

export const hero: Field = {
    name: 'hero',
    label: 'Hero',
    type: 'group',
    access: {
        read: () => true,
        create: isAdmin,
        update: isAdmin,
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'subtitle',
            label: 'Subtitle',
            type: 'text',
        },
        // {
        //     name: 'backgroundImage',
        //     label: 'Background Image',
        //     type: 'relationship',
        //     relationTo: 'images',
        //     required: true,
        //     hasMany: false,
        // },
    ],
};
