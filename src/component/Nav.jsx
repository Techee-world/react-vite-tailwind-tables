import React, { useState } from 'react'
import { Link  } from 'react-router-dom'

function Nav() {
    const [close, setClose] = useState(false);
    const [menu, setMenu] = useState("hidden");
    function clickHandle() {
      if (menu) {
        setMenu("");
        setClose(!close);
      } else {
        setMenu("hidden");
        setClose(false);
      }
    }
  return (
    <div>
        <nav class="bg-green-200 p-4">

  <div class="md:hidden">
    <button onClick={clickHandle} class="text-white hover:text-gray-200">
        {close?<svg  className='w-10 h-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="none"/>
<path d="M7 17L16.8995 7.10051" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7.00001L16.8995 16.8995" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
</svg>:<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>}
      
    </button>
  </div>


  <div class={`${menu}  md:flex md:space-x-4`}>
  <div className="flex gap-2 hover:bg-green-400 cursor-pointer p-1 md:p-0 rounded">
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/128/9758/9758312.png"
              alt=""
            />
            <h1>NEXT SCIENCE</h1>
          </div>
          <div className="flex gap-2 hover:bg-green-400 cursor-pointer p-1 md:p-0 rounded">
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
              alt=""
            />
            <h1>NEXT SCIENCE</h1>
          </div>
          <div className="flex gap-2 hover:bg-green-400 cursor-pointer p-1 md:p-0 rounded">
            <h1>OCR status : </h1>
            <input
              type="text"
              className="w-40 h-7 bg-gray-400 rounded-full pl-4 py-2 outline-none"
            />
          </div>
          <div className="flex gap-2 hover:bg-green-400 cursor-pointer p-1 md:p-0 rounded">
            <h1 className="text-orange-700">FAX UST</h1>
          </div>
          <div className="flex gap-2 hover:bg-green-400 cursor-pointer p-1 md:p-0 rounded">
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/128/2182/2182980.png"
              alt=""
            />
            <h1>Fax List</h1>
          </div>
          <div className="flex gap-2 hover:bg-green-400 cursor-pointer p-1 md:p-0 rounded">
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/128/1250/1250680.png"
              alt=""
            />
            <h1>Rx Tracker List</h1>
          </div>
          <div className="flex gap-2 hover:bg-green-400 cursor-pointer p-1 md:p-0 rounded">
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/128/5091/5091601.png"
              alt=""
            />
            <h1>Case Details</h1>
          </div>
          <div className="flex gap-2 hover:bg-green-400 cursor-pointer p-1 md:p-0 rounded">
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/128/159/159707.png"
              alt=""
            />
            <Link to="/login">
              {" "}
              <h1>Logout</h1>
            </Link>
          </div>

          <div className="flex gap-2 hover:bg-green-400 cursor-pointer p-1 md:p-0 rounded">
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/128/6205/6205215.png"
              alt=""
            />
          </div>
  </div>
</nav>


    </div>
  )
}

export default Nav