import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Home from "./Pages/home/Home"
import TopBar from "./components/Topbar/Topbar";
import Login from "./Pages/login/Login";
import Register from "./Pages/Register/Register";
import Single from "./Pages/single/Single";
import Write from "./Pages/Write/Write";

function App() {
    const { user } = useContext(Context);
    return (
        <Router>
            <TopBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/register">{user ? <Home /> : <Register />}</Route>
                <Route path="/login">{user ? <Home /> : <Login />}</Route>
                <Route path="/write">{user ? <Write /> : <Register />}</Route>
                <Route path="/post/:postId">
                    <Single />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
