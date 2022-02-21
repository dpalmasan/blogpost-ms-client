export interface IBlogPost {
    _id: string,
    user_id: string,
    title: string,
    body?: string | null,
    created_at: Date,
    updated_at?: Date | null,
    is_deleted: boolean,
    deleted_at?: Date | null,
    tags?: String[] | null
}