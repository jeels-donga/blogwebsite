import React from 'react'
import UserDetails from '../Component/UserDetails'

const AboutAuthor = () => {
    return (
        <>
            <div className='tw-bg-[#F2F8F7] tw-py-[5%]'>
                <div className='container'>
                    <div className='row w-100'>
                        <div className='col-md-6 col-12'>
                            <div className='tw-w-full tw-h-[515px] tw-bg-[#D9D9D9]'></div>
                        </div>
                        <div className='col-md-6 col-12 tw-flex tw-flex-col tw-justify-evenly'>
                            <h2>Hi! i’m Saimon D’silva</h2>
                            <p className='tw-text-[15px]'>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously
                                reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized
                                models and out-of-the-box functionalities. Authoritatively target proactive vortals vis-a-vis exceptional
                                results. Compellingly brand emerging sources and compelling materials. Globally iterate parallel content</p>
                            <h5 className='tw-my-5'>The best ideas can change who we are.</h5>
                            <p className='tw-text-[15px] '>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary
                                imperatives without 24/365 catalysts for</p>
                            <h5 className=''>Follow on social media:</h5>
                            <div className=' tw-flex tw-gap-5'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 12.073C25 5.40365 19.4052 0 12.5 0C5.59476 0 0 5.40365 0 12.073C0 18.0988 4.57107 23.0935 10.5469 24V15.563H7.37147V12.073H10.5469V9.41306C10.5469 6.38751 12.4118 4.71627 15.2681 4.71627C16.6361 4.71627 18.0665 4.95189 18.0665 4.95189V7.92146H16.4899C14.9375 7.92146 14.4531 8.85225 14.4531 9.8069V12.073H17.9199L17.3654 15.563H14.4531V24C20.4289 23.0935 25 18.0988 25 12.073Z" fill="#777777" />
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" fill="#00AAA1" />
                                    <path d="M19.6369 8.92811C19.115 9.14714 18.5543 9.29516 17.9658 9.36176C18.5666 9.02092 19.0279 8.4812 19.2451 7.83813C18.6739 8.15892 18.0491 8.38494 17.3975 8.50642C16.8667 7.97121 16.1106 7.63672 15.2737 7.63672C13.6668 7.63672 12.3641 8.8698 12.3641 10.3907C12.3641 10.6065 12.3898 10.8167 12.4394 11.0183C10.0213 10.9034 7.8774 9.80704 6.44232 8.14084C6.19192 8.54758 6.04844 9.02071 6.04844 9.52536C6.04844 10.4808 6.56215 11.3238 7.34281 11.8176C6.88077 11.804 6.42889 11.6858 6.0249 11.4731C6.02473 11.4847 6.02473 11.4962 6.02473 11.5078C6.02473 12.8421 7.02765 13.9553 8.35864 14.2083C7.93019 14.3185 7.48077 14.3347 7.04472 14.2554C7.41494 15.3496 8.48949 16.1458 9.76264 16.168C8.76687 16.9067 7.51227 17.347 6.14916 17.347C5.91427 17.347 5.68271 17.3339 5.45508 17.3085C6.74269 18.0899 8.27205 18.5458 9.91515 18.5458C15.267 18.5458 18.1935 14.3493 18.1935 10.71C18.1935 10.5906 18.1907 10.4718 18.185 10.3537C18.7547 9.96398 19.2463 9.48121 19.6369 8.92811Z" fill="white" />
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.3448 7.32352C23.3317 6.33852 23.1473 5.36331 22.7999 4.44151C22.4986 3.66398 22.0385 2.95785 21.4488 2.36822C20.8592 1.77859 20.1531 1.31845 19.3755 1.01717C18.4656 0.675594 17.5043 0.490896 16.5325 0.470944C15.2814 0.415021 14.8847 0.399414 11.7088 0.399414C8.53288 0.399414 8.12581 0.399414 6.88379 0.470944C5.91249 0.491043 4.95163 0.675739 4.0421 1.01717C3.26445 1.31824 2.5582 1.77831 1.96855 2.36796C1.3789 2.95762 0.918822 3.66386 0.617759 4.44151C0.275496 5.35077 0.0911984 6.31184 0.0728306 7.2832C0.0169071 8.53563 0 8.9323 0 12.1082C0 15.2842 -9.68982e-09 15.6899 0.0728306 16.9333C0.0923388 17.9061 0.275716 18.8659 0.617759 19.7776C0.919327 20.555 1.37974 21.2609 1.96959 21.8503C2.55944 22.4397 3.26575 22.8996 4.0434 23.2006C4.95044 23.5559 5.91147 23.7538 6.88509 23.7858C8.13752 23.8418 8.53418 23.8587 11.7101 23.8587C14.8861 23.8587 15.2931 23.8587 16.5351 23.7858C17.5069 23.7667 18.4682 23.5824 19.3781 23.2409C20.1555 22.9393 20.8614 22.479 21.451 21.8894C22.0406 21.2999 22.5009 20.5939 22.8025 19.8166C23.1445 18.9062 23.3279 17.9464 23.3474 16.9723C23.4033 15.7211 23.4202 15.3245 23.4202 12.1472C23.4176 8.97131 23.4176 8.56814 23.3448 7.32352ZM11.701 18.1142C8.37942 18.1142 5.68859 15.4233 5.68859 12.1017C5.68859 8.78013 8.37942 6.0893 11.701 6.0893C13.2956 6.0893 14.8249 6.72275 15.9524 7.8503C17.08 8.97785 17.7134 10.5071 17.7134 12.1017C17.7134 13.6963 17.08 15.2256 15.9524 16.3532C14.8249 17.4807 13.2956 18.1142 11.701 18.1142ZM17.9527 7.2689C17.7686 7.26907 17.5862 7.23292 17.416 7.16253C17.2458 7.09213 17.0912 6.98887 16.961 6.85865C16.8308 6.72843 16.7275 6.5738 16.6571 6.40363C16.5867 6.23346 16.5506 6.05107 16.5507 5.86691C16.5507 5.68288 16.587 5.50066 16.6574 5.33064C16.7278 5.16062 16.8311 5.00614 16.9612 4.87601C17.0913 4.74589 17.2458 4.64267 17.4158 4.57224C17.5858 4.50182 17.7681 4.46557 17.9521 4.46557C18.1361 4.46557 18.3183 4.50182 18.4884 4.57224C18.6584 4.64267 18.8129 4.74589 18.943 4.87601C19.0731 5.00614 19.1763 5.16062 19.2468 5.33064C19.3172 5.50066 19.3534 5.68288 19.3534 5.86691C19.3534 6.64204 18.7266 7.2689 17.9527 7.2689Z" fill="#777777" />
                                    <path d="M11.7014 16.0064C13.8584 16.0064 15.607 14.2578 15.607 12.1009C15.607 9.94388 13.8584 8.19531 11.7014 8.19531C9.54447 8.19531 7.7959 9.94388 7.7959 12.1009C7.7959 14.2578 9.54447 16.0064 11.7014 16.0064Z" fill="#777777" />
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.419922 12.1289C0.419922 16.9319 3.30815 21.058 7.44108 22.8721C7.40809 22.0531 7.43522 21.0698 7.64525 20.1787C7.87077 19.2265 9.15452 13.7873 9.15452 13.7873C9.15452 13.7873 8.77981 13.0384 8.77981 11.9315C8.77981 10.1933 9.78727 8.89509 11.042 8.89509C12.1089 8.89509 12.6244 9.69645 12.6244 10.656C12.6244 11.7285 11.9403 13.3328 11.5885 14.8187C11.2946 16.0629 12.2124 17.0777 13.4398 17.0777C15.6622 17.0777 17.159 14.2234 17.159 10.8415C17.159 8.27078 15.4276 6.34663 12.2783 6.34663C8.72016 6.34663 6.50354 9.00002 6.50354 11.9639C6.50354 12.9858 6.80484 13.7064 7.27678 14.2645C7.49377 14.5208 7.52392 14.6239 7.44539 14.9182C7.38912 15.134 7.25992 15.6536 7.2064 15.8595C7.12832 16.1565 6.88759 16.2627 6.6191 16.1531C4.98025 15.484 4.21701 13.6894 4.21701 11.6719C4.21701 8.33997 7.02716 4.34468 12.6002 4.34468C17.0785 4.34468 20.026 7.58526 20.026 11.0638C20.026 15.6651 17.4679 19.1026 13.697 19.1026C12.4306 19.1026 11.2394 18.4181 10.8314 17.6406C10.8314 17.6406 10.1504 20.3431 10.0062 20.8649C9.75749 21.7693 9.27071 22.6732 8.82563 23.3777C9.9049 23.6968 11.0245 23.8588 12.15 23.8587C18.6273 23.8587 23.8792 18.6071 23.8792 12.1289C23.8792 5.65093 18.6273 0.399414 12.15 0.399414C5.67202 0.399414 0.419922 5.65093 0.419922 12.1289Z" fill="#777777" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className='container tw-my-[5%]'>
                <h1 className='tw-my-5'><span className='tw-bg-[#00AAA1] tw-text-white'>Read</span>  author blogs</h1>
                <div className='row w-100'>
                    <div className='col-lg-4 col-md-6 col-12 my-2'>
                        <svg className='tw-w-full' height="262" viewBox="0 0 413 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='tw-w-full' height="262" rx="5" fill="#D9D9D9" />
                        </svg>
                        <p className='tw-mt-2'><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                        <h1 className='tw-my-2'>set video playback speed with javascript</h1>
                        <div className='tw-my-2'>
                            <UserDetails />
                        </div>
                        <p className='text-[15px]tw-my-2'>Did you come here for something in particular or just general Riker-bashing</p>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 my-2'>
                        <svg className='tw-w-full' height="262" viewBox="0 0 413 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='tw-w-full' height="262" rx="5" fill="#D9D9D9" />
                        </svg>
                        <p className='tw-mt-2'><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                        <h1 className='tw-my-2'>set video playback speed with javascript</h1>
                        <div className='tw-my-2'>
                            <UserDetails />
                        </div>
                        <p className='text-[15px]tw-my-2'>Did you come here for something in particular or just general Riker-bashing</p>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 my-2'>
                        <svg className='tw-w-full' height="262" viewBox="0 0 413 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='tw-w-full' height="262" rx="5" fill="#D9D9D9" />
                        </svg>
                        <p className='tw-mt-2'><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                        <h1 className='tw-my-2'>set video playback speed with javascript</h1>
                        <div className='tw-my-2'>
                            <UserDetails />
                        </div>
                        <p className='text-[15px]tw-my-2'>Did you come here for something in particular or just general Riker-bashing</p>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 my-2'>
                        <svg className='tw-w-full' height="262" viewBox="0 0 413 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='tw-w-full' height="262" rx="5" fill="#D9D9D9" />
                        </svg>
                        <p className='tw-mt-2'><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                        <h1 className='tw-my-2'>set video playback speed with javascript</h1>
                        <div className='tw-my-2'>
                            <UserDetails />
                        </div>
                        <p className='text-[15px]tw-my-2'>Did you come here for something in particular or just general Riker-bashing</p>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 my-2'>
                        <svg className='tw-w-full' height="262" viewBox="0 0 413 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='tw-w-full' height="262" rx="5" fill="#D9D9D9" />
                        </svg>
                        <p className='tw-mt-2'><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                        <h1 className='tw-my-2'>set video playback speed with javascript</h1>
                        <div className='tw-my-2'>
                            <UserDetails />
                        </div>
                        <p className='text-[15px]tw-my-2'>Did you come here for something in particular or just general Riker-bashing</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutAuthor
