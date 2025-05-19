'use client';

import { Label } from '@radix-ui/react-label';
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { object, string, ZodError } from 'zod';
import { toast } from '@/hooks/use-toast';


const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const signUpSchema = object({
  name: string()
        .nonempty('Username is required')
        .min(1, 'Username must be at least 3 characters')
        .max(20, 'Username must be at most 20 characters'),
  email: string()
        .nonempty('Email is required')
        .email('Invalid email'),
  password: string()
        .nonempty('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .refine(value => strongPasswordRegex.test(value), 
              'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character')
})

const SignUpForm = () => {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleErrorToast = (message: string) => {
    console.log(message);
  }

  useEffect(() => {
    if(error) {
      toast({ title: 'Sign Up Error', description: error, variant: 'destructive' });
      setError('');
    }
  }, [error])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){

    e.preventDefault();
    setLoading(true);

    try {
      const validatedData = signUpSchema.parse(formData);
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(validatedData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const resData = await res.json();
      if(resData.success) {
        toast({ title: 'Success', description: 'Successfully signed up!' });
        setLoading(false);
        router.push('/signin');
      } else {  
        throw new Error(resData.message);
      }
    } catch (error) {
      setLoading(false);
      if(error instanceof ZodError) {
        setError(error.errors[0].message);
      } else if(error instanceof Error) {
        setError(error.message);
      } else {
        setError('Unknown error occurred');
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <Label htmlFor="fullname">Full Name</Label>
        <Input 
          type="text" id="fullname" name='name' placeholder="johndoe" required
          value={formData.name} onChange={handleChange}
        />
      </div>
      <div className='mb-4'>
        <Label htmlFor="email">Email</Label>
        <Input 
          type="email" id="email" name='email' placeholder="abc@gmail.com" required
          value={formData.email} onChange={handleChange}
        />
      </div>
      <div className='mb-4'>
        <Label htmlFor="password">Password</Label>
        <Input 
          type="password" id="password" name='password' placeholder="********" required
          value={formData.password} onChange={handleChange}
        />
        {/* <Link
          href='/signin'
          className='block w-full text-sm text-blue-500 hover:underline text-right pt-1.5'
        >
          Forgot Password?
        </Link> */}
      </div>
      <Button type='submit' className='w-full' disabled={loading}>
        {loading ? "Signing Up..." : "Submit"}
      </Button>
    </form>
  )
}

export default SignUpForm