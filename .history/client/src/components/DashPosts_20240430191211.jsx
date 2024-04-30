import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function DashPosts() {
	const { currentUser } = useSelector((state) => state.user);
	const [userPosts, setUserPosts] = useState([]);
	console.log(userPosts)

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await fetch(`/api/post/getposts?iserId=${currentUser._id}`)
				const data = await res.json()
				if (res.ok) {
					setUserPosts(data.posts)
				}
			} catch (error) {
				console.log(error.message)
			}
		};
		if (currentUser.isAdmin) {
			fetchPosts()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentUser._id])

    return (
			<div>
				{currentUser.isAdmin && userPosts.length > 0 ? (
					<></>
				): (
					<p>You have no posts yet!</p>
				)}
			</div>
    )
    
}