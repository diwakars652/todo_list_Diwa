import "./App.css";
import Workingcomponent from "./Components/todoListCompo/Workingcomponent";

function App() {
  return (
    <>
      <div className="containerr">
        <div className="component">
          <div className="heading">
            <h1 className="heading">Project</h1>
          </div>
          <Workingcomponent />
        </div>
      </div>
    </>
  );
}

export default App;
