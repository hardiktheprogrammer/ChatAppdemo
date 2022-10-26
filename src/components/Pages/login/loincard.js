import React from "react";
import { Collapse } from '@material-ui/core';
import "./login.scss";


const LoginCard = (checked) => {
   

    return (

        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Lum Chat.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                        alias totam numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span>Don't you have an account?</span>
                    <button>Register</button>
                    {/* <Link to="/register">
           
          </Link> */}
                </div>
                <div className="right" >
                    <h1>Login</h1>
                    <form checked >
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button >Login</button>
                    </form>
                </div>
            </div>
        </div>
        </Collapse>
    );

}

export default LoginCard;
