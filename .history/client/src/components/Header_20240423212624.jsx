import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (    
      <Navbar className="border-b-2">
        <Link to="/" className="self-center whitespace-nowrap text-s">
           <span>AAcomputing</span>
           Blog
        </Link>
      </Navbar>
    
  )
}