import Link from 'next/link';

export default  async function Home() {
  const post = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await post.json()
  const first10Post = posts.slice(0,10)
  return (
    <div className="">
      <h1>Home Page</h1>
      {first10Post.map((post) => (
        <div key={post.id}>
          <h2 className="text-xl mt-4">{post.title}</h2>
         <Link href={`posts/${post.id}`} >{post.body}</Link>
        </div>
      ))}
    </div>
  );
}
