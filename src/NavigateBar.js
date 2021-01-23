import {NavLink} from "react-router-dom";
import * as React from "react";

class NavigateBar extends React.Component{
    render(){
        return(
            <div>
                <br/>
                <NavLink to={"/pitagoras"}>Solve a Pitagoras formula</NavLink>
                <br/>
                <NavLink to={"/area"}>Solve an area of a triangle</NavLink>
                <br/>
                <NavLink to={"/quadratic_equation"}>Solve an quadratic equation</NavLink>
            </div>
        )
    }
}
export default NavigateBar;