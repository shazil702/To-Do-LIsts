import React from "react";
import ReactDOM from "react-dom/client";
import ToDoList from "./Components/ToDoList";

const AppLayout = () => {
    return(
        <div>
            <ToDoList/>
        </div>
    )
}

const path = ReactDOM.createRoot(document.querySelector(".path"))

path.render(<AppLayout />)