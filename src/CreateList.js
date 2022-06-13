import { useEffect, useState } from "react"
import { Create } from "./Create"
import { affect, executeListing } from "./Records"

export const CreateList=()=>{
    const[tempArr,setTempArr]=useState([])
    const[cview,setcview]=useState(false)
    useEffect(()=>{
        //affect()
        const t=executeListing()
        //alert(t.length)
        setTempArr(t)
        //alert(tempArr.length)
    },[])
    return(
        <>
        <div className="container mt-3">
        {(cview)?
        <>
        <Create/>
        <button className="btn btn-outline-info" onClick={()=>{
            setcview(false)
        }}>
              <i class="bi bi-skip-backward-circle-fill"></i>

        </button>
        </>
        :
        <>
        <button className="btn btn-outline-primary" onClick={()=>{
            setcview(true)
        }}>
              <i class="bi bi-newspaper"></i>
        </button>
        <div className="row justify-content-center">
            <table className="table table-bordered text-center table-hover col-lg-8 col-md-10 col-sm-12 shadow">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>college</td>
                </tr>
            </thead>
            <tbody>
                {tempArr.map((ele,ind)=>(
                    <tr>
                        <td>{ele.sno}</td>
                        <td>{ele.name}</td>
                        <td>{ele.college}</td>
                    </tr>
                ))

                }
                
            </tbody>
            </table>

        </div>
            </>

        }
        </div>
        </>
    )
}