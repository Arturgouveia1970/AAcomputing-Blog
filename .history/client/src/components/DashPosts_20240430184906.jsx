import { useEffect } from "react"

export default function DashPosts() {
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await fetch('/api/post/getposts?iserId')
			}
		}
	})
    return (
			<div>
				Dashposts
			</div>
    )
    
}