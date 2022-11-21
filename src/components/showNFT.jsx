import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import { setGlobalState, useGlobalState } from '../store'

const imgNFT = 'https://cdna.artstation.com/p/assets/images/images/024/634/210/large/ninon-rodriguez-asset.jpg?1583059328'
function CreateNFT() {
    const [modal] = useGlobalState('modal')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [imgBase64, setImgBase64] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title || !price || !description) return
        setGlobalState('modal', 'scale-0')
        console.log("Minted")
    }

    const closeModal = () => {
        setGlobalState('modal', 'scale-0')
        resetForm()
    }

    const resetForm = () => {
        setFileUrl('')
        setImgBase64(null)
        setTitle('')
        setPrice('')
        setDescription('')
    }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center
        justify-center bg-black bg-opacity-50 transform
        transition-transform duration-300 ${modal}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>

        <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex justify-between items-center text-gray-400">
                <p className='font-semibold'>Add NFT</p>
                <button type="button" onClick={closeModal} className="border-0 bg-transparent focus:outline-none">
                    <FaTimes className="text-gray-400" />
            </button>
            </div>

            <div className='flex justify-center items-center rounded-xl mt-5'>
                <div className='shrink-0 h-20 w-20 rounded-xl overflow-hidden'>
                    <img className='h-full w-full object-cover cursor-pointer' src={imgBase64 || imgNFT} alt="NFT Image" />
                </div>
            </div>

            <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                <label className='block'>
                    <span className='sr-only'>Choose Profile Photo</span>
                    <input className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-[#1d2631] focus:outline-none cursor-pointer focus:ring-0' type="file" accept='image/png, image/gif, image/jpeg, image/jpg, image/webp' required />
                </label>
            </div>

            <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                <input className='block w-full text-sm text-slate-500 bg-transparent border-0 focus:outline-none focus:ring-0' type="text" required placeholder='Title' name='title' onChange={(e) => setTitle(e.target.value)} value = {title} />
            </div>

            <div className='flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5'>
                <input className='block w-full text-sm text-slate-500 bg-transparent border-0 focus:outline-none focus:ring-0' type="number" min={0.01} step={0.01} name='price' placeholder='Price (ETH)' required onChange={(e) => setPrice(e.target.value)} value={price} />
            </div>

            <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                <textarea className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer resize-none focus:ring-0 bg-transparent border-0 h-20' type="text" required placeholder='Description' name='description' onChange={(e) => setDescription(e.target.value)} value={description} ></textarea>
            </div>
            <button className='flex justify-center items-center shadow-lg shadow-black text-white p-2 mt-5 bg-[#e32970] hover:bg-[#bd255f] rounded-full px-1.5 py-2'>Mint the NFT</button>
        </form>
        </div>
    </div>
  )
}

export default showNFT
