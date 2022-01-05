import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Colors from "./Colors/Colors";
import Homepage from "./Homepage/Homepage";
import UserDetail from "./UserDetail/UserDetail";
import Users from "./Users/Users";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/products" element={<Colors />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/users/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
