import { Table } from "flowbite-react";
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
					<>
						<Table hoverable className='shadow-md'>
							<Table.Head>
								<Table.HeadCell>Date updated</Table.HeadCell>
								<Table.HeadCell>Post image</Table.HeadCell>
								<Table.HeadCell>Post title</Table.HeadCell>
								<Table.HeadCell>Category</Table.HeadCell>
								<Table.HeadCell>Delete</Table.HeadCell>
								<Table.HeadCell>
									<span>Edit</span>
								</Table.HeadCell>
							</Table.Head>
							{userPosts.map((post) => (
								// eslint-disable-next-line react/jsx-key
								<Table.Body>
									<Table.Row>
										<Table.Cell>
											{new Date(post.updatedAt).toLocaleDateString()}
										</Table.Cell>
										
									</Table.Row>
								</Table.Body>
							))}
						</Table>
					</>
				): (
					<p>You have no posts yet!</p>
				)}
			</div>
    )
    
}