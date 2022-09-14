import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };
  return (



    <>
    {/* <div classname="container">
    <div classname="row justify-content-center mt-5">
      <div classname="col-lg-4 col-md-6 col-sm-6">
        <div classname="card shadow">
          <div classname="card-title text-center border-bottom">
            <h2 classname="p-3">Login</h2>
          </div>
          <div classname="card-body">
            <div className="form">
              <div classname="mb-4">
                <label for="username" classname="form-label">Username/Email</label>
                <input
           type="email"
           classnameName="form-control"
           placeholder="Enter your email"
           onChange={(e) => {
             setEmail(e.target.value);
           }}
         />              </div>
              <div classnamename="mb-4">
                <label for="password" classnamename="form-label">Password</label>
                <input
        type="password"
        classnamenameName="form-control"
          placeholder="Password"
         onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
              </div>
            
              <div classnamename="d-grid">
                <button type="submit" classnamename="btn text-light main-bg " onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
 <div className="login-page bg-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h3 className="mb-3">Login Now</h3>
        <div className="bg-white shadow rounded">
          <div className="row">
            <div className="col-md-7 pe-0">
              <div className="form-left h-100 py-5 px-5">
                <div  className="row g-4">
                  <div className="col-12">
                    <label>Email<span className="text-danger">*</span></label>
                    <div className="input-group ">
                      <div className="input-group-text"><i className="bi bi-person-fill" /></div>
                      <input
           type="email"
           classnameName="form-control inp"
           placeholder="Enter your email"
           onChange={(e) => {
             setEmail(e.target.value);
           }}
         />                           </div>
                  </div>
                  <div className="col-12">
                    <label>Password<span className="text-danger">*</span></label>
                    <div className="input-group">
                      <div className="input-group-text"><i className="bi bi-lock-fill" /></div>
                      <input
        type="password"
        classnamenameName="form-control"
          placeholder="Password"
         onChange={(e) => {
            setPassword(e.target.value);
          }}
        />                    </div>
                  </div>
           
                 
                  <div className="col-12 d-flex">
                    <button type="submit" className="btn btn-primary px-4  mt-4 mx-auto center-any" onClick={handleLogin}>login</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 ps-0 d-none d-md-block">
              <div className="form-right h-100 bg-primary text-white text-center pt-5">
                <i className="bi bi-bootstrap" />
                <h2 className="fs-1">Welcome Back!!!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
  );
}