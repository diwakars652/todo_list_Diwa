import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const TodoPopup = ({ modal, toggle, save }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [priority, setpriority] = useState("");
  const [image, setimage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskTitle(value);
    } else if (name === "discriptionDetails") {
      setDiscription(value);
    } else if (name === "selectPriority") {
      setpriority(value);
    } else if (name === "image") {
      setimage(value);
    }
  };

  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = taskTitle;
    taskObj["discription"] = discription;
    taskObj["priority"] = priority;
    taskObj["image"] = image;
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Todo's</ModalHeader>
      <ModalBody>
        <form className="form-group">
          <div className="form-group">
            <label htmlFor="">Task Title</label>
            <input
              type="text"
              className="form-control mb-3"
              value={taskTitle}
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Task Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={discription}
              onChange={handleChange}
              name="discriptionDetails"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="">Priority</label>
            <select
              name="selectPriority"
              id=""
              className="form-control mb-2"
              value ={priority}
              onChange={handleChange}
            >
              <option value="average">Average</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Image</label>
            <input
              className="form-control mb-2" 
              type="file"
              name="image"
              value={image}
              onChange={handleChange}
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <span style={{ display: "flex" }}>
          <Button
            color="primary"
            style={{ width: "200px", marginRight: "20px" }}
            onClick={handleSave}
          >
            Submit
          </Button>{" "}
          <Button
            color="secondary"
            style={{ width: "200px", marginRight: "20px" }}
            onClick={toggle}
          >
            Cancel
          </Button>
        </span>
      </ModalFooter>
    </Modal>
  );
};

export default TodoPopup;
