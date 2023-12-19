// Write all the code here
import React from 'react'

const Login = () => {
  return (
    <div className='login-container'>
      <button>LOGIN</button>
      <button>REGISTER</button>
      <p>Sign in with:</p>
      <div>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Google</p>
        <p>Github</p>
      </div>
      <p>or:</p>
      <form>
  <input type="text" placeholder="Email address" />
  <input type="text" placeholder="Password" />
  <div>
    <label>
      <input type="checkbox" />
      Remember me
    </label>
    <p>Forgot password?</p>
  </div>
  <button>SIGN IN</button>
  <p>Not a member? Register</p>
</form>

    </div>
  )
}

export default Login
