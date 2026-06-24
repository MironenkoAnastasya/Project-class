import type { ArticleFormData, ArticleResponse } from "./articles.types";
import { baseApi } from "./baseApi";

type Article = {
    id: number;
    title: string;
    content: string;
}
type ArticlesResponse = {
    data: Article[]
}




export const articlesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticles: builder.query<ArticlesResponse, void>({
            query: () => '/articles',
            providesTags: ['Article']
        }),
        getArticle: builder.query<ArticleResponse, number>({
            query: (id) => `/articles/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Article', id }]
        }), // <-- Вот эта запятая была пропущена!

        createArticle: builder.mutation<ArticleResponse, ArticleFormData>({
            query: (body) => ({
                url: '/articles',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Article']
        }),

        getArticleById: builder.query({
            query: (id) => `/articles/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Article', id }]
        }),

        updateArticle: builder.mutation<ArticleResponse, ArticleFormData & { id: number } >({
            query: ({ id, ...body}) => ({
                url: `/articles/${id}`,
                method: 'PUT',
                body: body
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: 'Article', id }, 'Article']
        })
    })
})

export const { useGetArticlesQuery, useGetArticleQuery, useCreateArticleMutation, useGetArticleByIdQuery ,useUpdateArticleMutation } = articlesApi;









