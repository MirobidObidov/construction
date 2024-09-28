import styles from '../styles/navbar.module.css'
import { useRouter } from 'next/router';

const Navbar = () => {

  const router = useRouter();

  const goToPage = () => {
    router.push('/register');
  };

  return (
    <nav className={styles.nav}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
            <li>Cart(0)</li>
            <button onClick={goToPage}>Register</button>
        </ul>
    </nav>
  )
}

export default Navbar