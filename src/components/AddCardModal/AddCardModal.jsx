import { useState } from 'react';
import Modal from 'react-modal';
import styles from './AddCardModal.module.css'
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#252525',
        padding: '20px',
        borderRadius: '12px',
        width: '90%',
        maxWidth: '520px'
    },
};

Modal.setAppElement('#root');

export default function AddCardModal({ isModalOpen, setIsModalOpen, taskList, setTaskList }) {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        selectedList: ""
    })

    const [error, setError] = useState('')

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        setError('')

        if (!/^[a-zA-Z\s]+$/.test(formData.title)) {
            setError("Title can only contain alphabets.")
            return
        }

        if (formData.description.length < 25) {
            setError(`Description should have atleast 25 characters. Currently, it has ${formData.description.length} characters.`)
            return
        }

        const listIndex = taskList.findIndex(item => item.title == formData.selectedList)

        const newList = [...taskList[listIndex].items]

        newList.push(
            {
                taskTitle: formData.title,
                taskDescription: formData.description,
                taskId: new Date().getTime().toString()
            }
        )

        const newTaskList = [...taskList]

        newTaskList[listIndex] = {
            ...taskList[listIndex],
            items: newList
        }

        setTaskList(newTaskList)

        setFormData({ title: '', description: '', selectedList: '' })

        setIsModalOpen(false)

    }

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            style={customStyles}
            contentLabel='Add new card modal'
        >

            <h3 className={styles.title}>Add a task</h3>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    name='title'
                    value={formData.title}
                    placeholder='Title'
                    onChange={handleChange}
                    required
                />
                <textarea
                    name='description'
                    value={formData.description}
                    placeholder='Description'
                    onChange={handleChange}
                    required
                >
                </textarea>
                <select
                    value={formData.selectedList}
                    name='selectedList'
                    onChange={handleChange}
                    required
                >
                    <option value="">Select list</option>
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <button>Submit</button>
            </form>

            <button
                className={styles.closeBtn}
                onClick={() => setIsModalOpen(false)}
            >
                <IoCloseSharp />
            </button>

            {error && (
                <p className={styles.error}>
                    <MdOutlineReportGmailerrorred />
                    {error}
                </p>
            )}

        </Modal>
    )
}