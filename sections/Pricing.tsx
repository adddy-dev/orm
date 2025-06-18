import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';

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

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full bg-background md:my-12 md:py-20 py-16 px-4 sm:px-6 lg:px-8" id="pricing">
      <motion.div
        className="max-w-screen-xl mx-auto text-center md:mb-16 mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }
          }
        }}
      >
        <h2 className="text-3xl md:text-6xl font-bold text-primary mb-6">
          Flexible Pricing Plans
        </h2>
        <p className="text-base md:text-xl text-muted-foreground">
          Choose the perfect plan for your organization's needs
        </p>
      </motion.div>

      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={fadeIn}
          >
            <Card className="relative flex flex-col border-2 transition-all duration-300 border-muted-foreground hover:border-secondary hover:scale-[102%]">
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default Pricing;