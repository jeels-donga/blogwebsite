import React, { useEffect, useState } from 'react'
import TopAuthors from '../Component/TopAuthors/TopAuthors'
import Ads from '../Component/Ads/Ads'
import Categories from '../Component/Categories/Categories'
import TodaysUpdate from '../Component/TodaysUpdate/TodaysUpdate'
import InstaPost from '../Component/InstaPost/InstaPost'
import SearchTag from '../Component/SearchTag/SearchTag'
import UserDetails from '../Component/UserDetails'
import comment from '../../../Model/Assets/comment.jpg'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBlog = () => {
    const [blog, setBlog] = useState(null);
    const [comment, setComment] = useState('');
    const { id } = useParams();
    const token = localStorage.getItem("token");
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (buttonNumber) => {
        setActiveButton(buttonNumber === activeButton ? null : buttonNumber);
    };

    useEffect(() => {
        axios.get(`http://localhost:1000/v1/blog?id=${id}`,
            { headers: { Authorization: `Bearer ${token}` } })
            .then(response => setBlog(response.data.data)).catch(error => console.error(error))
    }, []);
    if (!blog) {
        return <div>Loading...</div>;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`http://localhost:1000/v1/commentCreate`,
                {
                    "blogId": id,
                    "content": comment
                },
                { headers: { Authorization: `Bearer ${token}` } });

            // Handle success
            console.log('Comment created:', response.data);
            // console.log(response);
            // You can also update your UI here if needed
        } catch (error) {
            // Handle error
            console.error('Error creating comment:', error);
        }
    };

    const handleChange = (event) => {
        setComment(event.target.value);
    };
    return (
        <div className='container my-5'>
            <div className='row w-100'>
                <div className='col-lg-8 col-12'>
                    <div>
                        <h1>{blog.title}</h1>
                        <p>{blog.content}</p>
                        <svg className='tw-w-full' height="432" viewBox="0 0 856 432" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='tw-w-full' height="432" rx="5" fill="#D9D9D9" />
                        </svg>
                        {/* comment */}
                        {/* <form onSubmit={handleSubmit}> */}
                        <textarea value={comment} onChange={handleChange} className='tw-border' />
                        <button className='tw-border' onClick={handleSubmit}><Link to={`/allcomment/${blog._id}`}> Submit</Link></button>
                        {/* </form> */}
                    </div >
                    <p><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                    <h1 className='my-2'>I Created a Developer Rap Video - Here's What I Learned</h1>
                    <UserDetails />
                    <div className='tw-h-[432px] w-100 tw-bg-[#D9D9D9] tw-rounded-lg my-3'></div>
                    <p>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you
                        appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore.
                        But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer
                        for 75 years? Fate. It protects fools, little children, and ships.
                    </p>
                    <h3 className='mt-5'>I Created a Developer Rap Video - Here's What I Learned</h3>
                    <p className='my-2'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum
                        warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing
                        in stolen ore. But I wanna talk about the assassination attempt</p>
                    <div className='my-3'>
                        <table className='w-100'>
                            <thead>
                                <tr className='tw-bg-[#DFF1F0]'>
                                    <td className='text-center tw-py-2 tw-border'><h5>First</h5></td>
                                    <td className='text-center tw-py-2 tw-border'><h5>Last</h5></td>
                                    <td className='text-center tw-py-2 tw-border'><h5>Handle</h5></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='tw-bg-[#F2F8F7]'>
                                    <td className='text-center tw-py-2 tw-border'><p className='tw-text-[15px]'>Row:1 Cell:1</p></td>
                                    <td className='text-center tw-py-2 tw-border'><p className='tw-text-[15px]'>Row:1 Cell:2</p></td>
                                    <td className='text-center tw-py-2 tw-border'><p className='tw-text-[15px]'>Row:1 Cell:3</p></td>
                                </tr>
                                <tr>
                                    <td className='text-center tw-py-2 tw-border'><p className='tw-text-[15px]'>Row:2 Cell:1</p></td>
                                    <td className='text-center tw-py-2 tw-border'><p className='tw-text-[15px]'>Row:2 Cell:2</p></td>
                                    <td className='text-center tw-py-2 tw-border'><p className='tw-text-[15px]'>Row:2 Cell:3</p></td>
                                </tr>
                                <tr className='tw-bg-[#F2F8F7]'>
                                    <td className='text-center tw-py-2 tw-border'><p className='tw-text-[15px]'>Row:3 Cell:1</p></td>
                                    <td className='text-center tw-py-2 tw-border'><p className='tw-text-[15px]'>Row:3 Cell:2</p></td>
                                    <td className='text-center tw-py-2 tw-border'><p className='tw-text-[15px]'>Row:3 Cell:3</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className='my-3 tw-text-[15px]'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.</p>
                    <div className='px-5 py-4 tw-bg-[#F2F8F7] tw-rounded-lg tw-relative'>
                        <svg className='tw-absolute z-0' width="70" height="45" viewBox="0 0 70 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.74 42.6C36.62 36.24 40.28 29.28 44.72 21.72C49.16 14.16 53.48 7.07999 57.68 0.479992H69.56C66.56 7.55999 63.38 15.12 60.02 23.16C56.66 31.2 53.9 38.34 51.74 44.58H34.46L33.74 42.6ZM0.8 42.6C3.68 36.24 7.28 29.28 11.6 21.72C15.92 14.16 20.18 7.07999 24.38 0.479992H36.44C33.44 7.55999 30.26 15.12 26.9 23.16C23.66 31.2 20.9 38.34 18.62 44.58H1.34L0.8 42.6Z" fill="#DFF1F0" />
                        </svg>
                        <p className='z-10'>“Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.”</p>
                    </div>
                    <p className='my-4 tw-text-[15px]'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.</p>
                    <h3>I Created a Developer Rap Video - Here's What I Learned</h3>
                    <p className='my-3 tw-text-[15px]'>1. Did you come here for something in particular or just general</p>
                    <p className='my-3 tw-text-[15px]'>2. Did you come here for something in particular or just general Riker-bashing</p>
                    <p className='my-3 tw-text-[15px]'>3. Did you come here for something in particula</p>
                    <p className='my-3 tw-text-[15px]'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum</p>
                    <h3 className='my-3'>I Created a Developer Rap Video</h3>
                    <div className='my-3'>
                        <div className='tw-flex'>
                            <button className='px-3 py-2 tw-bg-[#F2F8F7] ' onClick={() => handleClick(1)} data-bs-target="#box1" data-bs-toggle="collapse" href="#box1" aria-expanded={activeButton === 1 ? 'true' : 'false'} aria-controls="box1">step 1</button>
                            <button className='px-3 py-2 tw-text-[#00AAA1]' onClick={() => handleClick(2)} data-bs-target="#box2" data-bs-toggle="collapse" href="#box2" aria-expanded={activeButton === 2 ? 'true' : 'false'} aria-controls="box2">step 2</button>
                            <button className='px-3 py-2 tw-text-[#00AAA1]' onClick={() => handleClick(3)} data-bs-target="#box3" data-bs-toggle="collapse" href="#box3" aria-expanded={activeButton === 3 ? 'true' : 'false'} aria-controls="box3">step 3</button>
                        </div>
                        <div className='tw-bg-[#F2F8F7]' id="box1">
                            <h4 className='py-2 pt-4 px-4'>Title goes here</h4>
                            <p className='py-2 px-4'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp
                                speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re
                                dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. </p>
                        </div>
                        <div className='tw-bg-[#F2F8F7]' id="box2">
                            <h4 className='py-2 pt-4 px-4'>Title goes here</h4>
                            <p className='py-2 px-4'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp
                                speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re
                                dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. </p>
                        </div>
                        <div className='tw-bg-[#F2F8F7]' id="box3">
                            <h4 className='py-2 pt-4 px-4'>Title goes here</h4>
                            <p className='py-2 px-4'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp
                                speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re
                                dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. </p>
                        </div>

                    </div>
                    <div className='my-3'>
                        <div className='row '>
                            <div className='col-4 tw-self-center'>   <hr /></div>


                            <div className='col-4'>  <div className='tw-flex tw-justify-evenly tw-self-center tw-gap-3'>
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.45929 13.7499C7.72529 13.75 7.00776 13.5324 6.39745 13.1246C5.78713 12.7169 5.31144 12.1373 5.03054 11.4592C4.74965 10.781 4.67616 10.0349 4.81937 9.31497C4.96259 8.59508 5.31607 7.93383 5.83512 7.41485L9.6645 3.58697C10.3605 2.89099 11.3044 2.5 12.2887 2.5C13.2729 2.5 14.2169 2.89099 14.9128 3.58697C15.6088 4.28294 15.9998 5.22688 15.9998 6.21114C15.9998 7.19539 15.6088 8.13933 14.9128 8.83531L14.4981 9.24929L13.4369 8.18958L13.8546 7.77184C14.2678 7.35671 14.4995 6.7947 14.4989 6.20902C14.4983 5.62333 14.2656 5.06177 13.8516 4.64743C13.4303 4.24536 12.8703 4.02102 12.2879 4.02102C11.7055 4.02102 11.1455 4.24536 10.7242 4.64743L6.89634 8.47532C6.69084 8.68058 6.52782 8.92434 6.4166 9.19265C6.30537 9.46096 6.24812 9.74857 6.24812 10.039C6.24812 10.3295 6.30537 10.6171 6.4166 10.8854C6.52782 11.1537 6.69084 11.3975 6.89634 11.6027C7.31765 12.0048 7.87765 12.2291 8.46004 12.2291C9.04242 12.2291 9.60243 12.0048 10.0237 11.6027L11.0842 12.6632C10.7402 13.0089 10.3311 13.2829 9.88058 13.4694C9.43001 13.656 8.94693 13.7513 8.45929 13.7499Z" fill="#999999" stroke="#999999" stroke-width="0.3" />
                                    <path d="M14.4593 12.2499C13.7253 12.25 13.0078 12.0324 12.3974 11.6246C11.7871 11.2169 11.3114 10.6373 11.0305 9.95916C10.7496 9.28104 10.6762 8.53485 10.8194 7.81496C10.9626 7.09508 11.3161 6.43383 11.8351 5.91485L12.2499 5.50086L13.3103 6.56208L12.8963 6.97607C12.4817 7.3907 12.2488 7.95304 12.2488 8.53939C12.2488 9.12575 12.4817 9.6881 12.8963 10.1027C13.3177 10.5048 13.8777 10.7291 14.46 10.7291C15.0424 10.7291 15.6024 10.5048 16.0237 10.1027L19.8524 6.27409C20.2662 5.8592 20.4986 5.29713 20.4986 4.71114C20.4986 4.12515 20.2662 3.56307 19.8524 3.14818C19.4311 2.74611 18.8711 2.52177 18.2887 2.52177C17.7063 2.52177 17.1463 2.74611 16.725 3.14818L15.6645 2.08697C16.3605 1.39099 17.3044 1 18.2887 1C19.2729 1 20.2169 1.39099 20.9128 2.08697C21.6088 2.78294 21.9998 3.72688 21.9998 4.71114C21.9998 5.69539 21.6088 6.63933 20.9128 7.33531L17.085 11.1624C16.741 11.5082 16.3319 11.7823 15.8814 11.969C15.4308 12.1556 14.9477 12.2511 14.46 12.2499H14.4593Z" fill="#999999" stroke="#999999" stroke-width="0.3" />
                                    <path d="M17.4995 21.9995H2.49995C2.10226 21.9991 1.72097 21.8409 1.43976 21.5597C1.15856 21.2785 1.0004 20.8972 1 20.4995V5.49995C1.0004 5.10226 1.15856 4.72098 1.43976 4.43977C1.72097 4.15856 2.10226 4.0004 2.49995 4H5.49986V5.49995H2.49995V20.4995H17.4995V12.9997H18.9995V20.4995C18.9991 20.8972 18.8409 21.2785 18.5597 21.5597C18.2785 21.8409 17.8972 21.9991 17.4995 21.9995Z" fill="#999999" stroke="#999999" stroke-width="0.3" />
                                </svg>
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.6673 10.0609C21.6673 4.50304 17.005 0 11.2507 0C5.49628 0 0.833984 4.50304 0.833984 10.0609C0.833984 15.0824 4.64321 19.2446 9.62305 20V12.9692H6.97688V10.0609H9.62305V7.84422C9.62305 5.32292 11.1771 3.93022 13.5574 3.93022C14.6974 3.93022 15.8894 4.12657 15.8894 4.12657V6.60122H14.5756C13.2819 6.60122 12.8783 7.37688 12.8783 8.17241V10.0609H15.7672L15.3052 12.9692H12.8783V20C17.8581 19.2446 21.6673 15.0824 21.6673 10.0609Z" fill="#999999" />
                                </svg>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.834" cy="10" r="10" fill="#00AAA1" />
                                    <path d="M17.1971 7.44042C16.7622 7.62294 16.2949 7.74629 15.8045 7.80179C16.3051 7.51776 16.6896 7.06799 16.8706 6.5321C16.3946 6.79943 15.8739 6.98778 15.3309 7.08901C14.8886 6.643 14.2585 6.36426 13.5611 6.36426C12.222 6.36426 11.1364 7.39183 11.1364 8.6592C11.1364 8.8391 11.1579 9.01424 11.1992 9.18225C9.18408 9.08651 7.39751 8.17286 6.20161 6.78436C5.99294 7.12331 5.87338 7.51759 5.87338 7.93812C5.87338 8.73436 6.30146 9.43679 6.95202 9.84837C6.56698 9.83695 6.19041 9.73852 5.85376 9.56128C5.85362 9.57089 5.85362 9.5805 5.85362 9.59016C5.85362 10.7021 6.68939 11.6297 7.79854 11.8405C7.4415 11.9324 7.06698 11.9459 6.7036 11.8799C7.01212 12.7916 7.90758 13.4551 8.96854 13.4737C8.13873 14.0892 7.09324 14.4561 5.9573 14.4561C5.76157 14.4561 5.5686 14.4453 5.37891 14.4241C6.45191 15.0752 7.72639 15.4552 9.09563 15.4552C13.5555 15.4552 15.9942 11.9581 15.9942 8.92536C15.9942 8.82582 15.9919 8.72685 15.9872 8.62844C16.4619 8.30364 16.8716 7.90134 17.1971 7.44042Z" fill="white" />
                                </svg>

                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.7364 5.90309C20.7252 5.06334 20.568 4.23193 20.2718 3.44606C20.015 2.78318 19.6227 2.18117 19.12 1.67849C18.6173 1.17581 18.0153 0.783514 17.3524 0.526666C16.5767 0.235455 15.7571 0.0779923 14.9287 0.0609825C13.862 0.0133053 13.5239 0 10.8162 0C8.10863 0 7.76158 7.43489e-08 6.70271 0.0609825C5.87463 0.0781174 5.05546 0.235578 4.28004 0.526666C3.61706 0.783335 3.01496 1.17557 2.51226 1.67827C2.00955 2.18097 1.61732 2.78308 1.36065 3.44606C1.06886 4.22124 0.911735 5.04059 0.896076 5.86872C0.848398 6.93647 0.833984 7.27464 0.833984 9.98226C0.833984 12.6899 0.833984 13.0358 0.896076 14.0958C0.912707 14.9252 1.06904 15.7434 1.36065 16.5207C1.61775 17.1835 2.01027 17.7853 2.51315 18.2878C3.01602 18.7903 3.61818 19.1824 4.28115 19.439C5.05445 19.7419 5.87376 19.9106 6.70382 19.9379C7.77156 19.9856 8.10974 20 10.8174 20C13.525 20 13.872 20 14.9309 19.9379C15.7593 19.9216 16.5789 19.7645 17.3547 19.4733C18.0174 19.2162 18.6192 18.8238 19.1219 18.3211C19.6245 17.8185 20.0169 17.2166 20.2741 16.5539C20.5657 15.7778 20.722 14.9595 20.7386 14.1291C20.7863 13.0624 20.8007 12.7242 20.8007 10.0155C20.7985 7.30791 20.7985 6.96419 20.7364 5.90309ZM10.8096 15.1026C7.97779 15.1026 5.68375 12.8085 5.68375 9.97672C5.68375 7.14492 7.97779 4.85087 10.8096 4.85087C12.1691 4.85087 13.4728 5.39091 14.4341 6.3522C15.3954 7.31348 15.9354 8.61726 15.9354 9.97672C15.9354 11.3362 15.3954 12.64 14.4341 13.6012C13.4728 14.5625 12.1691 15.1026 10.8096 15.1026ZM16.1395 5.85653C15.9824 5.85667 15.827 5.82586 15.6819 5.76584C15.5368 5.70582 15.405 5.61779 15.294 5.50677C15.1829 5.39575 15.0949 5.26393 15.0349 5.11885C14.9749 4.97377 14.9441 4.81828 14.9442 4.66127C14.9442 4.50438 14.9751 4.34903 15.0351 4.20408C15.0952 4.05913 15.1832 3.92743 15.2941 3.81649C15.4051 3.70555 15.5368 3.61755 15.6817 3.55751C15.8267 3.49747 15.982 3.46657 16.1389 3.46657C16.2958 3.46657 16.4511 3.49747 16.5961 3.55751C16.741 3.61755 16.8727 3.70555 16.9837 3.81649C17.0946 3.92743 17.1826 4.05913 17.2427 4.20408C17.3027 4.34903 17.3336 4.50438 17.3336 4.66127C17.3336 5.3221 16.7992 5.85653 16.1395 5.85653Z" fill="#999999" />
                                    <path d="M10.8101 13.3058C12.649 13.3058 14.1397 11.815 14.1397 9.97612C14.1397 8.13721 12.649 6.64648 10.8101 6.64648C8.9712 6.64648 7.48047 8.13721 7.48047 9.97612C7.48047 11.815 8.9712 13.3058 10.8101 13.3058Z" fill="#999999" />
                                </svg>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.800781 9.99988C0.800781 14.0946 3.26312 17.6123 6.78662 19.1589C6.75849 18.4607 6.78162 17.6224 6.96068 16.8627C7.15294 16.0509 8.24739 11.4138 8.24739 11.4138C8.24739 11.4138 7.92794 10.7753 7.92794 9.83161C7.92794 8.34969 8.78684 7.24293 9.85653 7.24293C10.7661 7.24293 11.2056 7.92611 11.2056 8.74422C11.2056 9.65856 10.6224 11.0263 10.3225 12.293C10.0719 13.3538 10.8543 14.219 11.9008 14.219C13.7955 14.219 15.0716 11.7855 15.0716 8.90234C15.0716 6.71068 13.5954 5.07025 10.9105 5.07025C7.87708 5.07025 5.98732 7.33238 5.98732 9.85918C5.98732 10.7304 6.2442 11.3448 6.64654 11.8205C6.83154 12.039 6.85724 12.1269 6.79029 12.3779C6.74232 12.5618 6.63216 13.0048 6.58654 13.1803C6.51998 13.4336 6.31474 13.5242 6.08584 13.4306C4.68866 12.8603 4.03796 11.3302 4.03796 9.61028C4.03796 6.76966 6.43373 3.3635 11.185 3.3635C15.0029 3.3635 17.5158 6.12624 17.5158 9.09186C17.5158 13.0146 15.3349 15.9453 12.12 15.9453C11.0404 15.9453 10.0249 15.3617 9.677 14.6988C9.677 14.6988 9.09645 17.0028 8.97348 17.4477C8.76145 18.2187 8.34645 18.9893 7.967 19.5899C8.88712 19.862 9.84163 20.0001 10.8011 20C16.3233 20 20.8008 15.5229 20.8008 9.99988C20.8008 4.47714 16.3233 0 10.8011 0C5.27842 0 0.800781 4.47714 0.800781 9.99988Z" fill="#999999" />
                                </svg>
                            </div></div>
                            <div className='col-4  tw-self-center'>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className='my-3'>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9993 4.30355e-08C14.5827 -5.74862e-05 15.1568 0.145612 15.6696 0.42378C16.1824 0.701948 16.6175 1.1038 16.9355 1.59285C17.2535 2.08189 17.4444 2.64263 17.4907 3.22415C17.5369 3.80566 17.4372 4.38953 17.2006 4.92272C16.9639 5.45592 16.5978 5.92154 16.1355 6.27732C15.6732 6.63309 15.1293 6.86775 14.5533 6.95997C13.9773 7.05218 13.3874 6.99905 12.8371 6.80538C12.2868 6.61172 11.7936 6.28366 11.4023 5.851L6.84435 8.455C7.05783 9.13634 7.05783 9.86666 6.84435 10.548L11.4013 13.154C11.9807 12.5138 12.7763 12.1102 13.6351 12.0207C14.4939 11.9313 15.3555 12.1623 16.0544 12.6693C16.7533 13.1764 17.2403 13.9238 17.4217 14.768C17.6032 15.6122 17.4663 16.4937 17.0375 17.2431C16.6086 17.9926 15.918 18.5572 15.0983 18.8285C14.2786 19.0998 13.3875 19.0587 12.5962 18.7131C11.8049 18.3675 11.1692 17.7417 10.8111 16.956C10.4531 16.1702 10.398 15.2799 10.6563 14.456L6.09935 11.849C5.62472 12.3738 5.00224 12.7425 4.31392 12.9066C3.6256 13.0706 2.90373 13.0223 2.24341 12.768C1.58309 12.5137 1.01529 12.0653 0.614822 11.482C0.214354 10.8986 0 10.2076 0 9.5C0 8.7924 0.214354 8.1014 0.614822 7.51803C1.01529 6.93466 1.58309 6.48629 2.24341 6.23198C2.90373 5.97768 3.6256 5.92937 4.31392 6.09342C5.00224 6.25747 5.62472 6.62619 6.09935 7.151L10.6563 4.547C10.4924 4.02263 10.4541 3.46704 10.5446 2.92515C10.6351 2.38325 10.8519 1.87025 11.1773 1.4276C11.5027 0.984959 11.9277 0.625093 12.418 0.377093C12.9082 0.129092 13.4499 -8.60801e-05 13.9993 4.30355e-08ZM13.9993 13.5C13.4684 13.5 12.9592 13.7109 12.5837 14.0864C12.2083 14.4618 11.9973 14.971 11.9973 15.502C11.9973 16.033 12.2083 16.5422 12.5837 16.9176C12.9592 17.2931 13.4684 17.504 13.9993 17.504C14.5303 17.504 15.0395 17.2931 15.415 16.9176C15.7904 16.5422 16.0013 16.033 16.0013 15.502C16.0013 14.971 15.7904 14.4618 15.415 14.0864C15.0395 13.7109 14.5303 13.5 13.9993 13.5ZM3.50135 7.5C2.97038 7.5 2.46117 7.71092 2.08572 8.08637C1.71027 8.46182 1.49935 8.97104 1.49935 9.502C1.49935 10.033 1.71027 10.5422 2.08572 10.9176C2.46117 11.2931 2.97038 11.504 3.50135 11.504C4.03231 11.504 4.54153 11.2931 4.91697 10.9176C5.29242 10.5422 5.50335 10.033 5.50335 9.502C5.50335 8.97104 5.29242 8.46182 4.91697 8.08637C4.54153 7.71092 4.03231 7.5 3.50135 7.5ZM13.9993 1.5C13.4684 1.5 12.9592 1.71092 12.5837 2.08637C12.2083 2.46182 11.9973 2.97104 11.9973 3.502C11.9973 4.03296 12.2083 4.54218 12.5837 4.91763C12.9592 5.29308 13.4684 5.504 13.9993 5.504C14.5303 5.504 15.0395 5.29308 15.415 4.91763C15.7904 4.54218 16.0013 4.03296 16.0013 3.502C16.0013 2.97104 15.7904 2.46182 15.415 2.08637C15.0395 1.71092 14.5303 1.5 13.9993 1.5Z" fill="black" />
                        </svg>
                    </div>
                    <h2 className='my-3'><span className='tw-bg-[#00AAA1] tw-text-white'>See related</span> posts</h2>
                    <div className='my-3'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='tw-h-[262px] tw-w-full tw-bg-[#D9D9D9] tw-rounded-lg'></div>
                                <div className='my-4'>
                                    <p><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                                    <h1 className='my-2'>set video playback speed
                                        with javascript</h1>
                                    <div className='my-2'>
                                        <UserDetails />
                                    </div>
                                    <p className='my-2'>Did you come here for something in particular or just general Riker-bashing</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='tw-h-[262px] tw-w-full tw-bg-[#D9D9D9] tw-rounded-lg'></div>
                                <div className='my-4'>
                                    <p><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                                    <h1 className='my-2'>set video playback speed
                                        with javascript</h1>
                                    <div className='my-2'>
                                        <UserDetails />
                                    </div>
                                    <p className='my-2'>Did you come here for something in particular or just general Riker-bashing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-3'>
                        <img src={comment} alt="" />
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <TopAuthors />
                    <Ads />
                    <Categories />
                    <TodaysUpdate />
                    <InstaPost />
                    <SearchTag />
                </div>
            </div>
        </div >
    )
}

export default SingleBlog
