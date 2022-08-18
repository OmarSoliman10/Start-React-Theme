import React from 'react';

export default function About() {
  return (<>
      <div className="ABOUT py-5"> 
          <div className="container ">

            <div className='text-header d-flex justify-content-center align-items-center'>
              <h1 className='fw-bolder fs-1 text-white '>ABOUT</h1>
            </div>
            <div className='text-white d-flex justify-content-center align-items-center'>
              <div className='line1'></div>
                <i class="fa-solid fa-star fa-2x px-2"></i>
              <div className='line2'></div>
            </div>



          <div className='m-auto '>

        <div className="row py-5 ">
        <div className="col-md-3 offset-md-3 ">
          <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-3 ">
          <p className='text-white'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>
      </div>
      </div>



        </div>
      </div>
    </>
  )
}
