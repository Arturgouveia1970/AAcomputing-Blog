import { useEffect } from "react"

export default function DashPosts() {
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await fetch('/api/post/getposts?iserId=')
				const data = await res.json
			}
		}
	})
    return (
			<div>
				Dashposts
			</div>
    )
    
}