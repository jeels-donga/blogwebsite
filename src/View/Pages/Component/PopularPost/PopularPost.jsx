import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserDetails from '../UserDetails';
import { Link } from 'react-router-dom';

const PopularPost = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
        slidesPerRow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }
    return (
        <div>
            <h3 className='tw-font-bold'><span className='tw-bg-[#00AAA1] tw-text-white'>Popular</span> Posted</h3>
            <div className='tw-mt-5'>
                <Slider {...settings}>
                    <Link to={'/singleblog'} className="tw-py-4">
                        <p><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                        <h5 className='tw-font-bold tw-my-2'>Design is the Mix of emotions</h5>
                        <UserDetails />
                        <p className='tw-text-[15px] tw-my-2'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp</p>
                    </Link>
                    {/* slider2 */}
                    <Link to={'/singleblog'} className="tw-py-4">
                        <p><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                        <h5 className='tw-font-bold tw-my-2'>Design is the Mix of emotions</h5>
                        <UserDetails />
                        <p className='tw-text-[15px] tw-my-2'>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
                    </Link>
                    {/* slider3 */}
                    <Link to={'/singleblog'} className="tw-py-4">
                        <p><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                        <h5 className='tw-font-bold tw-my-2'>Design is the Mix of emotions</h5>
                        <UserDetails />
                        <p className='tw-text-[15px] tw-my-2'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp</p>
                    </Link>
                    {/* slider4 */}
                    <Link to={'/singleblog'} className="tw-py-4">
                        <p><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                        <h5 className='tw-font-bold tw-my-2'>Design is the Mix of emotions</h5>
                        <UserDetails />
                        <p className='tw-text-[15px] tw-my-2'>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
                    </Link>
                    {/* slider5 */}
                    <Link to={'/singleblog'} className="tw-py-4">
                        <p><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                        <h5 className='tw-font-bold tw-my-2'>Design is the Mix of emotions</h5>
                        <UserDetails />
                        <p className='tw-text-[15px] tw-my-2'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp</p>
                    </Link>
                    {/* slider 6 */}
                    <Link to={'/singleblog'} className="tw-py-4">
                        <p><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                        <h5 className='tw-font-bold  tw-my-2'>Design is the Mix of emotions</h5>
                        <UserDetails />
                        <p className='tw-text-[15px] tw-my-2'>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
                    </Link>
                    {/* slider 7 */}
                    <Link to={'/singleblog'} className="tw-py-4">
                        <p><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                        <h5 className='tw-font-bold  tw-my-2'>Design is the Mix of emotions</h5>
                        <UserDetails />
                        <p className='tw-text-[15px] tw-my-2'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp</p>
                    </Link>
                    {/* slider8 */}
                    <Link to={'/singleblog'} className="tw-py-4">
                        <p><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                        <h5 className='tw-font-bold tw-my-2'>Design is the Mix of emotions</h5>
                        <UserDetails />
                        <p className='tw-text-[15px] tw-my-2'>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
                    </Link>
                </Slider>
            </div >
        </div >
    )
}

export default PopularPost
