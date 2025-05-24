'use client'

import React, { useEffect, useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'
import { object, string, ZodError } from 'zod'
import { useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { toast } from '@/hooks/use-toast'


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
  const [role, setRole] = useState('user');

  useEffect(() => {
    if(error) {
      toast({ title: 'Sign In Error', description: error, variant: 'destructive' });
      setError('');
    }
  }, [error])

  const credentialSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const validatedData = signInSchema.parse(formData);
      const res = await signIn('credentials', { ...validatedData, role, redirect: false });
      if(res?.code) throw new Error(res.code);
      toast({ title: 'Success', description: 'Logged in successfully!' });
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
      </div>
      <div className='mb-4'>
        <Label htmlFor="role">Role</Label>
        <Select value={role} onValueChange={setRole}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="user">User</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type='submit' className='w-full bg-foreground text-background hover:bg-transparent hover:text-foreground border-2' disabled={loading}>
        {loading ? "Signing In..." : "Submit"}
      </Button>
    </form>
  )
}

export default SignInForm