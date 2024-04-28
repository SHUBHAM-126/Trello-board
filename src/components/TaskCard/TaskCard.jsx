import styles from './TaskCard.module.css'

export default function TaskCard({ data }) {
    return (
        <div className={styles.card}>
            <h3>{data.taskTitle}</h3>
            <p>{data.taskDescription}</p>
        </div>
    )
}