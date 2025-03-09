import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { policy1, policy2 } = await req.json();
  
    axios.defaults.baseURL = process.env.NEXT_POLICY_API;
    const { data } = await axios.post(`/compare`, {
      policy1, policy2
    })

    return NextResponse.json({
      success: true,
      data
    });
  } catch (error) {
    console.error('Error comparing policies:', error);
    if (axios.isAxiosError(error)) {
      return NextResponse.json({ 
        error: 'External API request failed',
        details: error.response?.data 
      }, { 
        status: error.response?.status || 500 
      });
    }

    // Generic error handler
    return NextResponse.json({ 
      error: 'Failed to generate PDF' 
    }, { 
      status: 500 
    });
  }
}