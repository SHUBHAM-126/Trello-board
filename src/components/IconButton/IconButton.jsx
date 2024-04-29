import styles from './IconButton.module.css'

export default function IconButton({ children, onClick = () => { } }) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}