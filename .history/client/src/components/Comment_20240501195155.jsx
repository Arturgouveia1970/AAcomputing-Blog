import { useEffect } from "react";

export default function Comment({ comment }) {

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
    }, [comment])

    return (
        <div>
        <h1>Comment</h1>
        </div>
    );
}