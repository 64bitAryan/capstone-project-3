import React from 'react'
import {BiTransfer} from 'react-icons/bi'
import {MdOpenInNew} from 'react-icons/md'


const Transactions = () => {
  return (
    <div className='bg-[#151c25] gradient-bg-artworks'>
      <div className='w-4/5 py-10 mx-auto'>
        <h4 className='text-white text-3xl font-bold uppercase text-gradient'>Latest Transactions</h4>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gaps-4 lg:gaps-3 py-2.5'>
                {Array(3).fill().map((nft,i) => (
                    <Transaction key={i} tx={i + 1}/> 
                ))}
            </div>
            <div className='text-center my-5'>
            <button className='shadow-lg shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] rounded-full px-1.5 py-2'>Load More</button>
            </div>
        </div> 
      </div>
  )
}

const Transaction = ({ tx }) => (
    <div className='flex justify-between items-center border border-pink text-gray w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3'>
        <div className='rounded-md shadow-sm shadow-pink-500 p-2 '>
            <BiTransfer />
        </div>

        <div>
            <h4 className='text-sm'>#{tx}Fund Transfered</h4>
            <small className='flex justify-start items-center'>
                <span className='mr-1'>Received By</span>
                <a className='text-pink-500 mr-2' href="#" target="_blank">0x31..038e</a>
                <MdOpenInNew />
            </small>
        </div>

        <p className='text-sm font-medium'>0.32 ETH</p>

    </div>
)


export default Transactions
