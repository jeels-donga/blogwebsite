import React from 'react'

const TodaysUpdate = () => {
    return (
        <>
            <h3 className=' tw-my-3'><span className='tw-bg-[#00AAA1] tw-text-white'>Today’s</span> update</h3>
            <div className='tw-grid tw-grid-cols-2 tw-gap-5'>
                <div className=' tw-py-5 tw-bg-[#F2F8F7]'>
                    <div className=''>
                        <h2 className=' tw-text-[#00AAA1] tw-text-center'>14</h2>
                        <p className='tw-text-[15px] tw-text-center'>New posts</p>
                    </div>
                </div>
                <div className=' tw-py-5 tw-bg-[#F2F8F7]'>
                    <div className=''>
                        <h2 className='tw-text-[#00AAA1] tw-text-center'>480</h2>
                        <p className='tw-text-[15px] tw-text-center'>total visitors</p>
                    </div>
                </div>
                <div className='tw-py-5 tw-bg-[#F2F8F7]'>
                    <div className=''>
                        <h2 className='tw-text-[#00AAA1] tw-text-center'>29</h2>
                        <p className='tw-text-[15px] tw-text-center'>New subscribers</p>
                    </div>
                </div>
                <div className=' tw-py-5 tw-bg-[#F2F8F7]'>
                    <div className=''>
                        <h2 className='tw-text-[#00AAA1] tw-text-center'>138</h2>
                        <p className='tw-text-[15px] tw-text-center'>blog read</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TodaysUpdate
