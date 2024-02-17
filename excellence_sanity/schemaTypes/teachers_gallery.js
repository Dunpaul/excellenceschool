export default {
    name: 'teachers',
    type: 'document',
    title: 'Teachers Gallery',
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