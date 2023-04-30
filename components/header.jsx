import React, {useState , useEffect} from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';


const Header = () => {
  const[mobileMenu , setMobileMenu] = useState(false);
  const[showCatMenu , setCatMenu] = useState(false);
  const[show , setShow] = useState("translate-y-0");
  const[lastScrollY , setLastScrollY] = useState(0);

  return (
    <header className={`w-full h-[20px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>

        <Wrapper>
          <Link href="/"> {/*When we click at the logo then retun to the home page*/}
          <img src='/logo.svg' className='w-[40px] md:w-[60px]'/>
        </Link>

        <Menu
          showCatMenu={showCatMenu}
          setCatMenu="{setCatMenu}"
        />
        </Wrapper>
      
      </header>
  )
}

export default Header