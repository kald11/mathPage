
import './App.css';
import {Route, Router, Switch} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import React from "react";
import MainPage from "./MainPage";
import AreaPage from "./AreaPage";
import PitagorasPage from "./PitagorasPage";
import QuadraticEquationPage from "./QuadraticEquationPage";


export const history = createHistory();

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route path={"/"}exact={true} component={MainPage}/>
                <Route path={"/pitagoras"}exact={true} component={PitagorasPage}></Route>
                <Route path={"/area"}exact={true} component={AreaPage}></Route>
                <Route path={"/quadratic_equation"} exact={true} component={QuadraticEquationPage}></Route>
            </Switch>
        </Router>
    );
}

export default App;
