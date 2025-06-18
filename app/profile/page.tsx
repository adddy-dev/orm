'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import axios from 'axios';
import Loader from '@/components/Loader';
import { FaInstagram, FaGoogle, FaTwitter } from 'react-icons/fa';

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

const platformIcons: Record<string, React.ReactElement> = {
  instagram: <FaInstagram className="text-pink-500 text-xl inline-block mr-2" />,
  google: <FaGoogle className="text-yellow-500 text-xl inline-block mr-2" />,
  twitter: <FaTwitter className="text-blue-400 text-xl inline-block mr-2" />
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
        toast({
          title: 'Error',
          description: err instanceof Error ? err.message : 'Could not load user data.'
        });
      } finally {
        setLoading(false);
      }
    };

    const fetchLink = async () => {
      try {
        const { data } = await axios.get('/api/reputation');
        if (!data.data) throw new Error('Failed to fetch reputation data');
        setLink(data.data);
      } catch (err) {
        toast({
          title: 'Error',
          description: err instanceof Error ? err.message : 'Could not load reputation data.'
        });
      }
    };

    fetchData();
    fetchLink();
  }, []);

  if (loading) return <Loader />;
  if (!user) return <div className="text-center mt-10 text-red-500">No user data found.</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6 px-4">
      {/* User Info Card */}
      <Card>
        <CardHeader className="pt-6 pb-3">
          <CardTitle className="text-2xl font-semibold text-primary">👤 User Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label className="text-sm text-muted-foreground">Name</Label>
            <Input value={user.name || ''} readOnly className="mt-1 bg-transparent" />
          </div>
          <div>
            <Label className="text-sm text-muted-foreground">Email</Label>
            <Input value={user.email} readOnly className="mt-1 bg-transparent" />
          </div>
          <div>
            <Label className="text-sm text-muted-foreground">Role</Label>
            <Input value={user.role} readOnly className="mt-1 bg-transparent" />
          </div>
        </CardContent>
      </Card>

      {/* Reputation Section */}
      <Card>
        <CardHeader className="pt-6 pb-3">
          <CardTitle className="text-2xl font-semibold text-primary">🔗 Reputation Links</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          {link ? (
            <>
              <div><span className="font-medium text-foreground">Email:</span> {link.email}</div>
              {link.brand && <div><span className="font-medium text-foreground">Brand:</span> {link.brand}</div>}
              {link.keywords && link.keywords?.length && (
                <div>
                  <span className="font-medium text-foreground">Keywords:</span>{' '}
                  <span className="italic">{link.keywords.join(', ')}</span>
                </div>
              )}

              {/* Platform Links */}
              {(['instagram', 'google', 'twitter'] as const).map((platform) =>
                link[platform]?.length ? (
                  <div key={platform}>
                    <h4 className="font-semibold mt-4 text-foreground">
                      {platformIcons[platform]} {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </h4>
                    <ul className="ml-6 mt-1 list-disc space-y-1">
                      {link[platform]!.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-800 transition-colors"
                          >
                            {item.url}
                          </a>
                          {item.keywords?.length ? (
                            <span className="ml-2 italic text-muted-foreground">
                              ({item.keywords.join(', ')})
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null
              )}
            </>
          ) : (
            <div className="text-center text-muted-foreground">No reputation data available.</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
