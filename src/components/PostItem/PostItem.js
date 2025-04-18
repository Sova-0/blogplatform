import React from 'react';
import { Link } from 'react-router-dom';
import { format} from 'date-fns';
import './PostItem.css';

const PostItem = ({ title, createdAt, favoritesCount, userName, avatar, slug, description }) => {
    const formatCreatedAt = format(new Date(createdAt), 'MMMM d, yyyy')
    return (
        <li className="post-item">
            <div className='post-item-info'>
                <div className='title-likes-info'>
                    <Link className='title-text' to={`/articles/${slug}`}>{title}</Link>
                    <button className='likes-button'>
                        <img src='/heart1.svg' alt='' /> {favoritesCount}
                    </button>
                </div>
                <ul className='tags-list-info'>
                    <li className='tag-item'>Tag1</li>
                    <li className='tag-item'>Some Tag</li>
                </ul>
                <div className='post-item-text-info'>
                    {description}
                </div>
            </div>
            <div className='user-info'>
                <div className='user-name-data-create-post-item'>
                    <div className='user-name'>{userName}</div>
                    <div className='data-create-post-item'>{formatCreatedAt} </div>
                </div>
                <div className='user-avatar'>
                    <img src={avatar} alt='Фото Пользователя' />
                </div>
            </div>
        </li>
    )
}

export default PostItem;