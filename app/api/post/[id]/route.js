import {readData, writeData} from '../../../../helper/util';
import { NextResponse } from 'next/server';

// update routes
export async function PUT(request, { params }) {
  const { id } = params;

  const posts = await readData();
  const { title, body } = await request.json();

  const postIndex = posts.findIndex(post => post.id === parseInt(id));

  if (postIndex === -1) {
    return NextResponse.json({ error: "Invalid post" }, { status: 404 });
  }

  posts[postIndex] = { ...posts[postIndex], title, body };

  await writeData(posts);

  return NextResponse.json(posts[postIndex], { message: "Post updated successfully" }, { status: 200 });
}

// delete routes
export async function DELETE(request, { params }) {
  const { id } = await params;

  const posts = await readData();

  const postIndex = posts.findIndex(post => post.id === parseInt(id));

  if (postIndex === -1) {
    return NextResponse.json({ error: "Invalid post" }, { status: 404 });
  }

  posts.splice(postIndex, 1);

  await writeData(posts);

  return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
}


// read data routes
export async function GET(request, { params }) {
    const { id } = await params;
  
    const posts = await readData();
    const post = posts.find(post => post.id === parseInt(id));
  
    if (!post) {
      return NextResponse.json({ error: "Invalid post" }, { status: 404 });
    }
  
    return NextResponse.json(post, { status: 200 });
  }