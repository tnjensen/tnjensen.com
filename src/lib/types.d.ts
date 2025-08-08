export type Post = {
    id: string
    title: {
        rendered: string
    }
    content: {
        rendered: string
    }
    _embedded: string['']
    meta: {
        _links_to: string
    }
}