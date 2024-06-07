import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import silder1 from '../../../Model/Assets/silder1.png'
import silder2 from '../../../Model/Assets/silder2.png'
import silder3 from '../../../Model/Assets/silder3.png'
import silder4 from '../../../Model/Assets/silder4.png'
import silder5 from '../../../Model/Assets/silder5.png'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
            <div className='tw-bg-[#F2F8F7]'>
                <div className='container tw-py-[5%]'>
                    <div className='tw-flex tw-justify-center'>
                        <div className='lg:tw-w-[39%] tw-w-full'>
                            <div>
                                <h1 className='text-center tw-mb-5'>
                                    <span className='tw-text-white tw-bg-[#00AAA1]'>Notebook is a place</span> where you can find your perfect blogs
                                </h1>
                                <p className='tw-text-[15px] tw-text-center'>Dynamically underwhelm integrated outsourcing via timely models.
                                    Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely
                                    streamline functionalized models and out-of-the-box functionalities. Authoritatively target proactive
                                    vortals vis-a-vis exceptional results. Compellingly brand emerging sources and compelling materials.
                                    Globally iterate parallel content
                                </p>
                                <h5 className='text-center tw-my-5'>The best ideas can change who we are.</h5>
                                <p className='text-[15px] tw-text-center'>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously
                                    reconceptualize visionary imperatives without 24/365 catalysts for
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='my-5'>
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div>
                                    <img src={silder1} alt="" />
                                </div>
                                <div>
                                    <img src={silder2} alt="" />
                                </div>
                                <div>
                                    <img src={silder3} alt="" />
                                </div>
                                <div>
                                    <img src={silder4} alt="" />
                                </div>
                                <div>
                                    <img src={silder5} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <h1 className='text-center tw-my-5'><span className='tw-text-white tw-bg-[#00AAA1]'>meet</span>  our authors</h1>
                <div className='row w-100'>
                    <div className='col-lg-6 col-12 tw-my-5'>
                        <Link to={'/about/aboutauthor'}>
                            <div className='lg:tw-flex tw-block tw-justify-evenly '>
                                <div className='tw-flex lg:tw-justify-start tw-justify-center'>
                                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="150" height="150" fill="#D9D9D9" />
                                    </svg>
                                </div>
                                <div className='tw-flex tw-flex-col tw-justify-evenly'>
                                    <h2 className='lg:tw-text-start tw-text-center'>Maria Jenin</h2>
                                    <h6 className='lg:tw-text-start tw-text-center'> 20 posts</h6>
                                    <div className='lg:tw-text-start tw-text-center' >
                                        <p className='tw-text-[#00AAA1]'>See details about author <span className='tw-my-2'>&#8594;</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-lg-6 col-12 tw-my-5'>
                        <div className='lg:tw-flex tw-block tw-justify-evenly '>
                            <div className='tw-flex lg:tw-justify-start tw-justify-center'>
                                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="150" height="150" fill="#D9D9D9" />
                                </svg>
                            </div>
                            <div className='tw-flex tw-flex-col tw-justify-evenly'>
                                <h2 className='lg:tw-text-start tw-text-center'>asa agarwal</h2>
                                <h6 className='lg:tw-text-start tw-text-center'>  13 posts</h6>
                                <div className='lg:tw-text-start tw-text-center' >
                                    <p className='tw-text-[#00AAA1]'>See details about author <span className='tw-my-2'>&#8594;</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 tw-my-5'>
                        <div className='lg:tw-flex tw-block tw-justify-evenly '>
                            <div className='tw-flex lg:tw-justify-start tw-justify-center'>
                                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="150" height="150" fill="#D9D9D9" />
                                </svg>
                            </div>
                            <div className='tw-flex tw-flex-col tw-justify-evenly'>
                                <h2 className='lg:tw-text-start tw-text-center'>enna lee</h2>
                                <h6 className='lg:tw-text-start tw-text-center'>  19 posts</h6>
                                <div className='lg:tw-text-start tw-text-center' >
                                    <p className='tw-text-[#00AAA1]'>See details about author <span className='tw-my-2'>&#8594;</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 tw-my-5'>
                        <div className='lg:tw-flex tw-block tw-justify-evenly '>
                            <div className='tw-flex lg:tw-justify-start tw-justify-center'>
                                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="150" height="150" fill="#D9D9D9" />
                                </svg>
                            </div>
                            <div className='tw-flex tw-flex-col tw-justify-evenly'>
                                <h2 className='lg:tw-text-start tw-text-center'>simon D’silva</h2>
                                <h6 className='lg:tw-text-start tw-text-center'>  7 posts</h6>
                                <div className='lg:tw-text-start tw-text-center' >
                                    <p className='tw-text-[#00AAA1]'>See details about author <span className='tw-my-2'>&#8594;</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 tw-my-5'>
                        <div className='lg:tw-flex tw-block tw-justify-evenly '>
                            <div className='tw-flex lg:tw-justify-start tw-justify-center'>
                                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="150" height="150" fill="#D9D9D9" />
                                </svg>
                            </div>
                            <div className='tw-flex tw-flex-col tw-justify-evenly'>
                                <h2 className='lg:tw-text-start tw-text-center'>simon D’silva</h2>
                                <h6 className='lg:tw-text-start tw-text-center'> 11 posts</h6>
                                <div className='lg:tw-text-start tw-text-center' >
                                    <p className='tw-text-[#00AAA1]'>See details about author <span className='tw-my-2'>&#8594;</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 tw-my-5'>
                        <div className='lg:tw-flex tw-block tw-justify-evenly '>
                            <div className='tw-flex lg:tw-justify-start tw-justify-center'>
                                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="150" height="150" fill="#D9D9D9" />
                                </svg>
                            </div>
                            <div className='tw-flex tw-flex-col tw-justify-evenly'>
                                <h2 className='lg:tw-text-start tw-text-center'>simon D’silva</h2>
                                <h6 className='lg:tw-text-start tw-text-center'>  23 posts</h6>
                                <div className='lg:tw-text-start tw-text-center' >
                                    <p className='tw-text-[#00AAA1]'>See details about author <span className='tw-my-2'>&#8594;</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className='container my-5 tw-mb-[5%]'>
                <div className='tw-bg-[#F2F8F7]'>
                    <h1 className='text-center tw-py-5'>want to write on notebook?</h1>
                    <h6 className='text-center tw-pb-5'>there have some simple steps, by following these steps you can be a regular author in notebook</h6>
                    <div className='tw-flex tw-justify-center'>
                        <div className='tw-flex tw-my-5 tw-border tw-border-[#00AAA1] tw-text-[#00AAA1] tw-text-[17px] tw-px-4 tw-py-2'>
                            <span className='tw-me-3'>
                                <svg width="15" height="23" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.357 0.351803L13.7436 0.738392C14.2763 1.27175 14.1957 2.21726 13.5621 2.85022L5.58982 10.8225L3.00688 11.7673C2.68253 11.8866 2.36671 11.7319 2.3025 11.4233C2.2808 11.3114 2.29101 11.1956 2.33198 11.0892L3.29518 8.48393L11.2452 0.533303C11.8788 -0.0996548 12.8243 -0.180904 13.357 0.352458V0.351803ZM5.24189 1.14464C5.32793 1.14464 5.41314 1.16159 5.49263 1.19451C5.57213 1.22744 5.64436 1.27571 5.70521 1.33655C5.76605 1.3974 5.81432 1.46963 5.84724 1.54913C5.88017 1.62862 5.89712 1.71383 5.89712 1.79987C5.89712 1.88592 5.88017 1.97112 5.84724 2.05062C5.81432 2.13012 5.76605 2.20235 5.70521 2.2632C5.64436 2.32404 5.57213 2.3723 5.49263 2.40523C5.41314 2.43816 5.32793 2.45511 5.24189 2.45511H2.62094C2.27338 2.45511 1.94006 2.59318 1.6943 2.83894C1.44854 3.0847 1.31047 3.41802 1.31047 3.76558V11.6284C1.31047 11.976 1.44854 12.3093 1.6943 12.5551C1.94006 12.8008 2.27338 12.9389 2.62094 12.9389H10.4838C10.8313 12.9389 11.1647 12.8008 11.4104 12.5551C11.6562 12.3093 11.7942 11.976 11.7942 11.6284V9.00747C11.7942 8.83369 11.8633 8.66703 11.9862 8.54414C12.109 8.42126 12.2757 8.35223 12.4495 8.35223C12.6233 8.35223 12.7899 8.42126 12.9128 8.54414C13.0357 8.66703 13.1047 8.83369 13.1047 9.00747V11.6284C13.1047 12.3235 12.8286 12.9902 12.3371 13.4817C11.8455 13.9732 11.1789 14.2494 10.4838 14.2494H2.62094C1.92583 14.2494 1.25918 13.9732 0.767656 13.4817C0.276134 12.9902 0 12.3235 0 11.6284V3.76558C0 3.07046 0.276134 2.40382 0.767656 1.91229C1.25918 1.42077 1.92583 1.14464 2.62094 1.14464H5.24189Z" fill="#00AAA1" />
                                </svg>
                            </span>
                            <p>Write on notebook</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutUs
