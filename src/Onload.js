import { useEffect, useState } from "react"
import { Values } from "./Values"
export const Onload=()=>{
    const[Records,setRecords]=useState([])
    useEffect(()=>{
        setRecords(Values)
    },[])
return(
    <table className="table table-bordered col-lg-8 col-md-10 col-sm-12 shadow">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Issue</th>
            </tr>
        </thead>
        <tbody>
           {Records.map((ele,index)=>(
               <tr>
                   <td>{ele.id}</td>
                   <td>{ele.name}</td>
                   <td>{ele.issue}</td>
               </tr>
           ))} 
        </tbody>
    </table>
)
}