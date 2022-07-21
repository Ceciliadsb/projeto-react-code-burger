import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Containers/Home'

import Users from './Containers/Users'

function MyRouters() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route  path="/Usuarios" element={<Users/>} />
            </Routes>



        </Router>

    )


}
export default MyRouters