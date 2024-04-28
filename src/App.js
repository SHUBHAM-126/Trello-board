import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {

  const [list, setList] = useState(
    [
      {
        title: "To Do",
        items: [

        ]
      },
      {
        title: "Doing",
        items: [

        ]
      },
      {
        title: "Done",
        items: [

        ]
      }
    ]
  )

  return (
    <div>
      <Navbar />
      <div>

        {/* Main Content */}
        <div> 

        </div>

      </div>
    </div>
  );
}

export default App;
