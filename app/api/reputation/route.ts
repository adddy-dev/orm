// pages/api/link.ts
import { auth } from '@/auth';
import connectDB from '@/lib/db'
import Link from '@/models/Link'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
   try {
      const session = await auth();
      if (!session || !session.user?.email || !session.user?.id) {
         return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }

      await connectDB();

      const {
         email,
         instagram,
         google,
         twitter,
         brand,
         keywords,
         reddit,
      } = await req.json();

      if (!email) {
         return NextResponse.json({ message: 'Email is required' });
      }

      // Check if a Link already exists for this user
      const existingLink = await Link.findOne({ user: session.user.id });

      let link;

      if (existingLink) {
         // Update the existing document
         existingLink.email = email;
         existingLink.instagram = instagram;
         existingLink.google = google;
         existingLink.twitter = twitter;
         existingLink.brand = brand;
         existingLink.keywords = keywords;
         existingLink.reddit = reddit;

         link = await existingLink.save();
      } else {
         // Create a new document
         link = await Link.create({
            user: session.user.id,
            email,
            instagram,
            google,
            twitter,
            brand,
            keywords,
            reddit,
         });
      }

      return NextResponse.json({ message: 'Success', data: link });

   } catch (error) {
      console.error('link submission error:', error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
   }
};


export const GET = async () => {
   try {
      const session = await auth();
      if (!session || !session.user?.id) {
         return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }

      await connectDB();

      const links = await Link.findOne({ user: session.user.id });

      if (!links) {
         return NextResponse.json({ message: 'Failed to fetch links' })
      }

      return NextResponse.json({ message: 'Success', data: links });
   } catch (error) {
      console.error('link submission error:', error)
      NextResponse.json({ message: 'Internal Server Error' })
   }
}