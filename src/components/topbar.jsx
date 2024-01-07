import React from 'react'
import { useState } from 'react';
import logo from '../assets/firstlearn_logo.png'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineClass } from "react-icons/md";
import { FaWpforms } from "react-icons/fa6";
import { GoDiscussionClosed } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { Link } from 'react-router-dom';





export const Topbar=()=> {
    const [username,setUsername]=useState("Ayushman");
    const [loginState,setLoginState]=useState([]);
    const [menuVisible,setMenuVisible]=useState(true);

 

        const [isOpen, setIsOpen] = useState(false)
        const toggleDrawer = () => {
            setIsOpen((prevState) => !prevState)
        }

        

return(
<>
<nav >
  
    <div className="flex bg-yellow-300 static justify-between py-5">
        {/* Logo Div */}
        <div className='flex'>
            <button className='sm:px-8 px-3' onClick={toggleDrawer}><RxHamburgerMenu size={30}/></button>
            <a href='/'><img src={logo} width="50px"  alt='logo'></img></a>
        </div>
        {/* Greeting Div */}
        <div>
        <h1 className='text-2xl font-semibold'>{`Hii, ${username}`}</h1>
        </div>
        {/* Menu Div */}
        <div className='flex flex-row'>
<ul className='flex flex-row'>
    <li className='sm:px-8 px-3' > <button><IoMdNotificationsOutline size={30} /></button></li>
    <li className='sm:px-8 px-3'><button><VscAccount size={30}/></button></li>
</ul>
        </div>
    </div>
    
</nav>
<Drawer  open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                >
<div className='bg-yellow-300 h-full w-80 py-10 px-10' >
    <div className='flex flex-row'>
        <button onClick={toggleDrawer}><IoMdClose size={30}/></button>
    
    <h1 className='px-10 font-bold text-xl py-0.5'>First Learn</h1>
    </div>
    <Link to="/" className='py-8 pt-14 flex flex-row ' onClick={toggleDrawer}>
    
    <RxDashboard size={30}/>
    <h1 className='px-10 font-bold text-xl py-0.5 hover:cursor-pointer'>Dashboard</h1>
    </Link>
    <Link to="/batch" className='py-8  flex flex-row' onClick={toggleDrawer}>
    <SiGoogleclassroom size={30}/>
    <h1 className='px-10 font-bold text-xl py-0.5 hover:cursor-pointer'>Batches</h1>
    </Link>
    <div className='py-8  flex flex-row' onClick={toggleDrawer}>
    <MdOutlineClass size={30} />
    <h1 className='px-10 font-bold text-xl py-0.5 hover:cursor-pointer'>Assignments</h1>
    </div>
    <div className='py-8 flex flex-row' onClick={toggleDrawer}>
    <FaWpforms size={30} />
    <h1 className='px-10 font-bold text-xl py-0.5 hover:cursor-pointer'>Attendance</h1>
    </div>
    <div className='py-8 flex flex-row' onClick={toggleDrawer}>
    <GoDiscussionClosed  size={30}/>
    <h1 className='px-10 font-bold text-xl py-0.5 hover:cursor-pointer'>Discussion</h1>
    </div>
    </div>
</Drawer>
</>
)
}

