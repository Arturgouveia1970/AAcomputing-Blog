import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (    
      <Navbar className="border-b-2">
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
           // eslint-disable-next-line react/no-unescaped-entities
           <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>AAcomputing's</span>
           Blog
        </Link>

      </Navbar>
    
  )
}