import IndukProps from "./pages/Induk-Props";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";

function App() {
  return ( 
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/IndukProps" element={<IndukProps />} />
    </Routes>
   );
}

export default App;