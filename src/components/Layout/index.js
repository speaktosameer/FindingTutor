import React , {useState} from 'react'
import Sidebar from '../SideBar'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toogle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toogle={toogle}/>
            <Navbar toogle={toogle}/>
            <Footer/>
        </>
    )
}

export default Layout
