import type { FC, ReactNode } from "react";

type ArticleType = {
    title: string;
    description: string;
    children: ReactNode;
};

const Article: FC<ArticleType> = ({ title, description, children }) => {
    return (
        <article className="flex flex-col py-3 mb-3 bg-emerald-900 font-mono px-2  rounded-md">
            <div className="flex items-center gap-2 mb-2 text-emerald-200">
                {children}
                <h2 className="font-bold">{title}</h2>
            </div>
            <p className="text-sm">{description}</p>
        </article>
    );
};

export default Article;
