export default {
    name: 'students',
    type: 'document',
    title: 'Students Gallery',
    fields: [
        {
            name:'image',
            title: 'Image',
            type: 'image',
            options : {
                hotspot:true
            },
        },
        {
            name: 'name',
            title: 'Image Name(optional)',
            type: 'string',
        },
    ]
}