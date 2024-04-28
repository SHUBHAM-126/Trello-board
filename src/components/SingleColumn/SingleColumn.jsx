import TaskCard from '../TaskCard/TaskCard'
import styles from './SingleColumn.module.css'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { AiOutlinePlus } from "react-icons/ai";

export default function SingleColumn({ data, setIsModalOpen }) {
    return (
        <div className={styles.column}>
            <h2>{data.title}</h2>
            <Droppable droppableId={data.title}>
                {(provided) => (
                    <div className={styles.tasksWrapper} {...provided.droppableProps} ref={provided.innerRef}>
                        {data.items.length > 0 &&
                            data.items.map((item, index) => (
                                <Draggable draggableId={item.taskId} key={item.taskId} index={index}>
                                    {(provided) => (
                                        <div
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            ref={provided.innerRef}
                                        >
                                            <TaskCard data={item} />
                                        </div>
                                    )}
                                </Draggable>
                            ))
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <button
                className={styles.addCardBtn}
                onClick={() => setIsModalOpen(true)}
            >
                <AiOutlinePlus />
                <span>Add a card</span>
            </button>
        </div>
    )
}