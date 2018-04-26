import * as React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Dndbox } from "./components/Dndbox";
import { Equation } from "./components/Equation";
import { EquationCreator } from "./components/EquationCreator";
import { withRouter } from 'react-router-dom'
import { AllEquations } from "./components/AllEquations";

/**
 * Routing for urls on the website.
 * It will try to match one of the components.
 * If none match, we redirect to the home page.
 */
export const routes =
    <Layout>
        <Switch>
            <Route path="/home/:id([0-9]*)" component={ withRouter(Home) }/>
            <Route path="/equationcreator" component={ withRouter(EquationCreator) } />
            <Route path="/dndbox" component={ Dndbox }/>
            <Route path="/AllEquations" component={ AllEquations } />
            <Route path="/equations/:id([0-9]+)" component={withRouter(Equation)}/>
            <Redirect to="/home/" />
        </Switch>
    </Layout>;