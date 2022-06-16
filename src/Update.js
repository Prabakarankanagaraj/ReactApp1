import { useEffect, useState } from "react"
import { executeReading,executeUpdating } from "./Records"

export const Update=(praba)=>{
    const[one,setOne]=useState({})

    useEffect(()=>{
        setOne(executeReading(praba.particular))
    },[])

    const onTrack=(sil)=>{
        const{name,value}=sil.target
        setOne((remain)=>{
            return{
                ...remain,

                [name]:value
            }
        })
    }
    const change=()=>{
        executeUpdating(one)
        alert(one.sno +"has updated")
    }
    return(
        <>
        <h1>Update Component</h1>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12">
                    <input type="text" onChange={onTrack} value={one.sno} readOnly="true" name="sno" className="form-control" placeholder="ID"/>
                    <input type="text" onChange={onTrack} value={one.name} name="name" className="form-control" placeholder="Name"/>
                    <input type="text" onChange={onTrack} value={one.college} name="college" className="form-control" placeholder="Issue"/>
                    <div className="row justify-content-around mt-3">
                        <button className="btn btn-outline-primary col-1" onClick={change}>
                        <i class="bi bi-save2-fill"></i>
                        </button>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}