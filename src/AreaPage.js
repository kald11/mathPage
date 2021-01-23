import {NavLink} from "react-router-dom";
import NavigateBar from "./NavigateBar";

function AreaPage(){
    const calculateArea =()=>{
        const base =document.getElementById("base").value;
        const height=document.getElementById("height").value;
        const mainDiv=document.getElementById("mainDiv");
        const newDiv=document.createElement("div");
        newDiv.innerHTML="The area is:"+(base*height/2);
        mainDiv.appendChild(newDiv);
    }
    return (
        <div id={"mainDiv"}>
            <h1>Solve the area of triangle</h1>
            <br/>
            <div>Please insert the length of the base and the length of the height </div>
            <br/>
            <input id={"base"} placeholder={"Enter the base here"}/>
            <br/>
            <input id={"height"} placeholder={"Enter the height here"}/>
            <br/>
            <button onClick={calculateArea}>Submit</button>


        </div>
    )
}
export default AreaPage;