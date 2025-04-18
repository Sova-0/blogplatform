import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { format } from "date-fns";
import './Post.css';
import Markdown from "react-markdown";

const Post = () => {
    const { slug } = useParams();
    const article = useSelector((state) =>
        state.articles.articles.find((item) => item.slug === slug));
    if (!article) {
        return <div>СТАТЬЯ НЕ НАЙДЕНА</div>;
    }
    const { title, createdAt, favoritesCount, description, body } = article;
    const { username, image } = article.author;
    const formatCreatedAt = format(new Date(createdAt), 'MMMM d, yyyy')
    return (
        <div className="post">
            <div className="post-up">
                <div className='post-info'>
                    <div className='title-likes-info'>
                        <div className='title-text'>{title}</div>
                        <button className='likes-button'>
                            <img src='/heart1.svg' alt='' /> {favoritesCount}
                        </button>
                    </div>
                    <ul className='post-tags-list-info'>
                        <li className='tag-item'>Tag1</li>
                        <li className='tag-item'>Some Tag</li>
                    </ul>
                    <div className='post-text-info'>
                        {description}
                    </div>
                </div>
                <div className='user-info'>
                    <div className='user-name-data-create-post-item'>
                        <div className='user-name'>{username}</div>
                        <div className='data-create-post-item'>{formatCreatedAt} </div>
                    </div>
                    <div className='user-avatar'>
                        <img src={image} alt='Фото Пользователя' />
                    </div>
                </div>
            </div>
            <div className="post-down">
                <Markdown>
                    {body}
                </Markdown>
            </div>
        </div>
    )
}

export default Post;