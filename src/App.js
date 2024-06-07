import { Route, Routes } from "react-router";
import Crud from "./component/Crud";
import Edit from "./component/Edit";
// import TableDemo from "./component/TableDemo";


function App() {
  return (
    <div className="App">
      {/* <Crud /> */}
      <Edit />
      {/* <TableDemo/> */}
    </div>
  );
}

export default App;
