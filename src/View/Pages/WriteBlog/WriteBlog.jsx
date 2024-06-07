import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const WriteBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isCreateMode, setIsCreateMode] = useState(true);
    const token = localStorage.getItem("token");
    const { id } = useParams();
    console.log(isCreateMode);
    useEffect(() => {
        if (id) {
            fetchBlog();
            setIsCreateMode(false);
        }
    }, [id]);

    const fetchBlog = async () => {
        try {
            const response = await axios.get(
                `http://localhost:1000/v1/blog?id=${id}`,
                { headers: { Authorization: `Bearer ${token}` } })
            // console.log(response.data.data);
            const { title, content } = response.data.data;
            setTitle(title);
            setContent(content);
        } catch (error) {
            console.error('Error fetching blog:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isCreateMode) {
                const response = await axios.post(
                    'http://localhost:1000/v1/blogCreate',
                    { title, content },
                    { headers: { Authorization: `Bearer ${token}` } })
                console.log('Blog created successfully:', response.data.data);
            } else {
                const response = await axios.post(
                    `http://localhost:1000/v1/blogUpdate`,
                    { title, content, id },
                    { headers: { Authorization: `Bearer ${token}` } })
                console.log('Blog updated successfully:', response.data.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Enter Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">
                    {isCreateMode ? 'Create Blog' : 'Update Blog'}
                </button>
            </form>
            <div className='tw-bg-[#F2F8F7] tw-mb-[5%] tw-py-[5%]'>
                <div className='container'>
                    <div className='tw-mb-10'>
                        <h1 className='text-center tw-mb-5'><span className='tw-bg-[#00AAA1] tw-text-white'>Write on </span> notebook</h1>
                        <h5 className='text-center  tw-my-5'>Write on notebook is very simple</h5>
                        <h5 className='text-center  tw-my-5'>Go to your mail and start  typing your article with title & categories, attached your image/video file (if have).</h5>
                        <div className='tw-my-5'>
                            <h5 className='text-center'>type your personal information.</h5>
                            <h5 className='text-center'>(Name, Occupation, Address, Social media links)</h5>
                        </div>
                        <h5 className='text-center tw-my-5'>Send it on: <span>blog.notebook@gmail.com</span></h5>
                    </div>
                </div>
                <div className='tw-flex tw-justify-center'>
                    <button className='tw-text-[15px] tw-text-[#00AAA1] tw-border tw-border-[#00AAA1] tw-py-3 tw-px-6 tw-rounded-md'>Go to your mail</button>
                </div>
            </div>
            <div className='tw-mx-[8%] tw-mb-[5%]'>
                <h1 className='text-center tw-my-10'><span className='tw-bg-[#00AAA1] tw-text-white'>How can you earn</span>  by writing on medium</h1>
                <div className='row mb-5'>
                    <div className='col-lg-6 col-12'>
                        <div>
                            <h3 className='text-center my-3'>by ad  revinue</h3>
                            <h6 className='text-center'>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities. </h6>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div>
                            <h3 className='text-center my-3'>by affiliate  programme</h3>
                            <h6 className='text-center '>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities. Authoritatively target proactive vortals vis-a-vis exceptional results. Compellingly brand</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-center tw-my-5'>want to know more?</h3>
                    <p className='text-center tw-text-[#00AAA1]'><Link to={"/faq"}>Go to FEQ page <span>&#8594;</span></Link></p>
                </div>
            </div >
        </>
    )
}

export default WriteBlog
