import React from 'react';
import {Link, Outlet} from "react-router-dom";
import About from "./about";

function Layout() {
  const [status , setStatus] = React.useState('dark')
  return (
    <div className={status === "dark" ? 'theme-dark container-fluid container-xxl vh-100 overflow-auto' : 'theme-light container-fluid container-xxl vh-100 overflow-auto'}>
        <div className="col-12 d-flex flex-wrap ">
          <h1 className="m-0 col-12 text-center p-2 bg-black bg-opacity-10">
            hello test Router and DarkMode
          </h1>

          <div className="col-12">
            <button
              onClick={() => status === "dark" ? setStatus('light') : setStatus("dark")}
              className="btn btn-light">
              {
                status === 'dark' ? 'on' : 'off'
               }
            </button>
          </div>
          <div className="col-12 d-flex flex-wrap">
            <Link to="/about" className="btn btn-danger">about</Link>
            <Link to="/user" className="btn btn-secondary">user</Link>
          </div>
          <Outlet/>
        </div>
    </div>
  );
}

export default Layout;
