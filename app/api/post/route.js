import { NextResponse } from "next/server";
import { readData } from "../../../helper/util";

export async function GET(request) {
    const getData = await readData();  // Assuming getData is an array
    return NextResponse.json(getData, { status: 200 }); // Directly returning the array
}
