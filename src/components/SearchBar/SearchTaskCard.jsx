import styles from './SearchTaskCard.module.css'

export default function SearchTaskCard({ details, setTaskEditDetails, setIsModalOpen, setInput }) {

    const handleClick = () => {

        setTaskEditDetails({
            taskId: details.taskId,
            taskTitle: details.taskTitle,
            taskDescription: details.taskDescription,
            listTitle: details.listTitle
        })

        setIsModalOpen(true)

        setInput('')
        
    }

    return (
        <div className={styles.card} onClick={handleClick}>
            <h5>{details.taskTitle}</h5>
            <p className={styles.desc}>{details.taskDescription}</p>
            <p className={styles.listTitle}>{details.listTitle}</p>
        </div>
    )
}