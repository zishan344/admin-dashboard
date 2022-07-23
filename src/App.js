import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Component/Dashboard";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./Component/Admin";
import AllUser from "./Component/AllUser";
import CompanySicreat from "./Component/CompanySicreat";
import Moderator from "./Component/Moderator";
import Test from "./Component/Test";
import TotalUser from "./Component/TotalUser";
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
          <Route path="/test" element={<Test />} />
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
