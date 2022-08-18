import React from 'react'

export default function Footer() {
  return ( <>
    <footer className='text-white text-center bottom-0 end-0 start-0'>

    <div className='footer-end py-5 px-5'>
    <div className='container footer-end'>
        <div className="row my-3">

        <div className="col-md-4 ">
                <h4>LOCATION</h4>
                <p className='mb-2'>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>

            <div className="col-md-4">
                <h4>AROUND THE WEB</h4>

                <div className="mb-4 icons">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">  
                    <i className="fa-brands fa-facebook-f"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fab fa-twitter"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fa-brands fa-instagram "></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fab fa-github"></i></a>
                </div>
            </div>


            <div className="col-md-4">
                <h4>ABOUT FREELANCER</h4>
                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
            </div>


        </div>
    </div>
    </div>

<div className=' p-3 bg-dark text-center text-white'>Copyright © Your Website 2021</div>
    </footer>
    </>
    )
};
