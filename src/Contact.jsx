import React from 'react'

export default function Contact() {
  return (<div>    
      <div className="container my-5">
          <div className='text-header d-flex justify-content-center align-items-center '>
           <h1 className='fw-bolder fs-1  '>CONTACT ME</h1>
          </div>

          <div className=' d-flex justify-content-center align-items-center mb-3'>
            <div className='line1 bg-dark'></div>
              <i class="fa-solid fa-star fa-2x px-2"></i>
            <div className='line2 bg-dark'></div>
          </div>

        <div className="row justify-content-center align-items-center py-5 px-5">

          <div className="col-md-7 py-1">
              <div class="mb-3 ">
                <input type="email" class="form-control p-4" id="exampleFormControlInput1" placeholder="Name" required="required"/>
              </div>
            </div>

            <div className="col-md-7 py-1">
              <div class="mb-3 ">
                <input type="email" class="form-control p-4" id="exampleFormControlInput1" placeholder="Email Address" required="required"/>
              </div>
            </div>

            <div className="col-md-7 py-1">
              <div class="mb-3 ">
                <input type="email" class="form-control p-4" id="exampleFormControlInput1" placeholder="Phone Number" required="required"/>
              </div>
            </div>

            <div className="col-md-7 py-1">
              <div class="mb-3 ">
              <textarea class="form-control" rows="3"placeholder="Message" required="required"></textarea>
              </div>
            </div>

            <div className="col-md-7 py-1">
                <button type="button" class="btn btn-success btn-lg py-2 px-4">Send</button>
              </div>
        </div>


      </div>
    </div>
  )
}
