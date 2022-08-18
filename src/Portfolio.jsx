
import React   from 'react'; 
import {useState} from 'react'; 
import img1 from  "../src/img/cabin (1).png";
import img2 from  "../src/img/cake.png";
import img3 from  "../src/img/circus.png";
import img4 from  "../src/img/game.png";
import img5 from  "../src/img/safe.png";
import img6 from  "../src/img/submarine.png";


export default function Portfolio() {
const [model, setModel] = useState([
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
]);
const [isModel, setIsModel] = useState(false);
const [imgContainer, setImgContainer] = useState('');
const modelContainer = (img) => {
  setIsModel(true)
  setImgContainer(img)
}
  return ( <>
    <div className='container py-5 '>
      <div className="row gy-4 gx-0">

      {model.map((img, index) => {
        return (
          <div className='col-lg-4 col-md-6 ' key={index}>
            <div className="itme position-relative">
              <img src={img} className='w-100' />
              <div onClick={()=> modelContainer(img)} className='layer w-100 h-100 position-absolute d-flex justify-content-center align-items-center'>
                <i className="fa-solid fa-plus text-white fa-6x"></i>
              </div>
            </div>
          </div>
        )
      })}
      </div>
    </div>



    <div className={`${isModel ? "d-block" : "d-none"} lightbox position-fixed top-0 bottom-0 start-0 end-0 `}>
        <div className=" col-lg-5 col-md-8 col-10 position-fixed top-50 start-50 translate-middle bg-white p-5  position-relative">
          <p className='h1 text-center'>TASTY CAKE</p>
          <div className=' d-flex justify-content-center align-items-center mb-3'>
            <div className='line1 bg-dark'></div>
              <i class="fa-solid fa-star fa-2x px-2"></i>
            <div className='line2 bg-dark'></div>
          </div>

            <div className="lightboxcontainer  d-flex justify-content-center align-items-center ">
                <img className="w-100" src={imgContainer} alt=""/>
                <div className="lightboxitem my-4 p-3 position-absolute top-0 bottom-0  end-0 ">
                    <div className="">
                        <button className='bg-transparent border-0' onClick={() => setIsModel(false)}>
                        <i id="close" className=" fa-solid fa-xmark fa-2xl text-danger"></i>
                        </button>
                    </div>
                </div>
                
            </div>      
            <p className='text-center pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p> 
        </div>
    </div>     

    </>

  )
};