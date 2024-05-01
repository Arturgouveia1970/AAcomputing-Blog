/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { set } from "mongoose";

export default function Comment({ comment }) {
    const [user, setUser] = useState({});
    console.log(user)
    useEffect(() => {
        const getUser = async () => {
          try {
            const res = await fetch(`/api/user/${comment.userId}`);
            const data = await res.json();
            if (res.ok) {
              setUser(data);
            }
          } catch (error) {
            console.log(error.message);
          }
        };
        getUser();
      }, [comment]);

    return (
        <div>
          <div className='flex-shrink-0 mr-3'>
        <img
          className='w-10 h-10 rounded-full bg-gray-200'
          src={user.profilePicture}
          alt={user.username}
        />
      </div>
        </div>
    );
}