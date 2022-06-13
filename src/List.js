import { useEffect, useState } from "react"
import { executeListing } from "./Records"
import {affect} from "./Records"

export const List=()=>{
    const[temArr,setTemArr]=useState([])

    useEffect(()=>{
        //affect()
        setTemArr(executeListing())
    },[])
    return(
        <table className="table table-bordered table-hover text-center col-lg-8 col-md-10 col-sm-12 shadow">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>College</th>
                </tr> 
            </thead>
            <tbody>
                {temArr.map((ele,ind)=>(
                    <tr>
                        <td>{ele.sno}</td>
                        <td>{ele.name}</td>
                        <td>{ele.college}</td>
                    </tr>
                ))

                }

            </tbody>

        </table>
    )
}