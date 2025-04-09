import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    const { 
      policy_name, 
      company_name, 
      location, 
      industry, 
      description, 
      company_size, 
      key_assets_company,
      language
    } = body;
    
    // Make request to external API
    axios.defaults.baseURL = process.env.NEXT_POLICY_API;
    const response = await axios.post('/generate_policy', {
      policy_name,
      company_name,
      location,
      industry,
      description,
      company_size,
      key_assets_company,
      language
    });

    // Extract base64 PDF from response
    // Adjust this based on your actual API response structure
    const {pdf:base64PDF, generated_policy: policy} = response.data;  

    // Return successful response
    return NextResponse.json({ 
      pdfBase64: base64PDF,
      policy, 
      success: true,
      message: 'PDF generated successfully'
    }, { 
      status: 200 
    });

  } catch (error) {
    console.error('PDF Generation Error:', error);

    // Handle different types of errors
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