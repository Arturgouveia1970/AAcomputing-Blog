import { updateCurrentUser } from "firebase/auth"
import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function DashPosts() {
	const { currentUser } = useSelector((state) => state.user)
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await fetch(`/api/post/getposts?iserId=${currentUser}`)
				const data = await res.json()
				console.log(data)
			} catch (error) {
				console.log(error.message)
			}
		}
	}, [])

    return (
			<div>
				Dashposts
			</div>
    )
    
}