import { useState } from "react"

export const Just=()=>{
    const [count,setCount]=useState(0)
    const fun=()=>{
        setCount(count+1)
    }
    const funs=()=>{
        setCount(0)
    }
    return(
        <>
        <button className="btn btn-outline-info" onClick={fun} onDoubleClick={funs}>
            <i class="bi bi-arrows-move"></i><span style={{backgroundColor:'red'}}>{count}</span>
        </button>
        </>
    )
}