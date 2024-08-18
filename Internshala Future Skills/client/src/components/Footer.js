import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='mt-5 pb-4 pt-4'>
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <h6>Abstract</h6>
                    <ul>
                        <li>Branches</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h6>Resources</h6>
                    <ul>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Release Notes</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h6>Community</h6>
                    <ul>
                        <li>Twitter</li>
                        <li>Linkedin</li>
                        <li>Facebook</li>
                        <li>Dribble</li>
                        <li>Prdcast</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h6>Company</h6>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Legal</li>
                    </ul>
                    <br />
                    <h6>Contact Us</h6>
                    <ul>
                        <li>info@abstract.com</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <p className='mt-5'>
                        @ Copyright 2022 <br />
                        Abstract Studio Design, Inc. <br />
                        All rights reserved
                    </p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer