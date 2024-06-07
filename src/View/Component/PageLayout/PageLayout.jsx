import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const PageLayout = (props) => {
    return (
        <div>
            <Header login={props.login} onLogin={props.onLogin} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PageLayout
