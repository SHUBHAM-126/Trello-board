import { BsTrello } from "react-icons/bs";
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

export default function Navbar({ setIsModalOpen, taskList, setTaskEditDetails }) {

    return (
        <header className={styles.header}>
            <div className={styles.innerWrapper}>
                <IconButton><CgMenuGridR /></IconButton>
                <IconButton><HiOutlineHome /></IconButton>
                <SearchBar taskList={taskList} setTaskEditDetails={setTaskEditDetails} setIsModalOpen={setIsModalOpen} />
            </div>
            <a className={styles.logo}>
                <BsTrello />
                <h1>Trello</h1>
            </a>
            <div className={styles.innerWrapperRight}>

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