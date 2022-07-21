import React, { useState} from "react";
import Button from "react-bootstrap/Button";
import AddIcon from "@mui/icons-material/Add";
import ProcessingPopup from "../../models/ProcessingPopup.jsx";
import Card from "./Card.jsx";

const Inprocessing = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  }; //create state it is opposite of the previous modal state

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    setTaskList(tempList);
    window.location.reload();
  };

  const saveTask = (taskObj) => {
    const tempList = taskList;
    tempList.push(taskObj);
    setTaskList(tempList);
    setModal(false);
    // window.location.reload();
  };

const title = (taskObj)=>{
    const tempList = taskList;
    tempList.push(taskObj.Name);
}
  return (
    <>
      <div style={{ backgroundColor: "#E9EEF6" }}>
        <h1 className="containers-task-heading">In processing</h1>

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
      <ProcessingPopup toggle={toggle} modal={modal} save={saveTask} title = {title}/>
    </>
  );
};

export default Inprocessing;
