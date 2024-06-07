import React from 'react'
import H1Sec1 from '../Component/H1Sec1/H1Sec1'
import './Home.css'
import PopularPost from '../Component/PopularPost/PopularPost'
import { Link } from 'react-router-dom'
import RecentPost from '../Component/RecentPost/RecentPost'
import TopAuthors from '../Component/TopAuthors/TopAuthors'
import Ads from '../Component/Ads/Ads'
import Categories from '../Component/Categories/Categories'
import TodaysUpdate from '../Component/TodaysUpdate/TodaysUpdate'
import InstaPost from '../Component/InstaPost/InstaPost'
import SearchTag from '../Component/SearchTag/SearchTag'

const Home = () => {
    return (
        <>
            <div className='tw-bg-[#F2F8F7] tw-pb-[5%]'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 mt-5'>
                            <h3 className='tw-font-bold'><span className='tw-bg-[#00AAA1] tw-text-white'>Featured</span> This Month</h3>
                            <div className='tw-h-[500px] new tw-overflow-y-scroll tw-scrollbar-thin tw-scrollbar-thumb-gray-500 tw-scrollbar-track-gray-100'>
                                <div className='row w-100'>
                                    <div className='col-lg-6 col-12'>
                                        <Link to={'/singleblog'}>
                                            <p className='tw-mt-5'><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                                            <H1Sec1 title={"Set Video Playback Speed With Javascript"} />
                                        </Link>
                                    </div>
                                    <div className='col-lg-6 col-12'>
                                        <Link to={'/singleblog'}>
                                            <p className='tw-mt-5'><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                                            <H1Sec1 bg={"#00AAA1"} title={"Design is the Mix of emotions"} />
                                        </Link>
                                    </div>
                                    <div className='col-lg-6 col-12'>
                                        <Link to={'/singleblog'} className='mt-5'>
                                            <p className='tw-mt-5'><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                                            <H1Sec1 title={"Set Video Playback Speed With Javascript"} />
                                        </Link>
                                    </div>
                                    <div className='col-lg-6 col-12'>
                                        <Link to={'/singleblog'} className='mt-5'>
                                            <p className='tw-mt-5'><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                                            <H1Sec1 bg={"#00AAA1"} title={"Design is the Mix of emotions"} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 mt-5'>
                            <PopularPost />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className='row w-100'>
                    <div className='col-lg-8 mt-5'>
                        <h3 className='tw-font-bold'><span className='tw-bg-[#00AAA1] tw-text-white'>Recently </span>Posted</h3>
                        <RecentPost />
                        <div className="tw-flex tw-justify-center tw-mt-8">
                            <ul className="tw-pagination tw-flex tw-gap-2">
                                <li className="tw-border tw-p-2 tw-px-4 tw-rounded-xl hover:tw-bg-[#00AAA1] hover:tw-text-white">
                                    <Link href="#" className="tw-pagination-link">&#8592; Prev</Link>
                                </li>
                                <li className="tw-border tw-p-2 tw-px-4 tw-rounded-xl hover:tw-bg-[#00AAA1] hover:tw-text-white">
                                    <Link href="#" className="tw-pagination-link">1</Link>
                                </li>
                                <li className="tw-border tw-p-2 tw-px-4 tw-rounded-xl hover:tw-bg-[#00AAA1] hover:tw-text-white">
                                    <Link href="#" className="tw-pagination-link">2</Link>
                                </li>
                                <li className="tw-border tw-p-2 tw-px-4 tw-rounded-xl hover:tw-bg-[#00AAA1] hover:tw-text-white">
                                    <Link href="#" className="tw-pagination-link">3</Link>
                                </li>
                                <li className="tw-border tw-p-2 tw-px-4 tw-rounded-xl tw-bg-[#00AAA1] tw-text-white">
                                    <Link href="#" className="tw-pagination-link">Next &#8594;</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-5'>
                        <TopAuthors />
                        <Ads />
                        <Categories />
                        <TodaysUpdate />
                        <InstaPost />
                        <SearchTag />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
