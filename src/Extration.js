import { useState } from "react"

export const Extration=()=>{
    const[user,setUser]=useState("")
    
    const Submit=()=>{
        alert(user+"has clicked")

    }
    const praba=(get)=>{
        setUser(get.target.value)
        console.log(user)
    }
    return(<>
        <input type="text" name={user} placeholder="your name please" onChange={praba}/>
        <button onClick={Submit}>Submit</button>
        </>)
}