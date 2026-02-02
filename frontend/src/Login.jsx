import axios from "axios";import {useState} from "react";import {useNavigate} from "react-router-dom";
export default()=>{
  const[e,sE]=useState(""),[p,sP]=useState("");const n=useNavigate();
  const l=async()=>{const r=await axios.post("http://localhost:5000/api/v1/auth/login",{email:e,password:p});
  localStorage.setItem("token",r.data.token);n("/dashboard");};
  return(<><input onChange={e=>sE(e.target.value)} placeholder="email"/>
  <input type="password" onChange={e=>sP(e.target.value)} placeholder="password"/>
  <button onClick={l}>Login</button></>);
};