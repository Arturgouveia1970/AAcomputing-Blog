import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="">
        {/* left */}
        <div className="">
          <Link
            to="/"
            className="font-bold dark:text-white text-4xl"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              AAcomputing&apos;s
            </span>
            Blog
          </Link>
          <p>
            This is a demo project. You can sign up with your email and password or with 
          </p>
        </div>

      </div>
    </div>
  )
}