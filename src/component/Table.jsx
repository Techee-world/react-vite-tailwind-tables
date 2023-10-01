import React from 'react'
import { Link } from 'react-router-dom'

function Table() {
  return (
    <div className=' p-1'>
        <div className='flex justify-between bg-sky-800 rounded-t-xl text-white p-2'>
            <div className='flex gap-2'>
                <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/128/9758/9758312.png" alt="" />
                <h1>NEXT SCIENCE</h1>
            </div>
            <div className='flex gap-2'>
                <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/128/64/64572.png" alt="" />
                <h1>NEXT SCIENCE</h1>
            </div>
            <div className='flex gap-2'>
                <h1>OCR status : </h1>
               <input type="text" className='w-40 h-7 bg-gray-400 rounded-full pl-4 py-2 outline-none' />
            </div>
            <div className='flex gap-2'>
                <h1 className='text-orange-700'>FAX UST</h1>
            </div>
            <div className='flex gap-2'>
                <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/128/2182/2182980.png" alt="" />
                <h1>Fax List</h1>
            </div>
            <div className='flex gap-2'>
                <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/128/1250/1250680.png" alt="" />
                <h1>Rx Tracker List</h1>
            </div>
            <div className='flex gap-2'>
                <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/128/5091/5091601.png" alt="" />
                <h1>Case Details</h1>
            </div>
           <div className='flex gap-2'>
                <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/128/159/159707.png" alt="" />
                <Link to='/login'> <h1>Logout</h1></Link> 
            </div>

            <div className='flex gap-2'>
                <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/128/6205/6205215.png" alt="" />
                
            </div>
        </div>
    <div class="flex flex-col ">
  <div class="">
    <div class="inline-block w-full py-1   sm:px-6 lg:px-8">
      <div class="overflow-x-auto rounded-t-xl">
        <table class="w-full text-left text-sm font-light">
          <thead class="border-b bg-gray-300 font-medium dark:border-neutral-500">
            <tr>
              {/* <th scope="col" class="px-6 py-4">#</th> */}
              <th scope="col" class="px-6 py-4">Fax ID</th>
              <th scope="col" class="px-6 py-4">Case ID</th>
              <th scope="col" class="px-6 py-4">Fax Status</th>
              <th scope="col" class="px-6 py-4">Verified</th>
              <th scope="col" class="px-6 py-4">Main Fax ID</th>
              <th scope="col" class="px-6 py-4">Fax Data</th>
              <th scope="col" class="px-6 py-4">Fax Time</th>
              <th scope="col" class="px-6 py-4">OCR Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
              {/* <td class="whitespace-nowrap px-6 py-4 font-medium">1</td> */}
              <td class="whitespace-nowrap px-6 py-4">Data 01</td>
              <td class="whitespace-nowrap px-6 py-4">Data 01</td>
              <td class="whitespace-nowrap px-6 py-4">Data 01</td>
              <td class="whitespace-nowrap px-6 py-4">Data 01</td>
              <td class="whitespace-nowrap px-6 py-4">Data 01</td>
              <td class="whitespace-nowrap px-6 py-4">Data 01</td>
              <td class="whitespace-nowrap px-6 py-4">Data 01</td>
              <td class="whitespace-nowrap px-6 py-4">Data 01</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              {/* <td class="whitespace-nowrap px-6 py-4 font-medium ">2</td> */}
              <td class="whitespace-nowrap px-6 py-4">Data 02</td>
              <td class="whitespace-nowrap px-6 py-4">Data 02</td>
              <td class="whitespace-nowrap px-6 py-4">Data 02</td>
              <td class="whitespace-nowrap px-6 py-4">Data 02</td>
              <td class="whitespace-nowrap px-6 py-4">Data 02</td>
              <td class="whitespace-nowrap px-6 py-4">Data 02</td>
              <td class="whitespace-nowrap px-6 py-4 ">Data 02</td>
              <td class="whitespace-nowrap px-6 py-4 ">Data 02</td>
            </tr>
            <tr class="border-b ">
              {/* <td class="whitespace-nowrap px-6 py-4 font-medium ">3</td> */}
              <td class="whitespace-nowrap px-6 py-4">Data 03</td>
              <td class="whitespace-nowrap px-6 py-4">Data 03</td>
              <td class="whitespace-nowrap px-6 py-4">Data 03</td>
              <td class="whitespace-nowrap px-6 py-4">Data 03</td>
              <td class="whitespace-nowrap px-6 py-4">Data 03</td>
              <td class="whitespace-nowrap px-6 py-4">Data 03</td>
              <td class="whitespace-nowrap px-6 py-4">Data 03</td>
              <td class="whitespace-nowrap px-6 py-4">Data 03</td>
            </tr>
            <tr class="border-b ">
              {/* <td class="whitespace-nowrap px-6 py-4 font-medium ">3</td> */}
              <td class="whitespace-nowrap px-6 py-4">Data 04</td>
              <td class="whitespace-nowrap px-6 py-4">Data 04</td>
              <td class="whitespace-nowrap px-6 py-4">Data 04</td>
              <td class="whitespace-nowrap px-6 py-4">Data 04</td>
              <td class="whitespace-nowrap px-6 py-4">Data 04</td>
              <td class="whitespace-nowrap px-6 py-4">Data 04</td>
              <td class="whitespace-nowrap px-6 py-4">Data 04</td>
              <td class="whitespace-nowrap px-6 py-4">Data 04</td>
            </tr>
            <tr class="border-b ">
              {/* <td class="whitespace-nowrap px-6 py-4 font-medium ">3</td> */}
              <td class="whitespace-nowrap px-6 py-4">Data 05</td>
              <td class="whitespace-nowrap px-6 py-4">Data 05</td>
              <td class="whitespace-nowrap px-6 py-4">Data 05</td>
              <td class="whitespace-nowrap px-6 py-4">Data 05</td>
              <td class="whitespace-nowrap px-6 py-4">Data 05</td>
              <td class="whitespace-nowrap px-6 py-4">Data 05</td>
              <td class="whitespace-nowrap px-6 py-4">Data 05</td>
              <td class="whitespace-nowrap px-6 py-4">Data 05</td>
            </tr>
            <tr class="border-b ">
              {/* <td class="whitespace-nowrap px-6 py-4 font-medium ">3</td> */}
              <td class="whitespace-nowrap px-6 py-4">Data 06</td>
              <td class="whitespace-nowrap px-6 py-4">Data 06</td>
              <td class="whitespace-nowrap px-6 py-4">Data 06</td>
              <td class="whitespace-nowrap px-6 py-4">Data 06</td>
              <td class="whitespace-nowrap px-6 py-4">Data 06</td>
              <td class="whitespace-nowrap px-6 py-4">Data 06</td>
              <td class="whitespace-nowrap px-6 py-4">Data 06</td>
              <td class="whitespace-nowrap px-6 py-4">Data 06</td>
            </tr>
            <tr class="border-b ">
              {/* <td class="whitespace-nowrap px-6 py-4 font-medium ">3</td> */}
              <td class="whitespace-nowrap px-6 py-4">Data 07</td>
              <td class="whitespace-nowrap px-6 py-4">Data 07</td>
              <td class="whitespace-nowrap px-6 py-4">Data 07</td>
              <td class="whitespace-nowrap px-6 py-4">Data 07</td>
              <td class="whitespace-nowrap px-6 py-4">Data 07</td>
              <td class="whitespace-nowrap px-6 py-4">Data 07</td>
              <td class="whitespace-nowrap px-6 py-4">Data 07</td>
              <td class="whitespace-nowrap px-6 py-4">Data 07</td>
            </tr>
            <tr class="border-b ">
              {/* <td class="whitespace-nowrap px-6 py-4 font-medium ">3</td> */}
              <td class="whitespace-nowrap px-6 py-4">Data 08</td>
              <td class="whitespace-nowrap px-6 py-4">Data 08</td>
              <td class="whitespace-nowrap px-6 py-4">Data 08</td>
              <td class="whitespace-nowrap px-6 py-4">Data 08</td>
              <td class="whitespace-nowrap px-6 py-4">Data 08</td>
              <td class="whitespace-nowrap px-6 py-4">Data 08</td>
              <td class="whitespace-nowrap px-6 py-4">Data 08</td>
              <td class="whitespace-nowrap px-6 py-4">Data 08</td>
            </tr>
            <tr class="border-b ">
              {/* <td class="whitespace-nowrap px-6 py-4 font-medium ">3</td> */}
              <td class="whitespace-nowrap px-6 py-4">Data 09</td>
              <td class="whitespace-nowrap px-6 py-4">Data 09</td>
              <td class="whitespace-nowrap px-6 py-4">Data 09</td>
              <td class="whitespace-nowrap px-6 py-4">Data 09</td>
              <td class="whitespace-nowrap px-6 py-4">Data 09</td>
              <td class="whitespace-nowrap px-6 py-4">Data 09</td>
              <td class="whitespace-nowrap px-6 py-4">Data 09</td>
              <td class="whitespace-nowrap px-6 py-4">Data 09</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Table