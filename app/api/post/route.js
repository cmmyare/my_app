import { NextResponse } from "next/server";
import { readData,writeData } from "../../../helper/util";

export async function GET(request) {
    const getData = await readData();
    return NextResponse.json(getData, { status: 200 });
}

export async function POST(request) {
    const posts = await readData();
    const {title, body} = await request.json();

    const newPost = {id: posts.length + 1, title, body};
    posts.push(newPost);
    await writeData(posts);
    return NextResponse.json(newPost, { status: 201 });
}