'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import axios from 'axios';
import Loader from '@/components/Loader';

interface LinkEntry {
   url: string;
   keywords: string[];
}

interface LinksDoc {
   _id: string;
   email: string;
   brand?: string;
   keywords?: string;
   instagram?: LinkEntry[];
   google?: LinkEntry[];
   twitter?: LinkEntry[];
   createdAt?: string;
}

interface User {
   _id: string;
   name?: string;
   email: string;
   role: string;
   links?: LinksDoc[];
}

const DashboardPage = () => {
   const [users, setUsers] = useState<User[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const { data } = await axios.get('/api/admin/users');
            if (!data.users) throw new Error('Failed to fetch users data');
            setUsers(data.users);
         } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Could not load users.';
            toast({ title: 'Error', description: errorMessage });
         } finally {
            setLoading(false);
         }
      };
      fetchUsers();
   }, []);

   if (loading) return <Loader />;

   return (
      <section className='min-h-screen bg-background text-foreground p-6'>
         <h1 className="text-3xl font-bold mb-6 pl-5 text-primary">Admin Dashboard</h1>
         <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.length === 0 ? (
               <div className="col-span-full text-center text-muted-foreground">No users found.</div>
            ) : (
               users.map((user) => (
                  <Card key={user._id} className="shadow-md">
                     <CardHeader>
                        <CardTitle>{user.name || 'No Name'}</CardTitle>
                     </CardHeader>
                     <CardContent className="space-y-2 text-sm">
                        <div><strong>Email:</strong> {user.email}</div>
                        <div><strong>Role:</strong> {user.role}</div>

                        {user.links && user.links.length > 0 ? (
                           user.links.map((rep, idx) => (
                              <div key={rep._id} className="mt-4 p-3 border rounded-md bg-muted/10">
                                 <div className="font-semibold text-primary">Submission #{idx + 1}</div>
                                 {rep.brand && <div><strong>Brand:</strong> {rep.brand}</div>}
                                 {rep.keywords && <div><strong>Keywords:</strong> {rep.keywords}</div>}
                                 {['instagram', 'google', 'twitter'].map((platform) =>
                                    rep[platform as keyof LinksDoc] &&
                                    (rep[platform as keyof LinksDoc] as LinkEntry[]).length > 0 ? (
                                       <div key={platform} className="mt-2">
                                          <strong className="capitalize">{platform}:</strong>
                                          <ul className="ml-4 list-disc text-muted-foreground">
                                             {(rep[platform as keyof LinksDoc] as LinkEntry[]).map((link, i) => (
                                                <li key={i}>
                                                   <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                                      {link.url}
                                                   </a>
                                                   {link.keywords?.length > 0 && (
                                                      <span className="ml-2">({link.keywords.join(', ')})</span>
                                                   )}
                                                </li>
                                             ))}
                                          </ul>
                                       </div>
                                    ) : null
                                 )}
                              </div>
                           ))
                        ) : (
                           <div className="text-muted-foreground text-sm mt-2">No Links submissions.</div>
                        )}
                     </CardContent>
                  </Card>
               ))
            )}
         </div>
      </section>
   );
};

export default DashboardPage;
