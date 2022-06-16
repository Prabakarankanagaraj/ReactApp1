import { useEffect, useState } from "react"
import { executeReading } from "./Records"

export const Read=(zealous)=>{
    const[single,setSingle]=useState({})
    useEffect(()=>{
        const t=executeReading(zealous.which)
        setSingle(t)
    },[])
    return(
        <>
        <div className="container">
            <div className="mt-3 row justify-content-center">
                <div className="card text-light col-lg-8 col-md-10 col-sm-12 shadow bg-secondary">
                    <h1 className="card-title display-3">{single.name}</h1>
                    <div className="card-body">
                        <p className="card-text float-start">{single.sno}</p>
                        <p className="card-text float-end">{single.college}</p>


                    </div>

                </div>

            </div>

        </div>
        </>
    )
}