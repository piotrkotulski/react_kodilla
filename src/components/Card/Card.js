import React from 'react';
import styles from './Card.module.scss';
import {useDispatch} from 'react-redux';
import {toggleCardFavorite} from '../../redux/cardsRedux';

const Card = ({title, isFavorite, id}) => {
    const dispatch = useDispatch();

    const handleToggleFavorite = () => {
        dispatch(toggleCardFavorite(id));
    };

    const favoriteClassName = isFavorite ? styles.favorite : '';

    return (
        <li className={`${styles.card} ${favoriteClassName}`}>
            {title}
            <button className={styles.favoriteButton} onClick={handleToggleFavorite}>
                <i className="fa-regular fa-star"></i>
            </button>
        </li>
    );
};

export default Card;
