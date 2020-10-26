import React from "react";
import Navigate from "./Navigate";
import Navbar from "./Navbar";
import { Switch,Route } from "react-router-dom";
import SignUp from "./SignUp"
import SignIn from "./SignIn";
import "./App.css";
const App = () => {
  return (
    <>
    <Navbar />
      <div className="main_section my-5">
        <Navigate />
        <Switch>
              <Route exact path="/" component={SignUp} />
              <Route exact path="/register" component={SignIn}/>
        </Switch>
      </div>
    </>
  );
};
export default App;
