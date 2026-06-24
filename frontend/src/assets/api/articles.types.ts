export type Article = {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
};

export type ArticlesResponse = {
    data: Article[];
};

export type ArticleResponse = {
    data: Article;
};

export type ArticleFormData = {
    title: string;
    content: string;
}