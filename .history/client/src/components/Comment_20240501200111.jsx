/* eslint-disable react/prop-types */
import { useEffect, us } from "react";
import { get } from "mongoose";

export default function Comment({ comment }) {
    const [user, setUser] = useState({});
    useEffect(() => {
       const getUser = async () => {
         try {
            const res = await fetch(`/api/user/${comment.userId}`);
            if (res.ok) {
               const data = await res.json();
               console.log(data);
            }
         } catch (error) {
            console.log(error.message);
         }
       }
       getUser();
    }, [comment])

    return (
        <div>
        <h1>Comment</h1>
        </div>
    );
}