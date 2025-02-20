import { NextResponse } from 'next/server';
import axios from 'axios';


export async function POST(req: Request) {
  try {
    const body = await req.json();
    axios.defaults.baseURL = process.env.NEXT_CHAT_API;
    const response = await axios.post(
      '/chat',
      body,
      {
        timeout: 120000,
      }
    );
    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error proxying req:', error);
    return NextResponse.json(
      { message: 'Error proxying req to chat API' },
      { status: 500 }
    );
  }
}