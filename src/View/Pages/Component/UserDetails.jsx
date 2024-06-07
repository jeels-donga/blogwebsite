import React from 'react'
import user from '../../../Model/Assets/user.jpg'
const UserDetails = () => {
    return (
        <div>
            <div className='tw-flex tw-self-center tw-gap-2 tw-my-3'>
                <div className='tw-flex tw-self-center tw-border-e tw-border-gray-500 tw-pe-1 tw-gap-1 '>
                    <img src={user} alt="" className='tw-w-5 tw-h-5 tw-object-cover tw-object-top tw-rounded-full ' />
                    <p className='tw-text-[12px]'>Jenny kiaa</p>
                </div>
                <div className='tw-flex tw-self-center tw-border-e tw-border-gray-500 tw-pe-1 tw-gap-1 '>
                    <div className='tw-mt-1'>
                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.4 5.4H3.6V6.6H2.4V5.4ZM10.8 2.4V10.8C10.8 11.46 10.26 12 9.6 12H1.2C0.88174 12 0.576515 11.8736 0.351472 11.6485C0.126428 11.4235 0 11.1183 0 10.8L0.00599999 2.4C0.00599999 1.74 0.534 1.2 1.2 1.2H1.8V0H3V1.2H7.8V0H9V1.2H9.6C10.26 1.2 10.8 1.74 10.8 2.4ZM1.2 3.6H9.6V2.4H1.2V3.6ZM9.6 10.8V4.8H1.2V10.8H9.6ZM7.2 6.6H8.4V5.4H7.2V6.6ZM4.8 6.6H6V5.4H4.8V6.6Z" fill="#555555" />
                        </svg>

                    </div>
                    <p className='tw-text-[12px]'>02 december 2022</p>
                </div>
                <div className='tw-flex tw-self-center tw-gap-2'>
                    <div className='tw-mt-1'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8Z" fill="#555555" />
                            <path d="M6.60002 3H5.40002V6.2484L7.37582 8.2242L8.22422 7.3758L6.60002 5.7516V3Z" fill="#555555" />
                        </svg>
                    </div>
                    <p className='tw-text-[12px]'>3 min. to read</p>
                </div>
            </div>
        </div>
    )
}

export default UserDetails