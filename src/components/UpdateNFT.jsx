import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import { setGlobalState, useGlobalState } from '../store'

const imgNFT = 'https://cdna.artstation.com/p/assets/images/images/024/634/210/large/ninon-rodriguez-asset.jpg?1583059328'
function UpdateNFT() {
    const [modal] = useGlobalState('updateModal')
    const [price, setPrice] = useState('')

    const handleSubmit = (e) => {
        e.preventdefault()

        if(!price) return
        console.log("Updated!");

        closeModal()
    }

    const closeModal = () => {
        setGlobalState('updateModal','scale-0')
        resetForm()
    }

    const resetForm = () => {
        setPrice('')
    }


  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center
        justify-center bg-black bg-opacity-50 transform
        transition-transform duration-300 ${modal}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#2E8EEE] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>

        <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex justify-between items-center text-gray-400">
                <p className='font-semibold'>Candy NFT</p>
                <button type="button" onClick={() => setGlobalState('updateModal','scale-0')} className="border-0 bg-transparent focus:outline-none">
                    <FaTimes className="text-gray-400" />
            </button>
            </div>

            <div className='flex justify-center items-center rounded-xl mt-5'>
                <div className='shrink-0 h-20 w-20 rounded-xl overflow-hidden'>
                    <img className='h-full w-full object-cover cursor-pointer' src={imgNFT} alt="NFT Image" />
                </div>
            </div>

            <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
            
            </div>
            <div className='flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5'>
                <input className='block w-full text-sm text-slate-500 bg-transparent border-0 focus:outline-none focus:ring-0' type="number" min={0.01} step={0.01} name='price' placeholder='Price (ETH)' required onChange={(e) => setPrice(e.target.value)} value={price} />
            </div>
            <button type='submit' onClick={handleSubmit} className='flex justify-center items-center shadow-lg shadow-black text-white p-2 mt-5 bg-[#2E8EEE] hover:bg-[#256EB7] rounded-full px-1.5 py-2'>Update NFT</button>
        </form>
        </div>
    </div>
  )
}

export default UpdateNFT
