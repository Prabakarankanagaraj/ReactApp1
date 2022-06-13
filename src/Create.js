import { useState } from "react"
import { executeCreating } from "./Records"

export const Create=()=>{
    const[mydata,setMydata]=useState({
        "sno":0,
        "name":"",
        "college":""
    })
    const onTrack=(sil)=>{
        const{name,value}=sil.target

        setMydata((remain)=>{
            return{
            ...remain,
            [name]:value
        }

        })
    }
    const verify=()=>{
        alert(JSON.stringify(mydata))
        executeCreating(mydata)
    }

    
    return(
        <>
        <h1>Create component</h1>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12">
                    <input type="text" onChange={onTrack} value={mydata.sno} name="sno" className="form-control" placeholder="ID"/>
                    <input type="text" onChange={onTrack} value={mydata.name} name="name" className="form-control" placeholder="Name"/>
                    <input type="text" onChange={onTrack} value={mydata.college} name="college" className="form-control" placeholder="Issue"/>
                    <div className="row justify-content-around mt-3">
                        <button className="btn btn-outline-primary col-1" onClick={verify}>
                        <i class="bi bi-save2-fill"></i>
                        </button>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}