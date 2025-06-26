import { useState } from "react";
import Parent from "./component/Parent.jsx";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { createContext } from "react";
export let usersData = createContext();

export default function App() {
  let [users, setUsers] = useState([{ name: "raj" }]);

  return (
    <>
      <div className="bg-primary p-5 m-auto w-750 border">
        <h4> App component</h4>
        <usersData.Provider value={{ users, setUsers }}>
          <Parent />
        </usersData.Provider>
      </div>
    </>
  );
}
