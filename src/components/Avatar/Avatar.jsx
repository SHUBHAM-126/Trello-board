import styles from './Avatar.module.css'

export default function Avatar({src}) {
    return (
        <a className={styles.avatar}>
            <img src={src} />
        </a>
    )
}