import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
 <header>
    <div className="container">
        <div className="row">
            <div className="col-6">
                <div className='h-left-part'>
                  <NavLink className="text-decoration-none navlink-class" to={""}>
                  <span><b>Abstract</b> | Help Center</span>
                    </NavLink>  
                </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
                <button className='head-button'>Submit a request</button>
            </div>
        </div>
    </div>
 </header>
    </>
  )
}

export default Header