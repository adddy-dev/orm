'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import axios from 'axios';

type User = {
   name: string;
   email: string;
   role: string;
};

type ReputationLink = {
   email: string;
   brand?: string;
   keywords?: string[];
   instagram?: { url: string; keywords?: string[] }[];
   google?: { url: string; keywords?: string[] }[];
   twitter?: { url: string; keywords?: string[] }[];
};

export default function UserProfile() {
   const [user, setUser] = useState<User | null>(null);
   const [link, setLink] = useState<ReputationLink | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const { data: userData } = await axios.get('/api/user');
            if (!userData.user) throw new Error('Failed to fetch user data');
            setUser(userData.user);
         } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Could not load data.';
            toast({ title: 'Error', description: errorMessage });
         } finally {
            setLoading(false);
         }
      };
      fetchData();

      const fetchLink = async () => {
         try {
            const { data } = await axios.get('/api/reputation');
            if (!data.data) throw new Error('Failed to fetch user data');
            setLink(data.data);
         } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Could not load link data.';
            toast({ title: 'Error', description: errorMessage });
         } finally {
            setLoading(false);
         }
      };
      fetchLink();
   }, []);

   if (loading) return <div className="text-center mt-10">Loading...</div>;
   if (!user) return <div className="text-center mt-10">No user data found.</div>;

   return (
      <div className="max-w-3xl mx-auto mt-10 space-y-6">
         <Card>
            <CardHeader className='pt-6 pb-4'>
               <CardTitle className='text-xl'>User Profile</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <Label>Name</Label>
                  <Input value={user.name || ''} readOnly className="mt-1" />
               </div>
               <div>
                  <Label>Email</Label>
                  <Input value={user.email} readOnly className="mt-1" />
               </div>
               <div>
                  <Label>Role</Label>
                  <Input value={user.role} readOnly className="mt-1" />
               </div>
            </CardContent>
         </Card>

         {/* Reputation Data Cards */}
         <div className="space-y-4">
            {link ? (
               <Card>
                  <CardHeader className='pt-6 pb-4'>
                     <CardTitle className='text-xl'>Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                     <div><strong>Email:</strong> {link.email}</div>
                     {link.brand && <div><strong>Brand:</strong> {link.brand}</div>}
                     {link.keywords && <div><strong>Keywords:</strong> {link.keywords.join(', ')}</div>}

                     {(['instagram', 'google', 'twitter'] as const).map((platform) =>
                        link[platform]?.length ? (
                           <div key={platform}>
                              <strong className="capitalize">{platform} Link:</strong>
                              <ul className="ml-4 list-disc">
                                 {link[platform]?.map((item, idx) => (
                                    <li key={idx}>
                                       <a
                                          href={item.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-blue-600 underline"
                                       >
                                          {item.url}
                                       </a>
                                       {item.keywords?.length ? (
                                          <span className="ml-2 text-muted-foreground">
                                             ({item.keywords.join(', ')})
                                          </span>
                                       ) : null}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        ) : null
                     )}
                  </CardContent>
               </Card>
            ) : (
               <p className="text-center text-muted-foreground">No reputation data found.</p>
            )}
         </div>
      </div>
   );
}
