import { NextResponse } from "next/server";
import alumni from "./alumni";  

export async function GET() {
  return NextResponse.json(alumni);
}
