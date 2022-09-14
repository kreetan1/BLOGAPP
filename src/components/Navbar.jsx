import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../firebaseConfig";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container">
    <Link className="navbar-brand" to="/" >KREETAN</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to="/">
        Home{" "}
  </Link>        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/addpost">
       ADDPOST
  </Link> 
        </li>
       
     
      </ul>
      <div>
      {user && (
             <>
           <span className="pe-4 text-white">
               Signed is as {user.displayName || user.email}
             </span>
              <button className="btn btn-primary btn-sm me-3"
             onClick={()=>{signOut(auth)}}
              >Logout</button>
            </>
          )}
      </div>
    </div>
  </div>
</nav>

  );
}