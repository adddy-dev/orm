'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import axios from "axios"

type LinkWithKeywords = {
   url: string
   keywords: string // comma-separated string, converted on submit
}

export default function ReputationForm() {
   const [email, setEmail] = useState('')
   const [instagram, setInstagram] = useState<LinkWithKeywords[]>([{ url: '', keywords: '' }])
   const [google, setGoogle] = useState<LinkWithKeywords[]>([{ url: '', keywords: '' }])
   const [twitter, setTwitter] = useState<LinkWithKeywords[]>([{ url: '', keywords: '' }])
   const [brand, setBrand] = useState('')
   const [keywords, setKeywords] = useState('')

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
         instagram: formatLinksForSubmit(instagram),
         google: formatLinksForSubmit(google),
         twitter: formatLinksForSubmit(twitter),
         brand,
         keywords,
         reddit: `${brand}, ${keywords}`,
         email,
      }


      try {
         const { data } = await axios.post('/api/reputation', submissionData)

         if (data.data) {
            toast({ title: "Success", description: "Data sent successfully!" })
            console.log("Response data:", data);

            setEmail('')
            setInstagram([{ url: '', keywords: '' }])
            setGoogle([{ url: '', keywords: '' }])
            setTwitter([{ url: '', keywords: '' }])
            setBrand('')
            setKeywords('')
         } else {
            toast({ title: "Error", description: data.message || "Failed to send data." })
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
                     className="bg-input text-foreground border border-border"
                  />
                  <Input
                     value={link.keywords}
                     onChange={(e) => handleChange(platform, idx, 'keywords', e.target.value)}
                     placeholder="Keywords (comma separated)"
                     className="bg-input text-foreground border border-border"
                  />
                  {state[platform].length > 1 && (
                     <Button
                        type="button"
                        onClick={() => handleRemoveField(platform, idx)}
                        variant="destructive"
                        size="icon"
                     >
                        🗑
                     </Button>
                  )}
               </div>
            ))}
            <Button
               type="button"
               onClick={() => handleAddField(platform)}
               variant="secondary"
               className="text-sm"
            >
               + Add another
            </Button>
         </div>
      )
   }

   return (
      <div className="max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-md bg-background text-foreground">
         <h1 className="text-2xl font-bold mb-6 text-primary">Online Reputation Input</h1>
         <form onSubmit={handleSubmit} className="space-y-6">
            <div>
               <Label htmlFor="email" className="text-sm">Email Address<span className="text-red-500">*</span></Label>
               <Input
                  name="email"
                  type="email"
                  placeholder="e.g., you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 bg-input text-foreground border border-border"
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
                        className="mt-1 bg-input text-foreground border border-border"
                     />
                  </div>
                  <div>
                     <Label htmlFor="keywords" className="text-sm">Keywords</Label>
                     <Input
                        name="keywords"
                        placeholder="e.g., shoes, sportswear"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        className="mt-1 bg-input text-foreground border border-border"
                     />
                  </div>
               </div>
            </div>

            <Button
               type="submit"
               className="w-full bg-secondary text-secondary-foreground hover:brightness-110"
            >
               Submit
            </Button>
         </form>
      </div>
   )
}