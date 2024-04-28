import styles from './TaskCard.module.css'
import { MdOutlineEdit } from "react-icons/md";

export default function TaskCard({ data, listTitle, setTaskEditDetails, setIsModalOpen }) {

    const handleClick = () => {
        setTaskEditDetails({
            taskId: data.taskId,
            taskTitle: data.taskTitle,
            taskDescription: data.taskDescription,
            listTitle: listTitle
        })
        setIsModalOpen(true)
    }

    return (
        <div className={styles.card} onClick={handleClick}>
            <h3>{data.taskTitle}</h3>
            <p>{data.taskDescription}</p>
            <button
                className={styles.editButton}
            >
                <MdOutlineEdit />
            </button>
        </div>
    )
}