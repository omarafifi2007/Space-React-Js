import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Crew from "./Pages/Crew";
import Destination from "./Pages/Destination";

function App() {
  return (
    <>
    <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Destination" element={<Destination />}/>
      <Route path="/Crew" element={<Crew />}/>
    </Routes>
    </>
  );
}
export default App;
