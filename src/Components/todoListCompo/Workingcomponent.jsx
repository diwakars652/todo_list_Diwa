import React from "react";
import TODO from "./Todo";
import Inprocessing from "./Inprocessing";

const Workingcomponent = () => {
  return (
    <>
      <div className="data_container">
        <div id="first" className="containers-task">
          <TODO />
        </div>
        <div id="second" className="containers-task">
          <Inprocessing/>
        </div>
        <div id="second" className="containers-task">
          <h1 className="containers-task-heading">Completed</h1>
        </div>
      </div>
    </>
  );
};

export default Workingcomponent;
