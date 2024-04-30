import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function DashPosts() {
	const { currentUser } = useSelector((state) => state.user);
	const [userPosts, setUserPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await fetch(`/api/post/getposts?iserId=${currentUser._id}`)
				const data = await res.json()
				i
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