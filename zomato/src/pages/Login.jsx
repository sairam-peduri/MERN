import React from 'react'

const Login = () => {
  return (
    <div>
      Login Page
      <form>
        <label name="username">Username :</label>
        <input type="text" id="u"name="user"></input>
        <label name="password">Password :</label>
        <input type="password" id="p"name="pass"></input>
        <input type="submit">submit</input>
      </form>
    </div>
  )
}

export default Login
