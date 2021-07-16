import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SignUp from "./containers/SignUp/SignUp";
import Login from "./containers/Login/Login";
import HomePage from "./containers/HomePage/HomePage";
import { ChakraProvider } from "@chakra-ui/react"
const App = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/signup' exact component={SignUp} />
                    <Route path='/login' exact component={Login} />
                </Switch>
            </BrowserRouter>
        </ChakraProvider>

    )
}
export default App;