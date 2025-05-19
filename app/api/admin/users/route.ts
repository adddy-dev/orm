import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import connectDB from '@/lib/db';
import User from '@/models/User';
import Link from '@/models/Link';

export const GET = async (req: NextRequest) => {
   try {
      const session = await auth();

      if (!session || !session.user?.email) {
         return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }

      await connectDB();

      const currentUser = await User.findOne({ email: session.user.email });

      if (!currentUser || currentUser.role !== 'admin') {
         return NextResponse.json({ message: 'Forbidden: Admins only' }, { status: 403 });
      }

      // Fetch all users
      const users = await User.find().select('-password');

      // Fetch all links
      const links = await Link.find();

      // Group links by user email
      const usersWithLinks = users.map((user) => {
         const userlinks = links.filter(link => link.email === user.email);
         return {
            ...user.toObject(),
            links: userlinks,
         };
      });

      return NextResponse.json({ users: usersWithLinks });
   } catch (error) {
      console.error('Admin fetch error:', error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
   }
};
