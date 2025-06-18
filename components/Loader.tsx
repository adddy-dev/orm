'use client'

import { motion } from 'framer-motion'

const Loader = () => {
   return (
      <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
         <div className="relative w-20 h-20">
            {/* Background Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-neutral-800" />

            {/* Rotating Container */}
            <motion.div
               className="absolute inset-0 flex items-center justify-center"
               initial={{ rotate: 0 }}
               animate={{ rotate: 360 }}
               transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: 'linear'
               }}
            >
               {/* Dot */}
               <div className="w-3 h-3 bg-primary rounded-full translate-x-9" />
            </motion.div>
         </div>
      </div>
   )
}

export default Loader
