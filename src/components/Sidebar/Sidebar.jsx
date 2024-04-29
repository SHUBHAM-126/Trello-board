import styles from './Sidebar.module.css'
import { BsFillClipboard2Fill } from "react-icons/bs";
import { FiTrello } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { RiTBoxFill } from "react-icons/ri";

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.wordSpaceTitle}>
                <RiTBoxFill />
                <div>
                    <h3>Trello Workspace</h3>
                    <p>Free</p>
                </div>
            </div>

            <ul className={styles.list}>
                <li>
                    <FiTrello />
                    <span>Boards</span>
                </li>
                <li>
                    <MdOutlinePerson />
                    <span>Members</span>
                </li>
                <li>
                    <IoIosSettings />
                    <span>Workspace settings</span>
                </li>
            </ul>

            <h4 className={styles.listTitle}>Your Boards</h4>

            <ul className={styles.list}>
                <li>
                    <BsFillClipboard2Fill />
                    <span>My Trello Board</span>
                </li>
            </ul>

        </div>
    )
}