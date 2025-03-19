

const  postInfo = async ({params}) => {
    console.log(params)
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postInfo = await post.json()
  return (
    <div>
        <h1>post page ,,, {postInfo.id}</h1>
        <p>{postInfo.body}</p>
    </div>
  )
}

export default postInfo
