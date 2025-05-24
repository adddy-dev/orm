// pages/api/link.ts
import { auth } from '@/auth';
import connectDB from '@/lib/db'
import Link from '@/models/Link'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
   try {

      const session = await auth();
      if (!session || !session.user?.email) {
         return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }

      await connectDB()

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
         return NextResponse.json({ message: 'Email is required' })
      }

      const link = await Link.create({
         user: session.user.id,
         email,
         instagram,
         google,
         twitter,
         brand,
         keywords,
         reddit,
      })

      if (!link) {
         return NextResponse.json({ message: 'Failed to create link' })
      }

      return NextResponse.json({ message: 'Success', data: link });
   } catch (error) {
      console.error('link submission error:', error)
      NextResponse.json({ message: 'Internal Server Error' })
   }
}

export const GET = async () => {
   try {
      const session = await auth();
      if (!session || !session.user?.id) {
         return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }

      await connectDB();

      const links = await Link.find({ user: session.user.id });

      if (!links) {
         return NextResponse.json({ message: 'Failed to fetch links' })
      }

      return NextResponse.json({ message: 'Success', data: links });
   } catch (error) {
      console.error('link submission error:', error)
      NextResponse.json({ message: 'Internal Server Error' })
   }
}