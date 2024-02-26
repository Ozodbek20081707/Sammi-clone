import React from 'react'
import { DiamondIcon, Link } from 'lucide-react'

function MockExam() {
  return (
    <div className='ml-[550px]'>
      <div className='justify-around flex ml-[-500px]'>
        <h1 className='text-[2rem]'>Back</h1>
        <div className='flex '>
        <h1 className='text-[2rem]'> 100</h1>
        <DiamondIcon className='ml-[20px] mt-[12px]'/>
        </div>

      </div>
        <div className='justify-center'>
            <h1 className='text-4xl font-bold text-gray-900 font-[protest] mt-[100px] ml-[100px]'>Mock Exam</h1>
            <p className='text-[24px] ml-[-120px]'>Please select one of the these below to continue the writing test</p>
        </div>
        <div id='test block' className='mt-14'>
        <div className='block'>
            <button className=' justify-between flex bg-[#F4F2FF] w-[400px] h-[77px] rounded-[10px] mt-7'>
              <h1 className='ml-[50px] mt-5'>academic text</h1> 
              <div className='flex'>
              <DiamondIcon className='mt-[30px] ml-[0px] w-[50px]' />
              <button className='mt-5 text-[24px]  ml-[-15px] w-[50px] border-gray-500 '>-1</button>
              </div>
          </button>
          </div> 
          <div className='block'>
            <button className=' justify-between flex bg-[#F4F2FF] w-[400px] h-[77px] rounded-[10px] mt-7'>
              <h1 className='ml-[50px] mt-5'>General test</h1> 
              <div className='flex'>
              <DiamondIcon className='mt-[30px] ml-[0px] w-[50px]' />
              <button className='mt-5 text-[24px]  ml-[-15px] w-[50px] border-gray-500 '>-1</button>
              </div>
          </button>
          </div> 
          <div className='block'>
            <button className=' justify-between flex bg-[#F4F2FF] w-[400px] h-[77px] rounded-[10px] mt-7'>
              <h1 className='ml-[50px] mt-5'>academic text 1</h1> 
              <div className='flex'>
              <DiamondIcon className='mt-[30px] ml-[0px] w-[50px]' />
              <button className='mt-5 text-[24px]  ml-[-15px] w-[50px] border-gray-500 '>-1</button>
              </div>
          </button>
          </div> 
          <div className='block'>
            <button className=' justify-between flex bg-[#F4F2FF] w-[400px] h-[77px] rounded-[10px] mt-7'>
              <h1 className='ml-[50px] mt-5'>General test 1</h1> 
              <div className='flex'>
              <DiamondIcon className='mt-[30px] ml-[0px] w-[50px]' />
              <button className='mt-5 text-[24px]  ml-[-15px] w-[50px] border-gray-500 '>-1</button>
              </div>
          </button>
          </div> 
          <div className='block'>
            <button className=' justify-between flex bg-[#F4F2FF] w-[400px] h-[77px] rounded-[10px] mt-7'>
              <h1 className='ml-[50px] mt-5'>task 2 essay</h1> 
              <div className='flex'>
              <DiamondIcon className='mt-[30px] ml-[0px] w-[50px]' />
              <button className='mt-5 text-[24px] ml-[-15px] w-[50px] border-gray-500 '>-1</button>
              </div>
          </button>
          </div> 
        </div>
    </div>
  )
}

export default MockExam