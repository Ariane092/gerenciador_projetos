import styles from './Home.module.css';
import savings from '../../img/project_img.png';
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <div>
                <h1>Bem vindo ao <span>StackedPages</span></h1>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            <div>
                <img src={savings} alt='StackedPages' />
            </div>
        </section>
    );
}

export default Home;