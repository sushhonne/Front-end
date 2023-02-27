import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let handleSubmit=()=>{

    }
    return ( 
        <div className="login container ">
            <h1>Login Page</h1>
            <div className="login_form w-25 text-center">
                <form action="" onSubmit={handleSubmit}>
                   <div className="form-group px-5">
                   <div className="email my-4">
                        <input type="email" className="form-control" placeholder="Enter the email" name="email" value={email} onchange={e=>setEmail(e.target.value)} />
                    </div>

                    <div className="password my-4">
                        <input type="password" className="form-control" placeholder="Enter the password" name="password" value={password} onchange={e=>setPassword(e.target.value)} />
                    </div>
                    <div className="login_button">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="display-6">Are you a new user ?</p>
                    <div className="signUp_button">
                    <Link to="/signUp" className="btn btn-outline-primary">SignUp</Link>
                    </div>
                   </div>

                </form>
            </div>
        </div>
     );
}
 
export default Login;