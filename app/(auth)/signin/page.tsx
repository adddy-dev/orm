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
import SignInForm from '@/components/SignInForm'

const SignIn:React.FC = () => {

  return (
    <Card className='max-w-md m-4 w-full'>
      <CardHeader className='text-center'>
        <CardTitle className='text-2xl'>SIGN IN</CardTitle>
        <CardDescription>Get back to our app</CardDescription>
      </CardHeader>
      <CardContent className='pb-0'>
        <SignInForm />
        <div className="or-separator text-center py-2">
          <span>OR</span>
        </div>
      </CardContent>

      <CardFooter className='flex-col'>
        <SocialAuth />
        <div className='text-center text-sm pt-3 text-muted-foreground'>
          Don&apos;t have an account?
          <Link href='/signup' className='text-blue-500 hover:underline pl-1'>
            Sign Up
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

export default SignIn