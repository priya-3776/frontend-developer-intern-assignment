import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
export default()=>{
  const t=localStorage.getItem("token");
  return(<BrowserRouter><Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/dashboard" element={t?<Dashboard/>:<Navigate to="/" />}/>
  </Routes></BrowserRouter>);
};