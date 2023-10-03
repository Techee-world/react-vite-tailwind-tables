import React from "react";

function Table() {
 
  return (
    <div className=" p-1">
      <div class="flex flex-col ">
        <div class="">
          <div class="inline-block w-full py-1   sm:px-6 lg:px-8">
            <div class="overflow-x-auto rounded-t-xl">
              <table class="w-full text-left text-sm font-light">
                <thead class="border-b bg-gray-300 font-medium  dark:border-neutral-500">
                  <tr>
                    {/* <th scope="col" class="px-6 py-4">#</th> */}
                    <th scope="col" class="px-6 py-4">
                      Fax ID
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Case ID
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Fax Status
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Verified
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Main Fax ID
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Fax Data
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Fax Time
                    </th>
                    <th scope="col" class="px-6 py-4">
                      OCR Status
                    </th>
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
  );
}

export default Table;
