import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import connectDB from "@/lib/db";

export const POST = async (req: NextRequest) => {
  
  const { name, email, password } = await req.json();
  
  await connectDB();
  
  try {
    const alreadyExists = await User.findOne({
      $or: [{ email }] 
    });
    if(alreadyExists){
      if(alreadyExists.oauthProvider === 'credentials')
        throw new Error('User already exists', { cause: 409 });
      else 
        throw new Error(`User uses authentication using ${alreadyExists.oauthProvider}`, { cause: 409 });
    }
      
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({ name, email, password: hashedPassword });

    const userWithoutPassword = await User.findById(user._id).select('-password');

    if(!userWithoutPassword) throw new Error('Error signing up user', { cause: 500 });

    return NextResponse.json({
      data: userWithoutPassword,
      message: 'User created successfully',
      success: true,
      status: 201
    });

  } catch (error: unknown) {
    if (error instanceof Error) { 
      return NextResponse.json({
        message: error.message || 'Error creating user',
        success: false,
        status: error.cause || 500
      });
    } else {
      return NextResponse.json({
        message: 'Unknown error occurred',
        success: false,
        status: 500
      });
    }
  }
}