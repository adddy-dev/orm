'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import axios from "axios"
import { Trash2 } from 'lucide-react'

type LinkWithKeywords = {
   url: string
   keywords: string // comma-separated
}

export default function ReputationForm() {
   const [email, setEmail] = useState('')
   const [instagram, setInstagram] = useState<LinkWithKeywords[]>([{ url: '', keywords: '' }])
   const [google, setGoogle] = useState<LinkWithKeywords[]>([{ url: '', keywords: '' }])
   const [twitter, setTwitter] = useState<LinkWithKeywords[]>([{ url: '', keywords: '' }])
   const [brand, setBrand] = useState('')
   const [keywords, setKeywords] = useState('')
   const [loading, setLoading] = useState(true)

   const fetchExistingData = async () => {
      try {
         const { data } = await axios.get('/api/reputation')
         if (data?.data) {
            const linkData = data.data

            setEmail(linkData.email || '')
            setInstagram(linkData.instagram?.length ? linkData.instagram.map((l: LinkWithKeywords & { keywords: string[] }) => ({
               url: l.url || '',
               keywords: (l.keywords || []).join(', ')
            })) : [{ url: '', keywords: '' }])
            setGoogle(linkData.google?.length ? linkData.google.map((l: LinkWithKeywords & { keywords: string[] }) => ({
               url: l.url || '',
               keywords: (l.keywords || []).join(', ')
            })) : [{ url: '', keywords: '' }])
            setTwitter(linkData.twitter?.length ? linkData.twitter.map((l: LinkWithKeywords & { keywords: string[] }) => ({
               url: l.url || '',
               keywords: (l.keywords || []).join(', ')
            })) : [{ url: '', keywords: '' }])
            setBrand(linkData.brand || '')
            setKeywords(linkData.keywords || '')
         }
      } catch (error) {
         console.error('Error fetching existing data:', error)
         toast({ title: "Error", description: "Failed to load existing data." })
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      fetchExistingData()
   }, [])

   const handleChange = (
      platform: 'instagram' | 'google' | 'twitter',
      index: number,
      field: 'url' | 'keywords',
      value: string
   ) => {
      const setters = { instagram: setInstagram, google: setGoogle, twitter: setTwitter }
      const state = { instagram, google, twitter }
      const updated = [...state[platform]]
      updated[index] = { ...updated[index], [field]: value }
      setters[platform](updated)
   }

   const handleAddField = (platform: 'instagram' | 'google' | 'twitter') => {
      const setters = { instagram: setInstagram, google: setGoogle, twitter: setTwitter }
      const state = { instagram, google, twitter }
      setters[platform]([...state[platform], { url: '', keywords: '' }])
   }

   const handleRemoveField = (platform: 'instagram' | 'google' | 'twitter', index: number) => {
      const setters = { instagram: setInstagram, google: setGoogle, twitter: setTwitter }
      const state = { instagram, google, twitter }
      setters[platform](state[platform].filter((_, i) => i !== index))
   }

   const formatLinksForSubmit = (links: LinkWithKeywords[]) =>
      links
         .filter(l => l.url.trim())
         .map(l => ({
            url: l.url.trim(),
            keywords: l.keywords
               .split(',')
               .map(k => k.trim())
               .filter(Boolean),
         }))

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()

      const submissionData = {
         email,
         instagram: formatLinksForSubmit(instagram),
         google: formatLinksForSubmit(google),
         twitter: formatLinksForSubmit(twitter),
         brand,
         keywords,
         reddit: `${brand}, ${keywords}`,
      }

      try {
         const { data } = await axios.post('/api/reputation', submissionData)

         if (data?.data) {
            toast({ title: "Success", description: "Data saved successfully!" })
         } else {
            toast({ title: "Error", description: data.message || "Failed to save data." })
         }
      } catch (error) {
         const errMsg = error instanceof Error ? error.message : 'An unexpected error occurred.'
         toast({ title: "Error", description: errMsg })
      }
   }

   const renderLinkFields = (platform: 'instagram' | 'google' | 'twitter', label: string, urlPlaceholder: string) => {
      const state = { instagram, google, twitter }
      return (
         <div>
            <Label className="text-secondary-foreground">{label}</Label>
            {state[platform].map((link, idx) => (
               <div key={idx} className="flex items-center gap-2 mt-1 mb-2">
                  <Input
                     value={link.url}
                     onChange={(e) => handleChange(platform, idx, 'url', e.target.value)}
                     placeholder={urlPlaceholder}
                     className="bg-transparent text-foreground border border-border"
                  />
                  <Input
                     value={link.keywords}
                     onChange={(e) => handleChange(platform, idx, 'keywords', e.target.value)}
                     placeholder="Keywords (comma separated)"
                     className="bg-transparent text-foreground border border-border"
                  />
                  {state[platform].length > 1 && (
                     <Button
                        type="button"
                        onClick={() => handleRemoveField(platform, idx)}
                        variant="destructive"
                        size="icon"
                        className="bg-red-500 hover:bg-red-600 text-foreground p-2"
                     >
                        <Trash2 size={22} />
                     </Button>
                  )}
               </div>
            ))}
            <Button
               type="button"
               onClick={() => handleAddField(platform)}
               className="text-sm bg-foreground text-background hover:bg-transparent hover:text-foreground border-2"
            >
               + Add another
            </Button>
         </div>
      )
   }

   if (loading) {
      return <p className="text-center mt-10">Loading...</p>
   }

   return (
      <div className="max-w-screen-lg mx-auto mt-6 p-6 rounded-lg shadow-md bg-background text-foreground">
         <h1 className="text-5xl text-center font-bold mb-6 text-primary">Online Reputation Form</h1>
         <form onSubmit={handleSubmit} className="space-y-6 mb-10">
            <div>
               <Label htmlFor="email" className="text-sm text-secondary-foreground">Email Address<span className="text-red-500">*</span></Label>
               <Input
                  name="email"
                  type="email"
                  placeholder="e.g., you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 bg-transparent text-foreground border border-border"
               />
            </div>

            {renderLinkFields('instagram', 'Instagram Post Links', 'https://instagram.com/...')}
            {renderLinkFields('google', 'Google Reviews Links', 'https://maps.google.com/...')}
            {renderLinkFields('twitter', 'Twitter/X Links', 'https://twitter.com/...')}

            <div className="pt-2 border-t border-border">
               <Label className="text-secondary-foreground">Reddit Keywords</Label>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                     <Label htmlFor="brand" className="text-sm">Brand Name</Label>
                     <Input
                        name="brand"
                        placeholder="e.g., Nike"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="mt-1 bg-transparent text-foreground border border-border"
                     />
                  </div>
                  <div>
                     <Label htmlFor="keywords" className="text-sm">Keywords</Label>
                     <Input
                        name="keywords"
                        placeholder="e.g., shoes, sportswear"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        className="mt-1 bg-transparent text-foreground border border-border"
                     />
                  </div>
               </div>
            </div>

            <Button
               type="submit"
               className="w-full bg-foreground text-background hover:bg-transparent hover:text-foreground border-2 mt-4"
            >
               Submit
            </Button>
         </form>
      </div>
   )
}
