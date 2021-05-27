import { Switch, Route, Redirect, Link } from 'react-router-dom';


const Router:React.FC = () => {

    return(
        <div>
            <div>
                <Link to="/">HomePage</Link>
                <span> | </span>
                <Link to="/login">Login</Link>
                <span> | </span>
                <Link to="/congress">Congress</Link>


            </div>
            <Switch>
                <Route exact path="/">
                    <h1>HomePage</h1>
                </Route>
                <Route exact path="/login">
                    <h1>Login</h1>
                </Route>
                <Route exact path="/congress">
                    <h1>Congress</h1>
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}
export default Router