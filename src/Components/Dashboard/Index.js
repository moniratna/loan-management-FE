import React from 'react'
import { Route,Routes, Link,Switch, useRouteMatch} from 'react-router-dom';
import DashboardHome from './DashboardHome'
import Loans from '../Loans/Index';

export default function Dashboard() {
    const { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route exact path={`${path}`} component={DashboardHome} />
                <Route path={`${path}/loans`} component={Loans} />
            </Switch>
        </div>
    )
}
