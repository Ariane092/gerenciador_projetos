import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../img/project_logo.png';
import Container from './Container';

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img className={styles.img} src={logo} alt="pjlogo" /></Link>
                <h1>StackedPages</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                    <button>
                        <Link to="/newproject">Novo Projeto</Link>
                    </button>
                    </li>
                </ul>
            </Container>
        </nav>
    );
};

export default Navbar;