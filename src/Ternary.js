import { useState } from "react"

export const Ternary=()=>{
    const[user,setUser]=useState("nothing")
    const[result,setResult]=useState("")
    const[decor,setDecor]=useState({color:'white',backgroundColor:'black'})
    const praba=(tmp)=>{
     setUser(tmp.target.value)
    }
    const sil=()=>{
        (user=='spring')?setDecor({color:'white',backgroundColor:'green'}):
        (user=='summer')?setDecor({color:'white',backgroundColor:'yellow'}):
        (user=='rainy')?setDecor({color:'white',backgroundColor:'blue'}):
        (user=='winter')?setDecor({color:'white',backgroundColor:'skyblue'}):
        setDecor({color:'green',backgroundColor:'orange'})
        
        setResult(user)
        
        
    }
    return(
        <>
        <input type="text" name="season" placeholder="Enter your Favourite season"
         onChange={praba}/>
        <button onClick={sil}>Click</button>
        <p style={decor}>{result}</p>
        </>
    )
}