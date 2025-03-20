import PostForm from "../_components/postForm"


const postInfo = async ({params}) => {
    const post = await fetch(`http://localhost:3000/api/post/${params.id}`)
    const postInfo = await post.json()
  return (
    <div>
        <PostForm postInfo={postInfo} />
    </div>
  )
}

export default postInfo
