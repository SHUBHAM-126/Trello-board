import logo from '../../assets/trello.png'
import IconButton from '../IconButton/IconButton';
import styles from './Navbar.module.css'
import { CgMenuGridR } from "react-icons/cg";
import { HiOutlineHome } from "react-icons/hi";
import SearchBar from '../SearchBar/SearchBar';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import Avatar from '../Avatar/Avatar';
import icon from '../../assets/avatar.png'

export default function Navbar({ setIsModalOpen }) {

    return (
        <header className={styles.header}>
            <div class={styles.innerWrapper}>
                <IconButton><CgMenuGridR /></IconButton>
                <IconButton><HiOutlineHome /></IconButton>
                <SearchBar />
            </div>
            <a className={styles.logo}>
                <img src={logo} alt='Trello' height={30} width={30} />
                <h1>Trello</h1>
            </a>
            <div class={styles.innerWrapperRight}>

                <IconButton
                    onClick={() => setIsModalOpen(true)}
                >
                    <AiOutlinePlus />
                </IconButton>

                <IconButton><AiOutlineInfoCircle /></IconButton>
                <IconButton><AiOutlineBell /></IconButton>
                <Avatar src={icon} />
            </div>
        </header>
    )
}