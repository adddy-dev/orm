import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const standard1 = formData.get("standard1") as string;
    const standard2 = formData.get("standard2") as string;
    const industry = formData.get("industry") as string;

    formData.append('policy_pdf', file);
    formData.append('framework1', standard1);
    formData.append('framework2', standard2);
    formData.append('framework3', industry);

    const { data } = await axios.post(process.env.GAP_ANALYSIS_API as string, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file uploads
      },
    });


    return NextResponse.json({
      success: true,
      status: 200,
      data: data.result,
    });

 } catch (error: unknown) {
  console.error(error);
  if (error instanceof AxiosError) {
    console.error("Response:", error.response);  // Log the response for more insight
    return NextResponse.json({
      success: false,
      status: error.response?.status || 500,
      message: error.response?.data?.message || error.message,
    });
  } else if (error instanceof Error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: error.message,
    });
  } else {
    return NextResponse.json({
      success: false,
      status: 500,
      message: 'An unknown error occurred.',
    });
  }
  }
}