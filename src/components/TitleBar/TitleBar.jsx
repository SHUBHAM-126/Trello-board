import styles from './TitleBar.module.css'
import { FaRegStar } from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";

export default function TitleBar() {
    return (
        <div className={styles.titlebar}>
            <div className={styles.innerWrapper}>
                <h2 className={styles.title}>My Trello Board</h2>
                <button className={styles.iconButton}>
                    <FaRegStar />
                </button>
                <button className={styles.iconButton}>
                    <MdOutlinePeopleOutline />
                </button>
            </div>
            <div className={styles.innerWrapper}>
                <button className={styles.shareButton}>
                    <span>Share</span>
                    <RiShareBoxLine />
                </button>
                <button className={styles.iconButton}>
                    <HiDotsHorizontal />
                </button>
            </div>
        </div>
    )
}