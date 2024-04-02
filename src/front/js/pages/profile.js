import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import AuthComponent from "../component/auth";


export const Profile = () => {
    return(
        <AuthComponent>
            <h1>WELCOME TO MY PROFILE!</h1>
        </AuthComponent>
        
    );
};