//import styles from './Favorite.module.scss'
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
// import { useSelector } from 'react-redux';
// import { getFavoriteCard } from "../../redux/store";

const Favorite = ()  => {
  // const favoriteCards = useSelector(getFavoriteCard);
  return (
    <div>
      <Container>
      <PageTitle>Favourite</PageTitle>
        <p>Lorem ipsum</p>
      </Container>
    </div>
  );
};
export default Favorite;