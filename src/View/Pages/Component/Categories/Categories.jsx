import React from 'react'

const Categories = () => {
    return (
        <div className='tw-my-10'>
            <h3 className='tw-mb-7' ><span className='tw-bg-[#00AAA1] tw-text-white'>Categories</span> </h3>
            <div>
                <ul className='tw-flex tw-justify-between tw-py-3 tw-border-b '>
                    <li className='tw-text-[15px]'>lifestyle</li>
                    <li className='tw-text-[15px]'>09</li>
                </ul>
                <ul className='tw-flex tw-justify-between tw-py-3 tw-border-b '>
                    <li className='tw-text-[15px]'>travel</li>
                    <li className='tw-text-[15px]'>05</li>
                </ul>
                <ul className='tw-flex tw-justify-between tw-py-3 tw-border-b '>
                    <li className='tw-text-[15px]'>food</li>
                    <li className='tw-text-[15px]'>09</li>
                </ul>
                <ul className='tw-flex tw-justify-between tw-py-3 tw-border-b '>
                    <li className='tw-text-[15px]'>healthcare</li>
                    <li className='tw-text-[15px]'>10</li>
                </ul>
                <ul className='tw-flex tw-justify-between tw-py-3 tw-border-b '>
                    <li className='tw-text-[15px]'>technology</li>
                    <li className='tw-text-[15px]'>03</li>
                </ul>
            </div>
        </div>
    )
}

export default Categories
