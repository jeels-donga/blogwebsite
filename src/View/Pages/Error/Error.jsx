import React from 'react'

const Error = () => {
    return (
        <div className='container'>
            <div className='my-5 pb-4'>
                <h1 className='text-center sm:tw-text-[200px] tw-text-[163px] tw-text-[#00AAA1] tw-font-bold'>404</h1>
                <h5 className='text-center'>the page you are looking for does not exist!</h5>
                <div className='tw-flex tw-justify-center tw-my-10'>
                    <h4 className='tw-text-[#00AAA1] tw-font-semibold'><span className='tw-text-[30px] tw-mx-2'>&#8592;</span>Back to homepage</h4>
                </div>
            </div>
        </div>
    )
}

export default Error
