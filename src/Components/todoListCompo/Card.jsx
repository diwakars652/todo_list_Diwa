import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Card = ({ taskObj, index , deleteTask}) => {
    const HandleDelete=()=>{
        deleteTask(index);
    }
  return (
    <div
      className="card--wrapperr"
      style={{
        width: "280px",
        height: "140px",
        boxShadow: " 0px 3px 50px #A5A5A5",
        display: "flex",
        flexDirection: "column",
        // border: "1px solid red",
        position: "relative",
        margin:'10px auto'
      }}
    >
      <div
        className="card-top"
        style={{ backgroundColor: "chartreuse", height: "3px" }}
      >
        .
      </div>
      <div className="task-holder">
        <span
          className="card-holder"
          style={{
            backgroundColor: "#F2FaF1",
            borderRadius: "10px",
            fontSize: "18px",
          }}
        >
          {taskObj.Name}
          <p style={{ fontSize: "12px" }}>{taskObj.priority}</p>
        </span>
        <p style={{ fontSize: "14px" }}>{taskObj.discription}</p>

        <div
          style={{ position: "absolute", right: "20px", bottom: "20px" }}
        ></div>

        <div
          style={{
            display: "flex",
            position: "relative",
            justifyContent: "space-between",
            margin: "10px",
          }}
        >
          <DeleteIcon
            style={{
              position: "absolute",
              color: "#5DC250",
              right: "0",
              cursor: "pointer",
            }}
            onClick={HandleDelete}
          />
          <img
            style={{
              fontSize: "12px",
              borderRadius: "50%",
              left: "0",
              width: "40px",
            }}
            src={taskObj.image}
            alt="img.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
