import styles from './Sidebar.module.css'
import { BsFillClipboard2Fill } from "react-icons/bs";
import { FiTrello } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { RiTBoxFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { LuArrowRight } from "react-icons/lu";

export default function Sidebar() {

    const [isMobile, setIsMobile] = useState(window?.innerWidth < 768);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

    // CHECK IF MOBILE
    useEffect(() => {

        const handleResize = () => setIsMobile(window?.innerWidth < 768)

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [])

    return (
        <div className={!isMobileSidebarOpen ? styles.sidebar : `${styles.sidebar} ${styles.active}`}>
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

            {isMobile && (
                <button
                    className={styles.openSidebar}
                    onClick={() => setIsMobileSidebarOpen(prev => !prev)}
                >
                    <LuArrowRight />
                </button>
            )}

        </div>
    )
}