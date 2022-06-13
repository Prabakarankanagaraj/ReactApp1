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
export const executeListing=()=>{
    loading()
    //alert(records.length)
    return records
}
