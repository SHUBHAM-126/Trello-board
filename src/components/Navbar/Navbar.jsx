import logo from '../../assets/trello.png'
import styles from './Navbar.module.css'

export default function Navbar(){
    return (
        <header className={styles.header}>
            <a className={styles.logo}>
                <img src={logo} alt='Trello' height={30} width={30} />
                <h1>Trello</h1>
            </a>
        </header>
    )
}