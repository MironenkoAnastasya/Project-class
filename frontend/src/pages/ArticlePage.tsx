import { useParams } from "react-router-dom";
import { useGetArticleByIdQuery } from "../assets/api/articlesApi";
import type { Article } from "../assets/api/articles.types";

const ArticlePage = () => {
    const { id } = useParams();
    const numericId = Number(id);
    const { data } = useGetArticleByIdQuery(numericId, {
        skip: !id || isNaN(numericId),
    });

    const article: Article | undefined = data?.data || {};
    return (
        <div>
            <h1>Article {article?.title}</h1>
        </div>
    );
}

export default ArticlePage;
