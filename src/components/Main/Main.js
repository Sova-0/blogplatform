import React from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from 'antd';
import PostItem from "../PostItem/PostItem";
import './Main.css';


const Main = () => {
    const { articles, loading, error, tags } = useSelector((state) => state.articles);
    return (
        <div className='main'>
            <ul className="posts-list">
                {articles.map((article) => (
                    <PostItem 
                    key={article.slug}
                    slug={article.slug}
                    title={article.title} 
                    createdAt={article.createdAt}
                    favoritesCount={article.favoritesCount}
                    userName={article.author.username}
                    avatar={article.author.image}
                    description={article.description}
                    tags={tags}
                    />
                ))}
            </ul>
            <Pagination align="center" defaultCurrent={1} total={50} />
        </div>
    )

}

export default Main;