import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from '../Pages/Error/Error'
import Faq from '../Pages/Faq/Faq'
import Categories from '../Pages/Categories/Categories'
import Search from '../Pages/Search/Search'
import ContactUs from '../Pages/Contact/ContactUs'
import WriteBlog from '../Pages/WriteBlog/WriteBlog'
import PageLayout from '../Component/PageLayout/PageLayout'
import Home from '../Pages/HomePage/Home'
import AboutUs from '../Pages/AboutUs/AboutUs'
import AboutAuthor from '../Pages/AboutAuthor/AboutAuthor'
import SingleBlog from '../Pages/SingleBlog/SingleBlog'
import Login from '../Component/Login/Login'
import Register from '../Component/Register/Register'
import AllBlog from '../Pages/AllBlog/AllBlog'
import AllComment from '../Component/AllComment/AllComment'
const Routers = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        const isLoggedIn = checkLoginStatus();
        setLoggedIn(isLoggedIn);
    }, [loggedIn]);

    const checkLoginStatus = () => {
        const authInfo = localStorage.getItem('token');
        return !!authInfo;
    };
    return (
        <Routes>
            <Route path='/' element={<PageLayout login={loggedIn} onLogin={setLoggedIn} />}>
                {loggedIn ?
                    <Route path="/" element={<Home />} />
                    :
                    <Route path="/" element={<Login login={loggedIn} onLogin={setLoggedIn} />} />
                }
                <Route path="/about" element={<AboutUs />} />
                <Route path="/about/aboutauthor" element={<AboutAuthor />} />
                <Route path="/singleblog/:id?" element={<SingleBlog />} />
                <Route path="/writeblog/:id?" element={<WriteBlog />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/search" element={<Search />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/faq" element={<Faq />} />
                <Route path='/error' element={<Error />} />
                <Route path='/allblog/:id?' element={<AllBlog />} />
                <Route path='/allcomment/:id?' element={<AllComment />} />

                <Route path='/register' element={<Register />} />
            </Route>
        </Routes>
    )
}

export default Routers
