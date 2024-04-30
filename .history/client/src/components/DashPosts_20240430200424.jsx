import { Table } from "flowbite-react";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

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
										<Table.Cell>
											<Link to={`/post/${post.slug}`}>
												<img
													src={post.image}
													alt={post.title}
													className='w-20 h-20 object-cover bg-gray-500'
												/>
											</Link>
										</Table.Cell>
										<Table.Cell>
											<Link 
												to={`/post/${post.slug}`}
												className='font-medium text-gray-900 dark:text-white'
											>
												{post.title}
											</Link>
										</Table.Cell>
										<Table.Cell>{post.category}</Table.Cell>
										<Table.Cell><span>Delete</span></Table.Cell>
										<Table.Cell>
											<Link to={`/update-post/post._id`}>
												<span>Edit</span>
											</Link>
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