'use client'

import React, { useEffect, useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import Link from 'next/link'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'
import { object, string, ZodError } from 'zod'
import { useRouter } from 'next/navigation'


const signInSchema = object({
  email: string()
        .min(1, 'Email is required')
        .email('Invalid email'),
  password: string()
        .min(1, 'Password is required')
        .min(8, 'Password must be at least 8 characters long'),
})

const SignInForm:React.FC = () => {

  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleErrorToast = (message: string) => {
    console.log(message);
  }

  useEffect(() => {
    if(error) {
      handleErrorToast(error);
      setError('');
    }
  }, [error])

  const credentialSignIn = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setLoading(true);

    try {
      const validatedData = signInSchema.parse(formData);
      const res = await signIn('credentials', {...validatedData, redirect: false});
      if(res?.code) throw new Error(res.code);
      console.log('Logged in successfully');
      setLoading(false);
      router.push('/');
      
    } catch (error) {
      setLoading(false);
      if(error instanceof ZodError) {
        setError(error.errors[0].message);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Something went wrong');
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={credentialSignIn} className='min-w-[280px]'>
      <div className='mb-4'>
        <Label htmlFor="email">Email</Label>
        <Input 
          name='email' type="email" id="email" placeholder="abc@gmail.com" required
          value={formData.email} onChange={handleChange}
        />
      </div>
      <div className='mb-4'>
        <Label htmlFor="password">Password</Label>
        <Input 
          name='password' type="password" id="password" placeholder="********" required
          value={formData.password} onChange={handleChange}
        />
        <Link
          href='/signin'
          className='block w-full text-sm text-blue-500 hover:underline text-right pt-1.5'
        >
          Forgot Password?
        </Link>
      </div>
      <Button type='submit' className='w-full' disabled={loading}>
        {loading ? "Signing In..." : "Submit"}
      </Button>
    </form>
  )
}

export default SignInForm