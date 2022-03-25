import { RawNodeDatum } from "react-d3-tree/lib/types/common";

export interface IMetric {
    name: string,
    textId: string,
    value: number,
}

export interface ISentence {
    tree: RawNodeDatum,
    sentiment: string,
}


export interface IBlogPost {
    _id: string,
    user_id: string,
    title: string,
    body?: string | null,
    created_at: Date,
    updated_at?: Date | null,
    is_deleted: boolean,
    deleted_at?: Date | null,
    tags?: String[] | null,
    metrics?: IMetric[] | null,
    sentences?: ISentence[] | null,
    labels?: string[] | null,
    words?: string[] | null,
}