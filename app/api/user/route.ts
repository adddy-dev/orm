import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import User from '@/models/User';
import connectDB from '@/lib/db';

export const GET = async (req: NextRequest) => {
   try {
      // Get the current session
      const session = await auth();
      if (!session || !session.user?.email) {
         return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }

      await connectDB();
      // Fetch user data from DB, exclude password
      const user = await User.findOne({ email: session.user.email }).select('-password');
      
      if (!user) {
         return NextResponse.json({ message: 'User not found' }, { status: 404 });
      }
      return NextResponse.json({ user });
   } catch (error) {
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
   }
};


