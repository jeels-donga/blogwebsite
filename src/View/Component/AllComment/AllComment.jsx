import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const AllComment = () => {
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const token = localStorage.getItem("token");
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.post(`http://localhost:1000/v1/getAllComment?id=${id}`, {
                    "blogId": id,
                    "perPage": 10,
                    "page": 1
                },
                    { headers: { Authorization: `Bearer ${token}` } });
                setComments(response.data.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, []);
    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {console.log(comments)}
                {comments.map((e, i) => {
                    return (
                        <div key={i}>
                            <li>{e.content}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default AllComment
