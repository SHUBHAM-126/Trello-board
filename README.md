# Trello Board

Live website link: https://trello-board-omega.vercel.app/

## About 
- Developed a mobile-optimized React app akin to Trello, enabling users to seamlessly manage tasks across three columns: To Do, Doing, and Done.
- Implemented intuitive drag-and-drop functionality for task management, allowing easy reordering within and between columns for enhanced workflow efficiency.
- Incorporated a search feature facilitating quick task retrieval, empowering users to efficiently locate and manage their tasks within the application.
- Tasks persist on reload, stored in localStorage for uninterrupted user experience.

### Technologies used
- React
- react-beautiful-dnd
- Notistack

## Code Design Approach
- **Architecture Overview:** This app follows a component-based architecture, where each component is responsible for a specific UI element or feature. I've structured the app into reusable components to promote code reusability and maintainability.

- **Component Structure:** The app is structured into several main components:
  - Navbar: Represents the navbar of the app.
  - SingleColumn: Represents a column of cards on the board.
  - TaskCard: Represents a task or item within a list.
  - Sidebar: Represents sidebar of the app.
  - TitleBar: Contains title and other related components. 

  Each component is further divided into smaller sub-components as needed.

- **State Management:** I've used React's built-in 'useState' hook for handling component-level state and passed down the state as props to child components wherever required.

- **Styling:** Styling is achieved using CSS modules, which allows us to encapsulate styles within each component.

- **Folder Structure:** The project is organized into the following main directories:
  - src/components: Contains React components.
  - src/assets: Contains all the assets.

- **Deployment:** The app is deployed using Vercel for hosting and continuous deployment.

## Choices used to build the App
-  **React Framework:** React was chosen as the primary framework due to its flexibility, component-based architecture, and robust ecosystem of libraries and tools.
-  **Drag and Drop Functionality:** To implement drag and drop functionality similar to Trello boards, the [_react-beautiful-dnd_](https://www.npmjs.com/package/react-beautiful-dnd) library was selected. This library provides a seamless and customizable solution for draggable components.
-  **Notifications:** For handling notifications such as adding, editing, and deleting tasks, the [_Notistack_](https://www.npmjs.com/package/notistack) library was integrated. Notistack simplifies the process of displaying notifications in React applications, enhancing the user experience with informative feedback.

## Screenshots
### Desktop screen
![image](https://github.com/SHUBHAM-126/Trello-board/assets/73948769/6381a23e-096f-4541-86c0-5771f96de1ec)

### Search screen
![image](https://github.com/SHUBHAM-126/Trello-board/assets/73948769/873a08bb-b4ff-4506-a256-993d56aa29f1)

### Add task popup
![image](https://github.com/SHUBHAM-126/Trello-board/assets/73948769/e6457516-325d-470e-b883-77126d2321b9)

### Mobile screen
![image](https://github.com/SHUBHAM-126/Trello-board/assets/73948769/48813e20-8064-4655-80e3-ed45b3d03ae2)
