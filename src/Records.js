let records=[
    {
        "sno":1,
        "name":"praba",
        "college":"dgct"
    },
    {
        "sno":2,
        "name":"sil",
        "college":"sakthi"
    },
    {
        "sno":3,
        "name":"anu",
        "college":"Muthayamal"
    }
]
const affect=()=>{
    localStorage.setItem("memory",JSON.stringify(records))
}
const loading=()=>{
    const tmp=localStorage.getItem("memory")
    records=JSON.parse(tmp)
    //alert("@ loading "+records.length)
}
export const executeCreating=(obj)=>{
    loading()
    records.push(obj)
    affect()
    
}
export const executeDeleting=(key)=>{
    loading()
    records=records.filter((ele,ind)=>{
        return ele.sno!==key
    })
    affect()
    alert(key+" has been terminated")
}
export const executeUpdating=(obj)=>{
    loading()
    for(var ind=0;ind<records.length;ind++)
    {
        if(records[ind].sno===obj.sno){
        records[ind]=obj
        affect()
        return;
        }      
    }
    alert("Invalid ID")
    }
export const executeReading=(key)=>{
    loading()
    for(var ind=0;ind<records.length;ind++){
        if(records[ind].sno===key)
            return records[ind]
    }
    return{}
}
export const executeListing=()=>{
    loading()
    //alert(records.length)
    return records
}
