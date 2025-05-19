'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import axios from 'axios';

export default function UserProfile() {
   const [user, setUser] = useState<any>(null);
   const [links, setLinks] = useState<any[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const { data: userData } = await axios.get('/api/user');
            if (!userData.user) throw new Error('Failed to fetch user data');
            setUser(userData.user);
         } catch (err) {
            toast({ title: 'Error', description: 'Could not load data.' });
         } finally {
            setLoading(false);
         }
      };
      fetchData();

      const fetchLinks = async () => {
         try {
            const { data } = await axios.get('/api/reputation');
            if (!data.data) throw new Error('Failed to fetch user data');
            console.log('Fetched links:', data);
            setLinks(data.data);
         } catch (err) {
            toast({ title: 'Error', description: 'Could not load links data.' });
         } finally {
            setLoading(false);
         }
      };
      fetchLinks();
   }, []);

   if (loading) return <div className="text-center mt-10">Loading...</div>;
   if (!user) return <div className="text-center mt-10">No user data found.</div>;

   return (
      <div className="max-w-3xl mx-auto mt-10 space-y-6">
         {/* User Info Card */}
         <Card>
            <CardHeader>
               <CardTitle>User Profile</CardTitle>
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
            {links.length === 0 ? (
               <p className="text-center text-muted-foreground">No reputation data found.</p>
            ) : (
               links.map((item, index) => (
                  <Card key={index}>
                     <CardHeader>
                        <CardTitle>Submission #{index + 1}</CardTitle>
                     </CardHeader>
                     <CardContent className="space-y-2 text-sm">
                        <div><strong>Email:</strong> {item.email}</div>
                        {item.brand && <div><strong>Brand:</strong> {item.brand}</div>}
                        {item.keywords && <div><strong>Keywords:</strong> {item.keywords}</div>}

                        {['instagram', 'google', 'twitter'].map((platform) => (
                           item[platform]?.length > 0 && (
                              <div key={platform}>
                                 <strong className="capitalize">{platform} Links:</strong>
                                 <ul className="ml-4 list-disc">
                                    {item[platform].map((link: any, idx: number) => (
                                       <li key={idx}>
                                          <a
                                             href={link.url}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="text-blue-600 underline"
                                          >
                                             {link.url}
                                          </a>
                                          {link.keywords?.length > 0 && (
                                             <span className="ml-2 text-muted-foreground">
                                                ({link.keywords.join(', ')})
                                             </span>
                                          )}
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           )
                        ))}
                     </CardContent>
                  </Card>
               ))
            )}
         </div>
      </div>
   );
}
