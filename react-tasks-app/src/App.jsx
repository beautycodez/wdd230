import TaskList from "./components/TaskList";
import React from "react";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;

// 3.51
