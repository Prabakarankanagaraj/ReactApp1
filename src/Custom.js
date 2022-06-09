import './Mycss.css'
export const Custom=()=>{

    const doIt={
        borderRadius:'100px' 
    }

    return(
        <>
        <a href="https://www.google.co.in" style={{color:'blue',backgroundColor:'black'}}>
            Google
        </a>
        <img src="pic1.jpg" width="300px" height="300px" style={doIt}/>
        <table>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Marks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Praba</td>
                    <td>472</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Sil</td>
                    <td>477</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Anu</td>
                    <td>455</td>
                </tr>
            </tbody>

        </table>
        </>
    )
}