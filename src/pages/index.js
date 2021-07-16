import React , {useState} from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'

const Home = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toogle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toogle={toogle}/>
            <Navbar toogle={toogle}/>
        </>
    )
}

export default Home
