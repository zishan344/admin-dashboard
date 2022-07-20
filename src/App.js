import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Component/src/Dashboard";
import Home from "./Component/src/Home";
import Login from "./Component/src/Login";
import Register from "./Component/src/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
