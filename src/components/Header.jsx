import React from 'react'
import timlessLogo from '../assets/timeless.png'

const Header = () => {
  return (
    <div className='w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img className='w-40 cursor-pointer' src={timlessLogo} alt='LOGO'/>
      </div>
      <ul className='md:flex-[0.5] text-white md:flex hidden list-none justify-between items-center flex-initial'>
        <li className='mx-10 cursor-pointer'>Market</li>
        <li className='mx-10 cursor-pointer'>Artist</li>
        <li className='mx-10 cursor-pointer'>Features</li>
        <li className='mx-10 cursor-pointer'>Community</li>
      </ul>
      <button className='shadow-xl shadow-black text-white bg-[#2E8EEE] hover:bg-[#256EB7] md:text-sm p-2 rounded-xl m-1'>Connect Wallet</button>
    </div>
  )
}

export default Header
