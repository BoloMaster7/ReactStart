import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
  return (
    <nav className={styles.navBar} >
       <Container>
        <div className={styles.navigation}>
        <i className={styles.icon + " fa fa-tasks"} aria-hidden="true"><Link to="/" /></ i>
            <ul>
            <li><NavLink className={({ isActive }) =>
                isActive ? styles.linkActive : undefined}
              to="/">Home
                </NavLink></li>
                <li><NavLink className={({ isActive }) =>
                isActive ? styles.linkActive : undefined}
              to="/favorite">Favorite
                    </NavLink></li>
                <li><NavLink className={({ isActive }) =>
                isActive ? styles.linkActive : undefined}
              to="/about">About
                    </NavLink></li>
            </ul>
            </div>
        </Container>
  </nav>);
}


export default NavBar;