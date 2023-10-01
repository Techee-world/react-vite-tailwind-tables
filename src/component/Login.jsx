import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div class="bg-gray-100 flex items-center justify-center h-screen">
         <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 class="text-2xl font-semibold mb-6">Login</h1>
        <form>
            <div class="mb-4">
                <label for="email" class="block text-gray-600">Email</label>
                <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-600">Password</label>
                <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
            </div>
            <div class="flex items-center justify-between mb-4">
                <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox text-blue-500"/>
                    <span class="ml-2 text-gray-600">Remember me</span>
                </label>
                <a href="#" class="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
           <Link to='/table'> <p className='text-center'>back</p></Link>
        </form>
    </div>
    </div>
  )
}

export default Login