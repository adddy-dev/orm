import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      free: true,
      features: [
        "Up to 5 policy templates",
        "Basic AI customization",
        "Email support",
        "Monthly updates"
      ],
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      price: "$50",
      popular: true,
      features: [
        "Unlimited policy templates",
        "Advanced AI customization",
        "Data Transfer Risk Assesssment",,
        "Real-time updates",
        "Gap Analysis",
      ],
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Everything in Professional",
        "Custom API integration",
        "Dedicated account manager",
        "Custom AI training"
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="w-full bg-background py-12 px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Flexible Pricing Plans
        </h2>
        <p className="text-base text-muted-foreground">
          Choose the perfect plan for your organization's needs
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`relative flex flex-col hover:border-tertiary border-2 transition-all duration-300 ${
              plan.popular ? 'border-2 border-tertiary scale-105' : ''
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 right-4 bg-tertiary px-3 py-1 rounded-full text-sm">
                Popular
              </span>
            )}
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-secondary">{plan.name}</CardTitle>
              <div className="text-3xl font-bold mt-4">
                {plan.price}
                {(plan.price !== "Custom" && plan.price !== 'Free')  && (
                  <span className="text-lg text-muted-foreground">/month</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-terbg-tertiary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.free ? '/dashboard' : '#contact'}>
                <Button className="w-full bg-tertiary text-foreground hover:bg-tertiary-foreground">
                  {plan.buttonText}
                </Button> 
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};


export default Pricing;