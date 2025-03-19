import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container padding-x padding-y padding-l bg-black">
      <div className="flex justify-between 
      items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start"> 
          <a href="/">
          <img src={footerLogo} alt="footer Logo" width={150} height={46}/>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. 
            Cupiditate facilis voluptatem 
            praesentium necessitatibus sint.</p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((item)=>(
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-coral-red duration-500 cursor-pointer">
                  <img src={item.src} 
                  alt={item.alt} 
                  width={24}
                  height={24}/>
                </div>
              ))}
            </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section)=>(
            <div key={section}>
                  <h4 className="text-white font-montserrat text-2xl leading-normal font-medium">{section.title}</h4>
                  <ul>
                    {
                      section.links.map((link)=>(
                        <li key={link.name}>
                          <a href={link.url} className="text-white hover:text-coral-red duration-500 font-montserrat text-base leading-normal mt-3 cursor-pointer">{link.name}</a>
                        </li>
                      ))
                    }
                  </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center text-center text-white  max-sm:flex-col mt-24 font-montserrat cursor-pointer">
        &copy; 2025 Bader_in_4k. All rights reserved.
        <p>Terms and Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
