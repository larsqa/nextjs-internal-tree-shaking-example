import { useEffect } from "react";
import { clientApi } from "../api";

export default function Home() {
  // useEffect(()=>{
  //   const fetchData = async () =>{
  //     const res = clientApi("/hello")
  //   }
  //   fetchData()
  // },[])
  clientApi()
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
