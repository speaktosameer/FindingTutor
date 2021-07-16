import React , {useState} from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignUp from '../components/Authentication/SignUp'

const Home = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toogle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toogle={toogle}/>
            <Navbar toogle={toogle}/>
            <SignUp/>
            <Footer/>
        </>
    )
}

export default Home
