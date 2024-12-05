import { Button } from 'primereact/button';
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between pt-4'>
        <p className='ml-4 text-xl font-bold text-white font-Lobster'>BarberShop</p>
        <div>
            <ul className='flex rounded-md justify-between border border-white p-1 w-96 max-sm:hidden'>
                <li className='text-sm rounded-sm bg-white text-black border py-1 px-2'><a href="">Home</a></li>
                <li className='text-sm text-white py-1 px-2 hover:bg-white hover:text-black hover:border duration-300'><a href="">Services</a></li>
                <li className='text-sm text-white py-1 px-2 hover:bg-white hover:text-black hover:border duration-300'><a href="">About us</a></li>
                <li className='text-sm text-white py-1 px-2 hover:bg-white hover:text-black hover:border duration-300'><a href="">News</a></li>
                <li className='text-sm text-white py-1 px-2 hover:bg-white hover:text-black hover:border duration-300'><a href="">Shop</a></li>
            </ul>
        </div>
        <div>
            <Button label='Contact us' className='text-xs text-black bg-white rounded-md p-2 mr-4'/>
        </div>
    </div>
  )
}

export default Navbar;