import { useEffect, useState } from "react"
import { Create } from "./Create"
import { Read } from "./Read"
import { affect, executeListing,executeDeleting } from "./Records"
import { Update } from "./Update"

export const CreateList=()=>{
    const[tempArr,setTempArr]=useState([])
    const[cview,setcview]=useState(false)
    const[rview,setRview]=useState(false)
    const[uview,setUview]=useState(false)

    const[specific,setSpecific]=useState(0)
    
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
        (rview)?
        <>
        <Read which={specific}/>
            <button className="btn btn-outline-secondary" onClick={()=>{
                setRview(false)
                window.location.assign("/")
            }}>
                    <i class="bi bi-skip-backward-circle-fill"></i>
            </button>
        </>
        :
        (uview)?
        <>
          <Update particular={specific}/>  
          <button className="btn btn-outline-primary" onClick={()=>{
            setUview(false)
            window.location.assign('/')
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
                        <td>
                        <button className="btn btn-outline-warning col-4 me-2" onClick={()=>{
                                        setRview(true)
                                        setSpecific(ele.sno)
                                    }}>
                                        <i class="bi bi-book-half"></i>
                                    </button>
                      
                        <button className="btn btn-outline-warning col-4 me-2" onClick={()=>{
                                        setUview(true)
                                        setSpecific(ele.sno)
                                    }}>
                                        <i class="bi bi-upload"></i>
                                    </button>
                                    <button className="btn btn-outline-danger col-2" onClick={()=>{
                                        executeDeleting(ele.sno)
                                        window.location.assign("/")
                                    }}>
                                        <i class="bi bi-person-x-fill"></i>
                                    </button>
                        </td>
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