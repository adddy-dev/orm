import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGoogle, FaTwitter, FaReddit, FaInstagram } from 'react-icons/fa';

const platforms = [
   {
      platform: "Google Reviews",
      icon: <FaGoogle className="text-primary text-3xl mb-4" />,
      description: "Monitor and respond to reviews to boost local trust and visibility"
   },
   {
      platform: "Twitter",
      icon: <FaTwitter className="text-primary text-3xl mb-4" />,
      description: "Real-time monitoring and response management"
   },
   {
      platform: "Reddit",
      icon: <FaReddit className="text-primary text-3xl mb-4" />,
      description: "Community engagement and sentiment analysis"
   },
   {
      platform: "Instagram",
      icon: <FaInstagram className="text-primary text-3xl mb-4" />,
      description: "Visual content strategy and brand storytelling"
   }
];


function SocialManagement() {

   const cardRef = useRef(null);
   const mouseX = useMotionValue(0);
   const mouseY = useMotionValue(0);

   const rotateX = useTransform(mouseY, [0, 1], [8, -8]);
   const rotateY = useTransform(mouseX, [0, 1], [-8, 8]);
   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = (cardRef.current as HTMLDivElement).getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
   };

   return (

      <motion.section
         className="w-full bg-secondary/5 md:my-12 py-16 md:py-20 px-4 sm:px-6 lg:px-8"
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
               <h2 className="text-3xl md:text-6xl font-bold text-primary mb-6">Social Media Management</h2>
               <p className="text-base md:text-xl text-muted-foreground">
                  We handle your social media presence across all major platforms
               </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {platforms.map((item, index) => (
                  <motion.div
                  ref={cardRef}
                  key={item.platform}
                  className="relative bg-card rounded-lg p-6 shadow group transition-transform duration-300"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => {
                     mouseX.set(0.5);
                     mouseY.set(0.5);
                  }}
                  style={{
                     rotateX,
                     rotateY,
                     transformPerspective: 1000,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
               >
                  {/* Glow Border */}
                  <motion.div
                     className="absolute inset-0 rounded-lg border-2 border-transparent pointer-events-none group-hover:border-primary transition-colors duration-300"
                     initial={{ opacity: 0 }}
                     whileHover={{ opacity: 1 }}
                  />
         
                  <div className="flex flex-col items-start relative z-10">
                     {/* Icon Animation */}
                     <motion.div
                        whileHover={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.6 }}
                        className="mb-2"
                     >
                        {item.icon}
                     </motion.div>
                     <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                        {item.platform}
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

export default SocialManagement