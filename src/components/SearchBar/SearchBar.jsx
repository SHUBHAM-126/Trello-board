import { useEffect, useState } from 'react';
import styles from './SearchBar.module.css'
import { RiSearchLine } from "react-icons/ri";
import SearchTaskCard from './SearchTaskCard';

export default function SearchBar({ taskList, setTaskEditDetails, setIsModalOpen }) {

    const [input, setInput] = useState('')

    const [searchResults, setSearchResults] = useState([])

    const [noResults, setNoResults] = useState(false)

    // FILTER RESULTS
    const filterResults = () => {

        setNoResults(false)

        if (input == "") {
            setNoResults(false)
            setSearchResults([])
            return
        }

        let found = false

        const res = [...taskList].map(item => {
            const filtered = item.items.filter(item => item.taskTitle.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
            if (filtered.length > 0) {
                found = true
            }
            return (
                { title: item.title, items: filtered }
            )
        })

        if (found) {
            setSearchResults(res)
        }
        else {
            setSearchResults([])
            setNoResults(true)
        }
    }

    // HANDLE SEARCH ON FORM SUBMIT

    const handleSearch = (e) => {
        e.preventDefault()
        filterResults()
    }

    useEffect(() => {

        filterResults()

    }, [input])

    return (
        <div className={styles.searchWrapper}>
            <form className={styles.searchForm} onSubmit={handleSearch}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>
                    <RiSearchLine />
                </button>
            </form>

            {searchResults.length > 0 && (
                <div className={styles.searchResults}>
                    {searchResults.map((item) =>
                    (
                        item.items.map(task => (
                            <SearchTaskCard
                                details={{ ...task, listTitle: item.title }}
                                setTaskEditDetails={setTaskEditDetails}
                                setIsModalOpen={setIsModalOpen}
                                key={task.taskId}
                                setInput={setInput}
                            />
                        )
                        ))
                    )}
                </div>
            )}

            {noResults && (
                <div className={styles.searchResults}>
                    <p className={styles.noResults}>No results found.</p>
                </div>
            )}

        </div>
    )
}