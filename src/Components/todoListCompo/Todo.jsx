import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import AddIcon from "@mui/icons-material/Add";
import TodoPopup from "../../models/TodoPopup.jsx";
import Card from "./Card.jsx";

const Todo = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  }; //create state it is opposite of the previous modal state

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const saveTask = (taskObj) => {
    const tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
    window.location.reload();
  };

  return (  
    <>
      <div style={{ backgroundColor: "#E9EEF6" }}>
        <h1 className="containers-task-heading">TODO list</h1>

        <Button
          variant="contained"
          className="btn"
          style={{
            background: "#5DC250",
            height: "30px",
            fontSize: "10px",
            textAlign: "center",
          }}
          onClick={() => {
            setModal(true);
          }}
        >
          <AddIcon />
        </Button>
        <hr />
      </div>

      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card taskObj={obj} index={index} deleteTask={deleteTask} />
          ))}
      </div>
      <TodoPopup toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default Todo;
