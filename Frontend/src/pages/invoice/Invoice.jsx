import React from 'react'
import "./invoice.css";
import { useNavigate } from "react-router-dom";

function Invoice() {
  const navigate = useNavigate();

  const handledone =()=>{
    navigate("/")
  }
  return (
    <div>
      <div className='invoice-con1'>

        <div className='invoice-con2'>
            <img className='invoice-img' src="./cong.png" alt="" />
            </div>
        
                  <div className="invoice-msg">
                  <p className='invoice-p'>

                      Congratulations on your Booking  🖤🖤

                    <br /> <br />
                    <button className='invoice-btn' onClick={handledone}>
                    Continue
                    </button>
                </p>
                  </div>
                


      </div>

    


    </div>
  )
}

export default Invoice
