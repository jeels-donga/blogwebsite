import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AllBlog = () => {
    const [blogs, setBlogs] = useState([]); // Ensure blogs state is initialized as an empty array
    const token = localStorage.getItem("token");
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.post('http://localhost:1000/v1/allblog', {
                    "page": 1,
                    "perPage": 10
                });
                setBlogs(response.data.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, [blogs]);

    const handleDelete = (blogId) => {
        // console.log(blogId);
        axios.delete(`http://localhost:1000/v1/blogDelete?id=${blogId}`,
            { headers: { Authorization: `Bearer ${token}` } })
            .then(response => {
                // Remove the deleted blog from state
                setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== blogId));
                // console.log(response.data);
            })
            .catch(error => {
                console.error('Error deleting blog:', error);
            });
    }

    return (
        <div className='container tw-my-[5%]'>
            <h3><span className='text-white tw-bg-[#00AAA1]'>Recently</span> Posted</h3>
            {blogs?.map(blog => (
                <div key={blog._id}>

                    <div className='tw-flex tw-gap-3'>
                        <Link to={`/singleblog/${blog._id}`}>
                            <div>
                                <div className='tw-w-full'>
                                    <svg className='tw-w-full' height="180" viewBox="0 0 266 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect className='tw-w-full' height="180" rx="5" fill="#D9D9D9" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                        <div className='tw-w-full'>
                            <div className='tw-my-3'>
                                {/* <Travel /> */}
                            </div>
                            <h2 className='tw-my-3'>{blog.title}</h2>
                            <p className='tw-my-3'>{blog.content}</p>
                        </div>

                    </div>
                    <button className='tw-border'><Link to={`/writeblog/${blog._id}`}>update</Link></button>
                    <button className=' tw-border' onClick={() => handleDelete(blog._id)}>Delete</button>
                </div >
            ))
            }
        </div >
    )
}

export default AllBlog
