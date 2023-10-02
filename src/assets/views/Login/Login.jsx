import React from 'react'
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
        <h1>Login</h1> 
        <button>Home</button>
        <button><Link to={`/Home`}>HOME</Link></button>
        </div>
  )
}
