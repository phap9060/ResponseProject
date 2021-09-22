import React, { Fragment, useState, useEffect } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Components/Home/Home'
import Tarifas from './Components/Tarifas/tarifas'
import Contato from './Components/Contato/contato'

const Routes = () => {
    
    return (
        <div>
            <Switch>
                <Route exact path="/">
                <Home/>
                </Route>
                
                <Route exact path="/tarifas">
                    <Tarifas/>
                     
                </Route>
                <Route exact path="/contato">
                    <Contato/>
                   
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
