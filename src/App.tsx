import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
