export interface News {
    id: number,
    attribute: {
        createAt: string,
        des: string
        publishedAt: string
        title: string
        updatedAt: string
        img: { data: any }
    }
}