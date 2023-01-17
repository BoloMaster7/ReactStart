import React from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';



const Card = (props) => {
  const cardId = props.cardId;
  const [favoriteValue, setFavoriteValue] = useState(props.isFavorite);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setFavoriteValue(!favoriteValue);
    dispatch(toggleCardFavorite(cardId));
  };

  return (
    <li className={styles.card}>
      {props.title}{" "}
      <button
        onClick={handleClick}
        className={clsx(styles.button, props.isFavorite &&
          styles.isActive)}>
        <i className={"fa fa-star-o"} />
      </button>
    </li>
  );
};


export default Card;
