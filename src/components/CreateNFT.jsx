import React from 'react'
import {FaTimes} from 'react-icons/fa'

const imgNFT = 'https://cdna.artstation.com/p/assets/images/images/024/634/210/large/ninon-rodriguez-asset.jpg?1583059328'
function CreateNFT() {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black-opacity-50 transform transition-transform duration-300 scale-100'>
        <div className='bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>CreateNFT

        <form className='flex flex-col'>
            <div className='flex justify-between items-center text-gray-400'>
                <p className='font-semibold'>Add NFT</p>
                <button type='button' className='border-0 bg-transparent focus:outline-none'>
                    <FaTimes/>
                </button>
            </div>

            <div className='flex justify-center items-center rounded-xl mt-5'>
                <div className='shrink-0 h-20 w-20 rounded-xl overflow-hidden'>
                    <img className='h-full w-full object-cover cursor-pointer' src={imgNFT} alt="NFT Image" />
                </div>
            </div>

            <div>
                <label>
                    <span>Choose Profile Photo</span>
                    <input type="file" accept='image/png, image/gif, image/jpeg, image/jpg, image/webp' required />
                </label>
            </div>
        </form>
        </div>
    </div>
  )
}

export default CreateNFT
