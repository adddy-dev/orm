import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  rating: number;
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote: "The AI-powered policy generation has transformed our security documentation process. What used to take weeks now takes hours.",
    author: "Ahmed Al-Sayed",
    position: "CISO",
    company: "Dubai Finance Corp"
  },
  {
    rating: 5,
    quote: "Perfect for SMEs in the region. The platform understands our local compliance requirements and generates policies accordingly.",
    author: "Sara Al-Rashid",
    position: "IT Director",
    company: "Riyadh Tech Solutions"
  },
  {
    rating: 5,
    quote: "The customer support is exceptional, and the AI's ability to customize policies for our specific needs is impressive.",
    author: "Mohammed Al-Qasimi",
    position: "Security Manager",
    company: "Abu Dhabi Retail Group"
  }
];

const Testimonials = () => {
  return (
    <div className="w-full bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Trusted by Leading Organizations
        </h2>
        <p className="text-lg text-muted-foreground">
          See what our clients across the Middle East have to say
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index}
            className="bg-card border-border hover:border-primary transition-colors duration-300 p-2"
          >
            <CardContent className="p-6 space-y-6">
              {/* Star Rating */}
              <div className="flex gap-1.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base text-foreground">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="space-y-1">
                <div className="font-semibold text-primary">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position}, {testimonial.company}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;