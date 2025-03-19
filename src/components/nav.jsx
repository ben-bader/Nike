import {useState}from 'react'
import {headerLogo }from '../assets/images/index'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants/index'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
const NavBar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
  return (
    
      <header className='padding-x py-8 absolute z-10 w-full' >
        <nav className='flex justify-between items-center max-container'>
          <a href="/">
          <img src={headerLogo} alt="header Logo" 
          width={130}
          height={29}
          
          />
         </a>
          <ul className='flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
              <li key={item}>
                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
         <div className='hidden max-sm:block'>  {toggleMenu ?
         <RiCloseLine color="#000" size={27} onClick={()=>setMenuToggle(false)}/>
          :<RiMenu3Line color="#000" size={27} onClick={()=>setMenuToggle(true)} /> }
          {toggleMenu && (
             <ul className='flex  absolute 
             top-10 right-0 mt-4 justify-end items-end text-end 
             min-w-56 shadow-xl bg-slate-600 p-8 rounded-xl
              gap-16 max-lg:hidden scale-up-center'>
             {navLinks.map((item) => (
               <li key={item}>
                 <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                   {item.label}
                 </a>
               </li>
             ))}
           </ul>
              
          )}
     </div>
      
        </nav>
      </header>
  )
}

export default NavBar