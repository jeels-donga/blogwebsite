import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='tw-bg-[#F2F8F7]'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-12 tw-pt-[8%] tw-pb-[5%]'>
                        <h5 className='md:tw-text-start tw-text-center tw-font-bold'>
                            <span className='tw-bg-[#00AAA1] tw-text-white tw-text-[27px]'>Note</span>Book
                        </h5>
                        <p className='lg:tw-w-[76%] tw-w-[100%] md:tw-text-start tw-text-center tw-py-3'>Did you come here for something in particular or just general Riker</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 tw-pt-[8%] tw-pb-[5%]'>
                        <ul className='tw-flex tw-flex-col tw-gap-2 md:tw-text-start tw-text-center'>
                            <li className='tw-font-bold '>blogs</li>
                            <li>Travel</li>
                            <li>Technology</li>
                            <li>Lifestyle</li>
                            <li>fashion</li>
                            <li>Business</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 tw-pt-[8%] tw-pb-[5%]'>
                        <ul className='tw-flex tw-flex-col tw-gap-2 md:tw-text-start tw-text-center'>
                            <li className='tw-font-bold'>quick links</li>
                            <li><Link to={"/Faq"}>FAQ</Link></li>
                            <li>Terms & conditions</li>
                            <li>support</li>
                            <li>privacy policy</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 tw-pt-[8%] tw-pb-[5%]'>
                        <h3 className=' tw-font-bold md:tw-text-start tw-text-center'>Subscribe for newsletter</h3>
                        <div className='tw-flex md:tw-justify-start tw-justify-center tw-my-4 tw-w-full'>
                            <input type="email" placeholder='Your Email' />
                            <button className='tw-px-4 tw-py-2 tw-bg-[#00AAA1] tw-text-white'>Subcribe</button>
                        </div>
                        <h3 className=' md:tw-text-start tw-text-center'>follow on:</h3>
                        <div className='tw-flex md:tw-justify-start tw-justify-center tw-gap-3 tw-mt-3'>
                            <div className='tw-bg-[#00AAA1] tw-pt-3 tw-p-2 tw-rounded-md tw-border tw-border-[#00AAA1]'>
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1.13641C11.5584 1.32841 11.0844 1.46041 10.5864 1.51801C11.0952 1.21801 11.484 0.742812 11.6688 0.177612C11.184 0.460172 10.6549 0.658958 10.104 0.765612C9.87225 0.5227 9.59345 0.329541 9.2846 0.197914C8.97575 0.0662867 8.64333 -0.00104943 8.3076 1.23642e-05C6.948 1.23642e-05 5.8464 1.08601 5.8464 2.42401C5.8464 2.61361 5.868 2.79841 5.91 2.97601C4.93479 2.9297 3.97994 2.68062 3.10638 2.24467C2.23281 1.80871 1.45971 1.19545 0.8364 0.444012C0.617476 0.812533 0.502212 1.23337 0.5028 1.66201C0.5028 2.50201 0.9384 3.24601 1.5984 3.67921C1.20773 3.66696 0.825432 3.56296 0.4824 3.37561V3.40561C0.486107 3.96897 0.68496 4.51362 1.0451 4.94684C1.40524 5.38006 1.9044 5.67506 2.4576 5.78161C2.09443 5.87764 1.71443 5.89158 1.3452 5.82241C1.50615 6.30705 1.81401 6.72956 2.22603 7.03126C2.63805 7.33296 3.13378 7.49889 3.6444 7.50601C2.76836 8.18108 1.69277 8.5458 0.5868 8.54281C0.3888 8.54281 0.1932 8.53081 0 8.50921C1.12857 9.22356 2.43716 9.6019 3.7728 9.60001C8.3016 9.60001 10.7772 5.90641 10.7772 2.70241L10.7688 2.38801C11.2516 2.04875 11.6687 1.62467 12 1.13641Z" fill="white" />
                                </svg>
                            </div>
                            <div className='tw-group hover:tw-bg-[#00AAA1] tw-rounded-md tw-pt-2 tw-px-3 tw-border tw-border-gray-500 hover:tw-border-[#00AAA1]'>
                                <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.0722 14H4.54031V7.6125H6.60409L6.91576 5.1275H4.54031V3.535C4.54031 2.8175 4.73406 2.3275 5.72804 2.3275H7V0.0962499C6.78099 0.0699999 6.03129 0 5.15523 0C3.31889 0 2.0722 1.16375 2.0722 3.29V5.1275H0V7.6125H2.0722V14Z" fill="#777777" className='group-hover:tw-fill-white' />
                                </svg>
                            </div>
                            <div className=' tw-group hover:tw-bg-[#00AAA1] tw-rounded-md tw-p-2 tw-border tw-border-gray-500 hover:tw-border-[#00AAA1]'>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.97609 0.302734C5.34767 0.313786 3.7737 0.888369 2.52344 1.92819C1.27318 2.96801 0.424311 4.40846 0.122059 6.00311C-0.180194 7.59776 0.0829485 9.24753 0.86647 10.6702C1.64999 12.0928 2.9052 13.2 4.41738 13.8022C4.31575 13.1394 4.31575 12.4651 4.41738 11.8023L5.2452 8.30243C5.11419 7.98546 5.04932 7.64523 5.05455 7.30247C5.05455 6.3325 5.62148 5.60253 6.32387 5.60253C6.45111 5.60063 6.57727 5.62615 6.69369 5.67736C6.81011 5.72856 6.91405 5.80424 6.99839 5.89921C7.08273 5.99418 7.14547 6.1062 7.18232 6.22758C7.21917 6.34897 7.22926 6.47686 7.21189 6.60249C7.21189 7.20247 6.8306 8.10244 6.62991 8.93241C6.58672 9.08719 6.58158 9.25006 6.61494 9.40724C6.6483 9.56442 6.71916 9.71127 6.82154 9.83537C6.92392 9.95947 7.0548 10.0572 7.20309 10.1202C7.35138 10.1832 7.51273 10.2097 7.67346 10.1974C8.9177 10.1974 9.88098 8.88241 9.88098 6.99248C9.89349 6.60844 9.82554 6.22601 9.68146 5.8696C9.53738 5.51319 9.32034 5.19062 9.04418 4.92247C8.76802 4.65431 8.43881 4.44647 8.07755 4.31219C7.71629 4.17791 7.3309 4.12015 6.94599 4.14259C6.53504 4.125 6.12478 4.19069 5.74004 4.33569C5.35531 4.48069 5.0041 4.70198 4.70767 4.98617C4.41124 5.27036 4.17576 5.61154 4.01548 5.98905C3.8552 6.36656 3.77346 6.77256 3.77519 7.18247C3.76961 7.75352 3.94521 8.31173 4.2769 8.77741C4.30102 8.80413 4.3182 8.83633 4.32695 8.87119C4.33569 8.90605 4.33574 8.94252 4.32707 8.9774C4.27188 9.1974 4.15147 9.67738 4.13141 9.77237C4.11134 9.86737 4.02605 9.92737 3.8956 9.86737C3.01761 9.45739 2.47075 8.18243 2.47075 7.15247C2.47075 4.94756 4.08124 2.91763 7.11155 2.91763C9.54484 2.91763 11.4413 4.64757 11.4413 6.96248C11.4413 9.37239 9.93617 11.3123 7.79387 11.3123C7.47981 11.3232 7.168 11.2557 6.88675 11.116C6.6055 10.9763 6.36373 10.7688 6.18339 10.5123L5.74691 12.1773C5.53767 12.8243 5.24417 13.4412 4.87393 14.0122C5.55615 14.2131 6.26476 14.3109 6.97609 14.3022C8.83895 14.3022 10.6255 13.5647 11.9427 12.252C13.26 10.9393 14 9.15891 14 7.30247C14 5.44602 13.26 3.66561 11.9427 2.35291C10.6255 1.0402 8.83895 0.302734 6.97609 0.302734Z" fill="#777777" className='group-hover:tw-fill-white' />
                                </svg>
                            </div>
                            <div className='tw-group hover:tw-bg-[#00AAA1] tw-rounded-md tw-p-2 tw-border tw-border-gray-500 hover:tw-border-[#00AAA1]'>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.9549 4.93007C13.9471 4.34126 13.8368 3.7583 13.6292 3.20728C13.4491 2.74249 13.174 2.32038 12.8215 1.96792C12.4691 1.61545 12.047 1.34039 11.5822 1.1603C11.0382 0.956109 10.4636 0.845701 9.88272 0.833774C9.13483 0.800345 8.89771 0.791016 6.99922 0.791016C5.10073 0.791016 4.8574 0.791016 4.11495 0.833774C3.53433 0.845789 2.95996 0.956195 2.41626 1.1603C1.9514 1.34026 1.52923 1.61528 1.17675 1.96776C0.824268 2.32024 0.549247 2.74242 0.36928 3.20728C0.164684 3.7508 0.054516 4.32531 0.0435362 4.90596C0.0101066 5.65463 0 5.89175 0 7.79024C0 9.68873 -5.79232e-09 9.93129 0.0435362 10.6745C0.0551977 11.256 0.164816 11.8298 0.36928 12.3748C0.549549 12.8395 0.824775 13.2615 1.17737 13.6138C1.52997 13.9661 1.95218 14.241 2.41704 14.421C2.95924 14.6334 3.53372 14.7517 4.11573 14.7708C4.86439 14.8042 5.10151 14.8143 7 14.8143C8.89849 14.8143 9.14183 14.8143 9.88427 14.7708C10.4651 14.7594 11.0398 14.6492 11.5837 14.4451C12.0484 14.2648 12.4704 13.9896 12.8228 13.6372C13.1753 13.2847 13.4504 12.8627 13.6307 12.3981C13.8352 11.8539 13.9448 11.2801 13.9565 10.6978C13.9899 9.94995 14 9.71283 14 7.81356C13.9984 5.91507 13.9984 5.67407 13.9549 4.93007ZM6.99456 11.3804C5.009 11.3804 3.40049 9.77191 3.40049 7.78635C3.40049 5.80079 5.009 4.19228 6.99456 4.19228C7.94776 4.19228 8.86193 4.57094 9.53595 5.24496C10.21 5.91898 10.5886 6.83314 10.5886 7.78635C10.5886 8.73956 10.21 9.65372 9.53595 10.3277C8.86193 11.0018 7.94776 11.3804 6.99456 11.3804ZM10.7317 4.89741C10.6216 4.89751 10.5126 4.87591 10.4108 4.83383C10.3091 4.79175 10.2167 4.73002 10.1388 4.65218C10.061 4.57433 9.99927 4.4819 9.95719 4.38018C9.91511 4.27845 9.8935 4.16943 9.8936 4.05934C9.8936 3.94933 9.91527 3.84041 9.95737 3.73877C9.99946 3.63714 10.0612 3.5448 10.139 3.46701C10.2167 3.38922 10.3091 3.32752 10.4107 3.28542C10.5124 3.24332 10.6213 3.22166 10.7313 3.22166C10.8413 3.22166 10.9502 3.24332 11.0519 3.28542C11.1535 3.32752 11.2458 3.38922 11.3236 3.46701C11.4014 3.5448 11.4631 3.63714 11.5052 3.73877C11.5473 3.84041 11.569 3.94933 11.569 4.05934C11.569 4.52269 11.1942 4.89741 10.7317 4.89741Z" fill="#777777" className='group-hover:tw-fill-white' />
                                    <path d="M6.99479 10.1214C8.28417 10.1214 9.32941 9.07616 9.32941 7.78678C9.32941 6.4974 8.28417 5.45215 6.99479 5.45215C5.70541 5.45215 4.66016 6.4974 4.66016 7.78678C4.66016 9.07616 5.70541 10.1214 6.99479 10.1214Z" fill="#777777" className='group-hover:tw-fill-white' />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
