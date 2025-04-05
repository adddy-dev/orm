import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import SocialAuth from '@/components/SocialAuth'
import SignUpForm from '@/components/SignUpForm'

const SignUp:React.FC = () => {

  return (
      <Card className='max-w-md m-4 w-full'>
        <CardHeader className='text-center'>
          <CardTitle className='text-2xl'>SIGN UP</CardTitle>
          <CardDescription>Get started with our app</CardDescription>
        </CardHeader>
        <CardContent className='pb-0'>
          <SignUpForm />
          <div className="or-separator text-center">
            <span>OR</span>
          </div>
        </CardContent>
        <CardFooter className='flex-col'>
          <SocialAuth />
          <div className='text-center text-sm pt-3 text-muted-foreground'>
            Already have an account?
            <Link href='/signin' className='text-blue-500 hover:underline pl-1'>
               Sign In
            </Link>
          </div>
        </CardFooter>
      </Card>
  )
}

export default SignUp