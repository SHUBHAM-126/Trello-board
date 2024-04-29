import { useEffect, useState } from 'react';
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

export default function AddCardModal({ isModalOpen, setIsModalOpen, taskList, setTaskList, taskEditDetails, setTaskEditDetails }) {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        selectedList: ""
    })

    const [error, setError] = useState('')

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // VALIDATE FORM DATA
    const validate = () => {
        setError('')

        if (!/^[a-zA-Z\s]+$/.test(formData.title)) {
            setError("Title can only contain alphabets.")
            return false
        }

        if (formData.description.length < 25) {
            setError(`Description should have atleast 25 characters. Currently, it has ${formData.description.length} characters.`)
            return false
        }

        return true
    }

    // HANDLE ADD CARD
    const handleSubmit = (e) => {

        e.preventDefault()

        if (!validate()) {
            return false
        }

        const listIndex = taskList.findIndex(item => item.title == formData.selectedList)

        const newList = [...taskList[listIndex].items]

        const newTaskList = [...taskList]

        // Editing card: Replace same task with new details
        if (taskEditDetails && formData.selectedList == taskEditDetails.listTitle) {
            const taskIndex = newList.findIndex(item => item.taskId == taskEditDetails.taskId)
            newList[taskIndex] = {
                taskTitle: formData.title,
                taskDescription: formData.description,
                taskId: new Date().getTime().toString()
            }
        }
        // Editing card: Remove task from old list and add to new one
        else if (taskEditDetails && formData.selectedList !== taskEditDetails.listTitle) {

            const oldListIndex = taskList.findIndex(item => item.title == taskEditDetails.listTitle)
            const oldList = [...taskList[oldListIndex].items]
            const oldTaskIndex = oldList.findIndex(item => item.taskId == taskEditDetails.taskId)
            oldList.splice(oldTaskIndex, 1)

            newTaskList[oldListIndex] = {
                ...taskList[oldListIndex],
                items: oldList
            }

            newList.push(
                {
                    taskTitle: formData.title,
                    taskDescription: formData.description,
                    taskId: new Date().getTime().toString()
                }
            )

        }
        // Adding new task 
        else {
            newList.push(
                {
                    taskTitle: formData.title,
                    taskDescription: formData.description,
                    taskId: new Date().getTime().toString()
                }
            )
        }

        newTaskList[listIndex] = {
            ...taskList[listIndex],
            items: newList
        }

        setTaskList(newTaskList)

        setTaskEditDetails(null)

        setFormData({ title: '', description: '', selectedList: '' })

        setIsModalOpen(false)

    }

    // SET FORM INPUT DETAILS IF EDITING A TASK
    useEffect(() => {

        if (taskEditDetails) {
            setFormData({
                title: taskEditDetails.taskTitle,
                description: taskEditDetails.taskDescription,
                selectedList: taskEditDetails.listTitle
            })
        }

    }, [taskEditDetails])

    // HANDLE MODAL CLOSE
    const handleClose = () => {
        setTaskEditDetails(null)
        setFormData({ title: '', description: '', selectedList: '' })
        setError('')
        setIsModalOpen(false)
    }

    // HANDLE DELETE TASK
    const handleDelete = () => {

        const listIndex = taskList.findIndex(item => item.title == taskEditDetails.listTitle)
        const newList = [...taskList[listIndex].items]
        const taskIndex = newList.findIndex(item => item.taskId == taskEditDetails.taskId)
        newList.splice(taskIndex, 1)

        const newTaskList = [...taskList]

        newTaskList[listIndex] = {
            ...taskList[listIndex],
            items: newList
        }

        setTaskList(newTaskList)
        setTaskEditDetails(null)
        setFormData({ title: '', description: '', selectedList: '' })
        setIsModalOpen(false)
    }

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={handleClose}
            style={customStyles}
            contentLabel='Add new card modal'
        >

            <h3 className={styles.title}>{taskEditDetails ? 'Edit the task' : 'Add a task'}</h3>

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
                <div className={styles.buttonsWrapper}>
                    <button type='submit' className={styles.submitButton}>{taskEditDetails ? 'Save' : 'Add'}</button>
                    {taskEditDetails && (
                        <button type='button' className={styles.deleteButton} onClick={handleDelete}>Delete</button>
                    )}
                </div>
            </form>

            <button
                className={styles.closeBtn}
                onClick={handleClose}
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