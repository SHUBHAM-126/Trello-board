import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import intialData from './initialData.js'
import SingleColumn from "./components/SingleColumn/SingleColumn.jsx";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function App() {

  const [taskList, setTaskList] = useState([...intialData])

  const handleDragEnd = (results) => {

    const { source, destination } = results;

    //RETURN IF DROPPED OUTSIDE DROPPABLE
    if (!destination) {
      return
    }

    //RETURN IF DROPPED AT SAME PLACE
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return
    }

    //FIND SOURCE AND DESTINATION COLUMN INDEX
    const sourceColumnIndex = taskList.findIndex(item => item.title == source.droppableId)
    const destinationColumnIndex = taskList.findIndex(item => item.title == destination.droppableId)

    const newSourceItems = [...taskList[sourceColumnIndex].items]
    const newDestinationItems = source.droppableId != destination.droppableId ? [...taskList[destinationColumnIndex].items] : newSourceItems

    //REMOVE ITEM FROM SOURCE ARRAY
    const [deletedItem] = newSourceItems.splice(source.index, 1)

    //ADD ITEM IN DESTINATION ARRAY
    newDestinationItems.splice(destination.index, 0, deletedItem)

    //GENERATE NEW TASKLIST WITH ALL UPDATES
    const newList = [...taskList]

    newList[sourceColumnIndex] = {
      ...taskList[sourceColumnIndex],
      items: newSourceItems
    }

    newList[destinationColumnIndex] = {
      ...taskList[destinationColumnIndex],
      items: newDestinationItems
    }

    //UPDATE STATE
    setTaskList(newList)

  }

  return (
    <div>
      <Navbar />
      <div>

        <div className="columns-wrapper">
          <DragDropContext
            onDragEnd={handleDragEnd}
          >

            {taskList.map((item, index) => (
              <div key={item.title}>
                <SingleColumn data={item} />
              </div>
            ))}

          </DragDropContext>
        </div>

      </div>
    </div>
  );
}

export default App;
