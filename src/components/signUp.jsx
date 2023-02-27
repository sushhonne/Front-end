import { Link } from "react-router-dom";
import axios from "axios"; //manages all router methods
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    let[name,setName]=useState()
    let[number,setNumber]=useState()
    let[email,setEmail]=useState()
    let[password,setPassword]=useState()
    let[confirmPassword,setConfirmPassword]=useState()

    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault();
        let data={name,email,password,confirmPassword,number}
        if(name && email && number && (password === confirmPassword)) {
            axios.post('http://localhost:3000/signUp',data)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
            })
        }else{
            alert('invalid credentials')
        }
    }
    
    return ( 
        <div className="signUp">
            <h1>SignUp</h1>
            <div className="signUp_form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" placeholder="Enter your name" name="name"  value={name} onchange={e=>setName(e.target.value)} />
                    </div>
                    <div className="number">
                    <input type="number" placeholder="Enter your number" name="number"  value={email} onchange={e=>setNumber(e.target.value)} />
                    </div>
                    <div className="email">
                    <input type="email" placeholder="Enter your email" name="email"  value={email} onchange={e=>setEmail(e.target.value)} />
                    </div>
                    <div className="password">
                    <input type="password" placeholder="Enter your password" name="password"  value={password} onchange={e=>setPassword(e.target.value)} />
                    </div>
                    <div className="confirm_password">
                    <input type="password" placeholder="Confirm your password" name="password"  value={confirmPassword} onchange={e=>setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="signUp_button">
                <button>Signup</button>
                    </div>
                    <div className="login_button">
                        <Link to="/" className="btn btn-outline-primary">Login</Link>
                       
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;