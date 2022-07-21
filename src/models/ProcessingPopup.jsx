import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ProcessingPopup = ({ modal, toggle, save, }) => {
  const [todos, settodos] = useState("");
  const [Navigation, setNavigation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "selectPriority") {
      settodos(value);
    } else if (name === "image") {
      setNavigation(value);
    }
  };

  const handleSave = () => {
    let taskObj = {};
    taskObj["todos"] = todos;
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Is Processing</ModalHeader>
      <ModalBody>
        <form className="form-group">
          <div className="form-group">
            <label htmlFor="">Todo's</label>
            <select
              name="selecttodo's"
              id=""
              className="form-control mb-2"
              value={todos}
              onChange={handleChange}
            >
              <option value=""></option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Navigation</label>
            <select
              name="selectNavigate"
              id=""
              className="form-control mb-2"
              value={Navigation}
              onChange={handleChange}
            >
              <option value="Todo List">Todo List</option>
              <option value="higIn Processing">In Processing</option>
              <option value="Completed">Completed</option>
            </select>
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

export default ProcessingPopup;
