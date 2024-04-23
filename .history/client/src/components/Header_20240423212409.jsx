import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (    
      <Navbar className="border-b-2">
        <Link to="/" className="text-2xl font-bold text-red-500">Home</Link>
      </Navbar>
    
  )
}