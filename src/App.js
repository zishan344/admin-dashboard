import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Component/src/Dashboard";
import Home from "./Component/src/Home";
import Login from "./Component/src/Login";
import Register from "./Component/src/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./Component/src/Admin";
import AllUser from "./Component/src/AllUser";
import CompanySicreat from "./Component/src/CompanySicreat";
import Moderator from "./Component/src/Moderator";
import TotalUser from "./Component/src/TotalUser";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/sickertAdmin" element={<CompanySicreat />} />
          <Route path="/moderator" element={<Moderator />} />
          <Route path="/publicUser" element={<AllUser />} />
          <Route path="/totalUser" element={<TotalUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
