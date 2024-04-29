import styles from './SearchBar.module.css'
import { RiSearchLine } from "react-icons/ri";

export default function SearchBar() {
    return (
        <div>
            <form className={styles.searchForm}>
                <input required/>
                <button type='submit'>
                    <RiSearchLine />
                </button>
            </form>
        </div>
    )
}