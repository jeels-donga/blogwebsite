import React from 'react'
import UserDetails from '../UserDetails'
const H1Sec1 = (props) => {
    return (
        <div>
            <div>
                <h1 className='tw-font-bold tw-py-4   tw-w-full'>{props.title}</h1>
                <div>
                    <svg width="350" height="229" viewBox="0 0 350 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="350" height="229" rx="7" fill="#D9D9D9" />
                    </svg>
                </div>
                <div>
                    <UserDetails />
                    <p className='tw-text-[15px]'>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
                </div>
            </div>
        </div>
    )
}

export default H1Sec1
