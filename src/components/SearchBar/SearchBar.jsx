import { useEffect, useState } from 'react';
import styles from './SearchBar.module.css'
import { RiSearchLine } from "react-icons/ri";
import SearchTaskCard from './SearchTaskCard';
import { AiOutlineClose } from "react-icons/ai";

export default function SearchBar({ taskList, setTaskEditDetails, setIsModalOpen, setShowMobSearch }) {

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

    // CHECK IF MOBILE
    const [isMobile, setIsMobile] = useState(window?.innerWidth < 768)
    useEffect(() => {

        const handleResize = () => setIsMobile(window?.innerWidth < 768)

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [])

    return (
        <div className={styles.searchWrapper}>
            <form className={styles.searchForm} onSubmit={handleSearch}>
                <input
                    value={input}
                    placeholder='Search...'
                    onChange={(e) => setInput(e.target.value)}
                />
                {!isMobile && (
                    <button type='submit'>
                        <RiSearchLine />
                    </button>
                )}
                {isMobile && (
                    <button type='button'
                        onClick={() => {
                            setShowMobSearch(false)
                            setInput('')
                        }}
                    >
                        <AiOutlineClose />
                    </button>
                )}
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
                                setShowMobSearch={setShowMobSearch}
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