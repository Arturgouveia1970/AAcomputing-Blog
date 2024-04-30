import { useEffect } from "react"

export default function DashPosts() {
	const { currentUser } = use
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await fetch('/api/post/getposts?iserId=')
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