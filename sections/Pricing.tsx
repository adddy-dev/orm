import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Hobby",
      price: "$12",
      features: [
        "All the basics for starting a new business!"
      ],
      buttonText: "Subscribe"
    },
    {
      name: "Freelancer",
      price: "$24",
      features: [
        "All the basics for starting a new business"
      ],
      buttonText: "Subscribe"
    },
    {
      name: "Startup",
      price: "$32",
      features: [
        "All the basics for starting a new business!"
      ],
      buttonText: "Subscribe"
    }
  ];

  return (
    <div className="w-full bg-background py-20 px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-screen-xl mx-auto text-center mb-16">
        <h2 className="text-lg md:text-6xl font-bold text-primary mb-6">
          Flexible Pricing Plans
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          Choose the perfect plan for your organization's needs
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`relative flex flex-col border-2 transition-all duration-300 ${
              index === 1 ? "border-secondary scale-105" : "border-muted-foreground"
            } hover:border-secondary`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-secondary">{plan.name}</CardTitle>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <span className="text-lg text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="text-5xl font-bold mb-8">
                {plan.price}
                <span className="text-2xl align-top text-muted-foreground font-normal ml-1">/month</span>
              </div>
              <Button className="w-full bg-white text-black hover:bg-secondary-foreground">
                {plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};


export default Pricing;