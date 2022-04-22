import React from "react";
import Users from "./components/Users.component";

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <h1 className="text-3xl font-bold underline text-black dark:text-slate-50">
        Hello world!
      </h1>
      <Users />
    </div>
  );
}

export default App;
