import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed z-[990] w-full h-[50px] flex justify-between items-center px-4 bg-white border-y-8 border-[#ffdede]'>
    {/* F6EEEE */}
        <div className='cursor-pointer'>
        <Link to="home" smooth={true} duration={500}>
            <img src={Logo} alt="Logo" style={{width:'80px'}} />
        </Link>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li className='hover:bg-black hover:text-white rounded-lg transition-colors'>
            <Link to="home" smooth={true} duration={500}>
            Home
            </Link>    
            </li>
            <li className='hover:bg-black hover:text-white rounded-lg transition-colors'>
            <Link to="work" smooth={true} duration={500}>
            Portfolio
            </Link>     
            </li>
            <li className='hover:bg-black hover:text-white rounded-lg transition-colors'>
            <Link to="posts" smooth={true} duration={500}>
            Blog
            </Link>     
            </li>
            <li className='hover:bg-black hover:text-white rounded-lg transition-colors'>
            <Link to="about" smooth={true} duration={500}>
            About
            </Link>     
            </li>
            <li className='hover:bg-black hover:text-white rounded-lg transition-colors'>
            <Link to="contact" smooth={true} duration={500}>
            Contact
            </Link>     
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 right-0 w-[70%] h-screen bg-[#ffdede] flex flex-col justify-center items-center backdrop-blur-sm backdrop-opacity-10'} >
            <li className='py-6 text-3xl hover:bg-black hover:text-white rounded-lg transition-colors'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
            </Link> 
            </li>
            <li className='py-6 text-3xl hover:bg-black hover:text-white rounded-lg transition-colors'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Portfolio
            </Link>     
            </li>
            <li className='py-6 text-3xl hover:bg-black hover:text-white rounded-lg transition-colors'>
            <Link onClick={handleClick} to="posts" smooth={true} duration={500}>
            Blog
            </Link>     
            </li>
            <li className='py-6 text-3xl hover:bg-black hover:text-white rounded-lg transition-colors'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
            </Link>     
            </li>
            <li className='py-6 text-3xl hover:bg-black hover:text-white rounded-lg transition-colors'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
            </Link>
            </li>
            <li className='py-6 text-3xl hover:bg-black hover:text-white rounded-lg transition-colors'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
            </Link>     
            </li>
        </ul>

        {/* Social icons */}
        {/* <div className='hidden lg:flex fixed flex-col top-[65%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href='https://www.linkedin.com/in/raphael-pang-tx/'>
                    Linkedin <FaLinkedin size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href='https://github.com/tengxuanp'>
                    Github <FaGithub size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <Link className='flex justify-between items-center w-full text-gray-300' 
                to='contact' smooth={true} duration={500}>
                    Email <HiOutlineMail size={30} />
                </Link>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565869]'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href='/resume.pdf' target="_blank" download>
                    Resume <BsFillPersonLinesFill size={30} />
                </a>
            </li>

        </ul>
        </div> */}
    </div>
  )
}

export default Navbar