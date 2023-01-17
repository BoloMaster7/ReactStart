import React from 'react';
import styles from './Favorite.module.scss'
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
 import { useSelector } from 'react-redux';
 import { getFavoriteCard } from  '../../redux/cardsRedux';
 import Card from '../Card/Card';



const Favorite = ()  => {
  const favoriteCards = useSelector(getFavoriteCard);
  return (
    <div>
      <Container>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.column}>
          <ul className={styles.cards}>
            {favoriteCards.map((favoriteCard) => (
              <Card
                key={favoriteCard.id}
                title={favoriteCard.title}
                isFavorite={favoriteCard.isFavorite}
              />
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};
export default Favorite;