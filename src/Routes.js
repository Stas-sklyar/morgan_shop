import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home"
import TableLamps from "./components/TableLamps/TableLamps"
import FloorLamps from "./components/FloorLamps/FloorLamps"
import ExteriorCeiling from "./components/ExteriorCeiling/ExteriorCeiling"
import InteriorCeiling from "./components/InteriorCeiling/InteriorCeiling"
import Error404 from "./components/Error404/Error404"

const Routes = () => {

    return (
        <Switch>
            <Route path="/home" exact>
                <Home />
            </Route>
            <Route path="/table-lamps" exact>
                <TableLamps />
            </Route>
            <Route path="/floor-lamps" exact>
                <FloorLamps />
            </Route>
            <Route path="/exterior-ceiling" exact>
                <ExteriorCeiling />
            </Route>
            <Route path="/interior-ceiling" exact>
                <InteriorCeiling />
            </Route>
            <Route path="*">
                <Error404 />
            </Route>
        </Switch >
    )
}

export default Routes
