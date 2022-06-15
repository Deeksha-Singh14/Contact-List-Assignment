import React from "react";
import {  Navigate } from "react-router-dom";

export default function Login(props) {
  let user =
    localStorage.getItem("email") == null &&
    localStorage.getItem("password") == null ? false:true;
  return <div>{user ? <Navigate to="/list" /> : <Navigate to="/login" />}</div>;
}


