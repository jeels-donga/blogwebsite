import React, { useEffect, useState } from 'react'
import UserDetails from '../UserDetails'
import axios from 'axios'

const RecentPost = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Function to fetch the blog data
        const fetchBlogs = async () => {
            try {
                // Make GET request to the blog API
                const response = await axios.get('https://api.example.com/blogs');
                // Set the blog data in the state
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };
        fetchBlogs();
        return () => {
        };
    }, []);
    // useEffect(() => {
    //     axios.get('https://api.example.com/blogs')
    //         .then(response => {
    //             setBlogs(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching blogs:', error);
    //         });
    // }, []);
    const [data, setData] = useState(
        [
            {
                id: 1,
                title: "Design is the Mix of emotions",
                passage: "Did you come here for something in particular or just general Riker-bashing? And blowing into"
            },
            {
                id: 2,
                title: "Design is the Mix of emotions",
                passage: "Did you come here for something in particular or just general Riker-bashing? And blowing into"
            },
            {
                id: 3,
                title: "I Created a Developer Rap Video - Here's What I Learned",
                passage: "Did you come here for something in particular or just general Riker-bashing? And blowing into"
            },

        ]
    )
    const [data1, setData1] = useState(
        [
            {
                id: 4,
                title: "Design is the Mix of emotions",
                passage: "Did you come here for something in particular or just general Riker-bashing? And blowing into"
            },
            {
                id: 5,
                title: "Design is the Mix of emotions try to feel it",
                passage: "Did you come here for something in particular or just general Riker-bashing? And blowing into"
            },
            {
                id: 6,
                title: "Design is the Mix of emotions",
                passage: "Did you come here for something in particular or just general Riker-bashing? And blowing into"
            },
            {
                id: 7,
                title: "Design is the Mix of emotions",
                passage: "Did you come here for something in particular or just general Riker-bashing? And blowing into"
            },
            {
                id: 8,
                title: "Design is the Mix of emotions",
                passage: "Did you come here for something in particular or just general Riker-bashing? And blowing into"
            },
            {
                id: 9,
                title: "I Created a Developer Rap Video - Here's What I Learned",
                passage: "Did you come here for something in particular or just general Riker-bashing? And blowing into"
            },

        ]
    )
    return (
        <>
            <div>
                <h1>Blog Posts</h1>
                <ul>
                    {/* Render the list of blog posts */}
                    {blogs.map(blog => (
                        <li key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>{blog.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
            {data.map((e, i) => {
                return (
                    <div key={i}>
                        <div className='md:tw-flex block  tw-gap-5 tw-my-5'>
                            <div>
                                <svg width="266" height="180" viewBox="0 0 266 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="266" height="180" rx="5" fill="#D9D9D9" />
                                </svg>
                            </div>
                            <div>
                                <p><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                                <h1>{e.title}</h1>
                                <UserDetails />
                                <p className='tw-my-2 tw-text-[15px]'>{e.passage}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className='tw-my-5 tw-flex tw-justify-center tw-bg-[#F2F8F7] tw-rounded-md tw-py-[8%]'>
                <div>
                    <h3>Share your knowledge with our readers</h3>
                    <div className='tw-flex tw-justify-center'>
                        <div className='tw-flex tw-self-center tw-border tw-px-4 tw-py-2 tw-mt-3 tw-rounded-md tw-border-[#00AAA1]'>
                            <svg className='m-1' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.357 0.351803L13.7436 0.738392C14.2763 1.27175 14.1957 2.21726 13.5621 2.85022L5.58982 10.8225L3.00688 11.7673C2.68253 11.8866 2.36671 11.7319 2.3025 11.4233C2.2808 11.3114 2.29101 11.1956 2.33198 11.0892L3.29518 8.48393L11.2452 0.533303C11.8788 -0.0996548 12.8243 -0.180904 13.357 0.352458V0.351803ZM5.24189 1.14464C5.32793 1.14464 5.41314 1.16159 5.49263 1.19451C5.57213 1.22744 5.64436 1.27571 5.70521 1.33655C5.76605 1.3974 5.81432 1.46963 5.84724 1.54913C5.88017 1.62862 5.89712 1.71383 5.89712 1.79987C5.89712 1.88592 5.88017 1.97112 5.84724 2.05062C5.81432 2.13012 5.76605 2.20235 5.70521 2.2632C5.64436 2.32404 5.57213 2.3723 5.49263 2.40523C5.41314 2.43816 5.32793 2.45511 5.24189 2.45511H2.62094C2.27338 2.45511 1.94006 2.59318 1.6943 2.83894C1.44854 3.0847 1.31047 3.41802 1.31047 3.76558V11.6284C1.31047 11.976 1.44854 12.3093 1.6943 12.5551C1.94006 12.8008 2.27338 12.9389 2.62094 12.9389H10.4838C10.8313 12.9389 11.1647 12.8008 11.4104 12.5551C11.6562 12.3093 11.7942 11.976 11.7942 11.6284V9.00747C11.7942 8.83369 11.8633 8.66703 11.9862 8.54414C12.109 8.42126 12.2757 8.35223 12.4495 8.35223C12.6233 8.35223 12.7899 8.42126 12.9128 8.54414C13.0357 8.66703 13.1047 8.83369 13.1047 9.00747V11.6284C13.1047 12.3235 12.8286 12.9902 12.3371 13.4817C11.8455 13.9732 11.1789 14.2494 10.4838 14.2494H2.62094C1.92583 14.2494 1.25918 13.9732 0.767656 13.4817C0.276134 12.9902 0 12.3235 0 11.6284V3.76558C0 3.07046 0.276134 2.40382 0.767656 1.91229C1.25918 1.42077 1.92583 1.14464 2.62094 1.14464H5.24189Z" fill="#00AAA1" />
                            </svg>
                            <p className='tw-text-[#00AAA1] tw-text-[17px]'>Write on notebook</p>
                        </div>
                    </div>
                </div>
            </div>
            {data1.map((e, i) => {
                return (
                    <div key={i}>
                        <div className='md:tw-flex tw-block  tw-gap-5 tw-my-5'>
                            <div>
                                <svg width="266" height="180" viewBox="0 0 266 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="266" height="180" rx="5" fill="#D9D9D9" />
                                </svg>
                            </div>
                            <div>
                                <p><span className='tw-bg-[#DFF1F0] tw-px-2 tw-py-1 tw-rounded-md tw-text-[12px] tw-my-2'> Travel</span></p>
                                <h1>{e.title}</h1>
                                <UserDetails />
                                <p className='tw-my-2 tw-text-[15px]'>{e.passage}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default RecentPost
