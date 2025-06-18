import React from 'react'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaSearch, FaChartBar, FaTools, FaComments, FaExclamationTriangle } from 'react-icons/fa';


function WhatWeOffer() {

   const offerings = [
      {
         title: "Reputation Monitoring",
         icon: <FaSearch className="text-primary text-3xl mb-4" />,
         description: "Real-time tracking of your online presence across multiple platforms and channels"
      },
      {
         title: "Content Management",
         icon: <FaTools className="text-primary text-3xl mb-4" />,
         description: "Strategic content creation and distribution to build your brand authority"
      },
      {
         title: "Crisis Management",
         icon: <FaExclamationTriangle className="text-primary text-3xl mb-4" />,
         description: "Rapid response and damage control for reputation-threatening situations"
      },
      {
         title: "Analytics & Reporting",
         icon: <FaChartBar className="text-primary text-3xl mb-4" />,
         description: "Detailed insights and metrics to measure your online reputation growth"
      },
      {
         title: "Review Management",
         icon: <FaComments className="text-primary text-3xl mb-4" />,
         description: "Comprehensive handling of customer reviews and feedback"
      },
      {
         title: "Brand Protection",
         icon: <FaShieldAlt className="text-primary text-3xl mb-4" />,
         description: "Proactive measures to safeguard your brand's digital assets"
      }
   ];


   return (
      <motion.section
         className="w-full bg-background md:my-16 py-16 md:py-20 px-4 sm:px-6 lg:px-8"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false }}
         transition={{ duration: 0.6 }}
      >
         <div className="max-w-screen-xl mx-auto">
            <motion.div
               className="text-center mb-16"
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
               <h2 className="text-3xl md:text-6xl font-bold text-primary mb-6">What We Offer</h2>
               <p className="text-base md:text-xl text-muted-foreground">
                  Comprehensive solutions to help you manage and enhance your online presence
               </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {offerings.map((item, index) => (
                  <motion.div
                     key={item.title}
                     className="bg-card rounded-lg p-6 shadow transition-all hover:shadow-xl hover:-mt-2 hover:scale-[1.03] duration-300 group"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: false }}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                     <div className="flex flex-col items-start">
                        {item.icon}
                        <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                           {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                     </div>
                  </motion.div>
               ))}


            </div>
         </div>
      </motion.section>
   )
}

export default WhatWeOffer