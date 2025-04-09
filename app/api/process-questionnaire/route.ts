import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as Blob;

    if (!file) {
      return new Response('No file uploaded', { status: 400 });
    }

    // Wrap the file in a new FormData object
    const uploadFormData = new FormData();
    uploadFormData.append('file', file);

    // Set the base URL for the external API
    axios.defaults.baseURL = process.env.PROCESS_QUESTIONNAIRE;

    // Send the FormData to the external API
    const { data } = await axios.post('/process', uploadFormData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Correct Content-Type for FormData
      },
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error processing file:', error);
    return new Response('Error processing file', { status: 500 });
  }
};