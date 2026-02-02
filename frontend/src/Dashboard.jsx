import axios from "axios";import {useEffect,useState} from "react";
export default()=>{
  const[t,sT]=useState([]);const api=axios.create({headers:{Authorization:"Bearer "+localStorage.getItem("token")}});
  useEffect(()=>{api.get("http://localhost:5000/api/v1/tasks").then(r=>sT(r.data));},[]);
  return(<><h1>Dashboard</h1>{t.map(x=><div key={x._id}>{x.title}</div>)}
  <button onClick={()=>{localStorage.clear();location.href="/";}}>Logout</button></>);
};