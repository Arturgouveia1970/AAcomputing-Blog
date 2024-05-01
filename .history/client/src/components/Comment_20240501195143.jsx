import { useEffect } from "react";

export default function Comment({ comment }) {

    useEffect(() => {
       const getUser = async () => {
         try {
        
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